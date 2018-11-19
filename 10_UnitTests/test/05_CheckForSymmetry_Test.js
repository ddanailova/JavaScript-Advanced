let assert = require('chai').assert;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe("isSymmetric(arr)",()=>{
    it("should return true when symmetric",()=>{
        let input =[1,2,3,2,1];
        let result = isSymmetric(input);
        assert.isTrue(result);

    });

    it("should return false when not symmetric",()=>{
        let input =[1,2,3,2,-1];
        let result = isSymmetric(input);
        assert.isFalse(result);

        input = [1,2];
        result = isSymmetric(input);
        assert.isFalse(result);
    });

    it("should return true for symmetric object and string input ",()=>{
        let input =[5,'hi',{a:5},new Date(),{a:5},'hi',5];
        let result =isSymmetric(input);
        assert.isTrue(result);
    });

    it("should return false for non symmetric object and string input ",()=>{
        let input =[5,'hi',{a:5},new Date(),{X:5},'hi',5];
        let result =isSymmetric(input);
        assert.isFalse(result);
    });

    it("should return true when input is array with single value",()=>{
        let input = [1];
        let result = isSymmetric(input);
        assert.isTrue(result);
    });

    it("should return false when the input is not array", ()=>{
        let result = isSymmetric(1, 2, 3, 4);
        assert.isFalse(result);
    });
});