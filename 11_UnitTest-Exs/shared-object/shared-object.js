let assert = require('chai').assert;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


describe("sharedObject",()=>{
    let oldHTML;
    let htmlSelector;
    beforeEach("Saving the initial state of the HTML",()=>{
        document.body.innerHTML = `<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>`;

        htmlSelector = $('#wrapper');
        oldHTML = htmlSelector.html();
    });

    it("should have default value null for name",()=>{
        assert.isNull(sharedObject.name);
    });

    it("should have default value null for income",()=>{
        assert.isNull(sharedObject.income);
    });

    describe("changeName(name)", ()=>{
        it("should not change the HTML if the input is Empty string", ()=>{
            let input ="";
            sharedObject.changeName(input);
            assert.equal(htmlSelector.html(), oldHTML);
        });

        it("should not change the HTML if the input is number", ()=>{
            let input = 1000;
            sharedObject.changeName(input);
            assert.equal(htmlSelector.html(), oldHTML);
        });

        it("should not change the HTML if the input is object", ()=>{
            let input = {name:"Pesho"};
            sharedObject.changeName(input);
            assert.equal(htmlSelector.html(), oldHTML);
        });

        it("should change the textbox's value and sharedObject name if the input correct", ()=>{
            let input ="Pesho";
            sharedObject.changeName(input);
            assert.equal($('#name').val(), "Pesho");
            assert.equal(sharedObject.name, "Pesho");
        });
    });

    describe("changeIncome(income)", ()=>{
        it("should not change the HTML if the input is not a positive integer ", ()=>{
            let input =-2000;
            sharedObject.changeIncome(input);
            assert.equal(htmlSelector.html(), oldHTML);
        });

        it("should not change the HTML if the input is 0", ()=>{
            let input =0;
            sharedObject.changeIncome(input);
            assert.equal(htmlSelector.html(), oldHTML);
        });

        it("should not change the HTML if the input is string", ()=>{
            let input ="1000";
            sharedObject.changeIncome(input);
            assert.equal(htmlSelector.html(), oldHTML);
        });

        it("should change the textbox's value and sharedObject income if the input correct", ()=>{
            let input =1000;
            sharedObject.changeIncome(input);
            assert.equal($('#income').val(), 1000);
            assert.equal(sharedObject.income, 1000);
        });
    });

    describe("updateName()",()=>{
        it("should not do changes if the textbox's value is empty string", ()=>{
            if($('#name').val()===""){
                assert.equal(htmlSelector.html(), oldHTML);
            }
        });

        it("should change the name of the sharedObject to equalthe textbox's value", ()=>{
            if($('#name').val()!==""){
                assert.equal($('#name').val(), sharedObject.name)
            }
        });
    });

    describe("updateIncome()",()=>{
        it("should not do changes if the textbox's value can not be parsed to an integer", ()=>{
            if(!parseInt($('#income').val())){
                assert.equal(htmlSelector.html(), oldHTML);
            }
        });

        it("should change the name of the sharedObject to equalthe textbox's value", ()=>{
            if(parseInt($('#income').val())){
                assert.equal(parseInt($('#income').val()), sharedObject.name)
            }
        });
    });
});