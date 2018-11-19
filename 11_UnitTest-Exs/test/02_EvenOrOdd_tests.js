let assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("isOddOrEven(string)", ()=>{
    it("should return undefined when input is undefined",()=>{
        let input = undefined;
        let result = isOddOrEven(input);
        assert.isUndefined(result);
    });
    it("should return undefined when input is number",()=>{
        let input = 2;
        let result = isOddOrEven(input);
        assert.isUndefined(result);
    });
    it("should return undefined when input is object",()=>{
        let input = {num:"odd"};
        let result = isOddOrEven(input);
        assert.isUndefined(result);
    });

    it("should return even whe string length is even",()=>{
        let input = 'even';
        let result = isOddOrEven(input);
        assert.equal(result,'even');
    });

    it("should return odd whe string length is odd",()=>{
        let input = 'odd';
        let result = isOddOrEven(input);
        assert.equal(result,'odd');
    });
    it("should return odd when input is 'undefined'",()=>{
        let input = 'undefined';
        let result = isOddOrEven(input);
        assert.equal(result,'odd');
    });
});