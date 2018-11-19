let assert=require('chai').assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("addFive(num)",()=>{
    it("should return undefined if input is not a number",()=>{
        let input ="something";
        let result = mathEnforcer.addFive(input);

        assert.isUndefined(result);
    });
    it("should return undefined if input undefined",()=>{
        let input =undefined;
        let result = mathEnforcer.addFive(input);

        assert.isUndefined(result);
    });
    it("should return undefined if input null",()=>{
        let input =null;
        let result = mathEnforcer.addFive(input);

        assert.isUndefined(result);
    });

    it("should return undefined if input object",()=>{
        let input ={"a":10};
        let result = mathEnforcer.addFive(input);

        assert.isUndefined(result);
    });
    it("should return correct if input is a positive number",()=>{
        let input =5;
        let result = mathEnforcer.addFive(input);

        assert.equal(result, 10);
    });

    it("should return correct if input is a positive number",()=>{
        let input =-5;
        let result = mathEnforcer.addFive(input);

        assert.equal(result, 0);
    });

    it("should return correct if input is a floating number",()=>{
        let input =5.412;
        let result = mathEnforcer.addFive(input);

        assert.closeTo(result, 10.412, 0.001);
    });
    it("should return correct if input is a 0",()=>{
        let input =0;
        let result = mathEnforcer.addFive(input);

        assert.equal(result, 5);
    });
});

describe("subtractTen(num)",()=>{
    it("should return undefined if input is not a number",()=>{
        let input ="something";
        let result = mathEnforcer.subtractTen(input);

        assert.isUndefined(result);
    });
    it("should return undefined if input undefined",()=>{
        let input =undefined;
        let result = mathEnforcer.subtractTen(input);

        assert.isUndefined(result);
    });
    it("should return undefined if input null",()=>{
        let input =null;
        let result = mathEnforcer.subtractTen(input);

        assert.isUndefined(result);
    });

    it("should return undefined if input object",()=>{
        let input ={"a":10};
        let result = mathEnforcer.subtractTen(input);

        assert.isUndefined(result);
    });
    it("should return correct if input is a number",()=>{
        let input =5;
        let result = mathEnforcer.subtractTen(input);

        assert.equal(result, -5);
    });
    it("should return correct if input is a negative number",()=>{
        let input =-5;
        let result = mathEnforcer.subtractTen(input);

        assert.equal(result, -15);
    });

    it("should return correct if input is a floating number",()=>{
        let input =15.412;
        let result = mathEnforcer.subtractTen(input);

        assert.closeTo(result, 5.412, 0.001);
    });
    it("should return correct if input is a 0",()=>{
        let input =0;
        let result = mathEnforcer.subtractTen(input);

        assert.equal(result, -10);
    });
});

describe("sum(num1, num2)",()=>{
    it("should return undefined if first input is not a number",()=>{
        let firstInput ="something";
        let secondInput =3;
        let result = mathEnforcer.sum(firstInput,secondInput);

        assert.isUndefined(result);
    });
    it("should return undefined if second input is not a number",()=>{
        let firstInput =5;
        let secondInput ="five";
        let result = mathEnforcer.sum(firstInput,secondInput);

        assert.isUndefined(result);
    });
    it("should return positive if input is positive",()=>{
        let firstInput =5;
        let secondInput =5;
        let result = mathEnforcer.sum(firstInput,secondInput);

        assert.equal(result,10);
    });
    it("should return negative if input is negative",()=>{
        let firstInput =-5;
        let secondInput =-5;
        let result = mathEnforcer.sum(firstInput,secondInput);

        assert.equal(result,-10);
    });

    it("should return correct for floating type numbers",()=>{
        let firstInput =5.14;
        let secondInput =1.54;
        let result = mathEnforcer.sum(firstInput,secondInput);

        assert.equal(result,6.68);
    });
});