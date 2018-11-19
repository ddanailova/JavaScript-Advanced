let assert = require('chai').assert;
let lookupChar = require('../03_CharLookup').lookupChar;

describe("lookupChar(string, index)",()=>{
    it("should return undefined when input string is not correct",()=>{
        let inputStr = 121;
        let index = 2;
        let result = lookupChar(inputStr, index);
        assert.isUndefined(result);
    });
    it("should return undefined when input index is char type",()=>{
        let inputStr = "pesho";
        let index = 'p';
        let result = lookupChar(inputStr, index);
        assert.isUndefined(result);
    });
    it("should return undefined when input index is float type",()=>{
        let inputStr = "pesho";
        let index = 3.14;
        let result = lookupChar(inputStr, index);
        assert.isUndefined(result);
    });
    it("should return 'Incorrect index' when index is negative",()=>{
        let inputStr = "pesho";
        let index = -2;
        let result = lookupChar(inputStr, index);
        assert.equal(result,"Incorrect index");
    });
    it("should return 'Incorrect index' when index bigger then string length",()=>{
        let inputStr = "pesho";
        let index = 5;
        let result = lookupChar(inputStr, index);
        assert.equal(result,"Incorrect index");
    });
    it("should return 'Incorrect index' when index is 0 and input string is empty",()=>{
        let inputStr = "";
        let index = 0;
        let result = lookupChar(inputStr, index);
        assert.equal(result,"Incorrect index");
    });
    it("should return correct char when index is 0 and valid string is provided",()=>{
        let inputStr = "pesho";
        let index = 0;
        let result = lookupChar(inputStr, index);
        assert.equal(result,"p");
    });
    it("should return correct char when index is valid",()=>{
        let inputStr = "pesho";
        let index = 3;
        let result = lookupChar(inputStr, index);
        assert.equal(result,"h");
    });
});
