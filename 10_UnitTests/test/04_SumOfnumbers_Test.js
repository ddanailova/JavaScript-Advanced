const assert = require('chai').assert;
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe("sum(arr)",function () {
    it("should return positive for positive input", function () {
        let input = [1, 2];
        let result = sum(input);
        assert.equal(result, 3);
    });

    it("should return 0 for empty input", function () {
        let input = [];
        let result = sum(input);
        assert.equal(result, 0);
    });

    it("should return negative for negative input]", function () {
        let input = [-1, -2];
        let result = sum(input);
        assert.equal(result, -3);
    });

    it("should return NaN for string input", function () {
        let input = [ 1, "test"];
        let result = sum(input);
        assert.isNaN(result);
    });
});