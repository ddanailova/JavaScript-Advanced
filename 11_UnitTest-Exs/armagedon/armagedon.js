let assert = require('chai').assert;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

describe("ArmageDOM", ()=>{
    let oldHTML;
    let htmlSelector;
    beforeEach("Init the HTML", ()=>{
        document.body.innerHTML =`<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
        htmlSelector = $('#target');
        oldHTML = htmlSelector.html();
    });

    it("should not remove element with invalid selector",()=>{
        let selector=$('.nested');
        nuke(selector, 5);
        assert.equal(htmlSelector.html(), oldHTML);
    });

    it("should not remove element two equal selectors",()=>{
        let selector=$('.nested');
        nuke(selector, selector);
        assert.equal(htmlSelector.html(), oldHTML);
    });

    it("should not remove element with two valid selectors",()=>{
        let selector1=$('.nested');
        let selector2=$('.inside');
        nuke(selector1, selector2);
        assert.equal(htmlSelector.html(), oldHTML);
    });

    it("should remove element with two valid selectors in one class",()=>{
        let selector1=$('.nested');
        let selector2=$('.target');
        nuke(selector1, selector2);
        assert.notEqual(htmlSelector.html(), oldHTML);
    });
});