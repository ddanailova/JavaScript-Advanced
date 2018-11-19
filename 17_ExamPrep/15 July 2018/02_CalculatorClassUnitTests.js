let assert = require('chai').assert;
let Calculator = require('./02_CalculatorClass');

describe('Calculator Class',()=>{
    let calculator;
    beforeEach('initialize calculator', ()=>{
        calculator = new Calculator();
    });
    it('should have a property expenses with default value empty array', ()=>{
        assert.isArray(calculator.expenses);
        assert.isEmpty(calculator.expenses);
    });

    describe('function add(data)', ()=>{
        it('should add numbers', ()=>{
            calculator.add(10);
            calculator.add(20.5);
            calculator.add(-30);
            assert.equal(calculator.expenses[0], 10);
            assert.equal(calculator.expenses[1], 20.5);
            assert.equal(calculator.expenses[2], -30);
        });
        it('should add strings', ()=>{
            calculator.add("ten");
            calculator.add("times");
            calculator.add("more");
            assert.equal(calculator.expenses[0], "ten");
            assert.equal(calculator.expenses[1],"times");
            assert.equal(calculator.expenses[2], "more");
        });
        it('should add mixed type input', ()=>{
            calculator.add(10);
            calculator.add("times");
            calculator.add(true);
            assert.equal(calculator.expenses[0], 10);
            assert.equal(calculator.expenses[1],"times");
            assert.equal(calculator.expenses[2],true);
        });
    });

    describe('function divideNums()',()=>{
        it('should throw error if there are no items in expenses',()=>{
            assert.throws(()=>{calculator.divideNums()}, Error, 'There are no numbers in the array!')
        });

        it('should throw error if there are no numbers in expenses',()=>{
            calculator.add("ten");
            calculator.add("times");
            calculator.add("more");
            assert.throws(()=>{calculator.divideNums()}, Error, 'There are no numbers in the array!')
        });
        it('should return massage if expenses element is 0',()=>{
            calculator.add(10);
            calculator.add(0);
            calculator.add(20);
            let massage = calculator.divideNums();
            assert.equal(massage, 'Cannot divide by zero');
        });

        it('should return correct calculations as floating point number if correct integers are provided',()=>{
            calculator.add(20);
            calculator.add(10);
            calculator.add(5);
            let result = calculator.divideNums();
            assert.equal(calculator.expenses[0], 0.4);
            assert.equal(result, 0.4);
        });

        it('should return correct calculations as floating point number if correct integers are provided',()=>{
            calculator.add(20);
            calculator.add(10);
            calculator.add(5);
            let result = calculator.divideNums();
            assert.equal(calculator.expenses[0], 0.4);
            assert.equal(result, 0.4);
        });

        it('should return correct calculations number if correct one negative integers are provided',()=>{
            calculator.add(20);
            calculator.add(-10);
            calculator.add(5);
            let result = calculator.divideNums();
            assert.equal(calculator.expenses[0], -0.4);
            assert.equal(result, -0.4);
        });

        it('should return correct calculations number if correct two negative integers are provided',()=>{
            calculator.add(20);
            calculator.add(-10);
            calculator.add(-5);
            let result = calculator.divideNums();
            assert.equal(calculator.expenses[0], 0.4);
            assert.equal(result, 0.4);
        });
        it('should return correct calculations as floating point number if correct floating point number are provided',()=>{
            calculator.add(200.5);
            calculator.add(10);
            calculator.add(5.4);
            let result = calculator.divideNums();
            assert.closeTo(calculator.expenses[0], 3.7129629629, 0.0001);
            assert.closeTo(result, 3.7129629629, 0.0001);
        });
    });

    describe('toString()',()=>{
        it('should return massage if expenses is empty',()=>{
            let output = calculator.toString();
            assert.equal(output, 'empty array')
        });

        it('should return the array joined by -> ',()=>{
            calculator.add(10);
            calculator.add('Pesho');
            calculator.add("5");
            let output = calculator.toString();
            assert.equal(output, '10 -> Pesho -> 5')
        });
    });

    describe("function orderBy()",()=> {
        it("should sort descending if date is only numbers", ()=>{
            calculator.add(10);
            calculator.add(20);
            calculator.add(5);
            let output = calculator.orderBy();
            assert.equal(output, '5, 10, 20')
        });

        it("should sort alphabetically if date is only strings", ()=>{
            calculator.add("10");
            calculator.add("Pesho");
            calculator.add("Gosho");
            let output = calculator.orderBy();
            assert.equal(output, '10, Gosho, Pesho')
        });

        it("should sort correctly if data is with mixed types", ()=>{
            calculator.add(10);
            calculator.add(true);
            calculator.add("Pesho");
            let output = calculator.orderBy();
            assert.equal(output, '10, Pesho, true')
        });
    });
});