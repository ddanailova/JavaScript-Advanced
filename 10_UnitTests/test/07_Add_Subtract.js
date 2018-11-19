let assert = require('chai').assert;

function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        }
    }
}

describe("createCalculator", () => {
    it("should return object with all properties", () => {
        const properties = ["get", "add", "subtract"];
        const result = createCalculator();

        assert.isObject(result);
        assert.containsAllKeys(result, properties);

        Object.keys(result).forEach(key => {
            assert.isFunction(result[key]);
        })
    });
});

describe("get", () => {
    it("should return default value", () => {
        const calculator = createCalculator();

        const result = calculator.get();
        assert.equal(result, 0);
    });
});

describe("other cases", () => {
    let calculator;
    beforeEach(() => {
        calculator = createCalculator();
    });
    it("should create + add + add + get", () => {

        calculator.add(2);
        calculator.add(3);
        const result = calculator.get();

        assert.equal(result, 5);
    });

    it("should create + subtract + subtract + get", () => {
        calculator.subtract(2);
        calculator.subtract(3);
        const result = calculator.get();

        assert.equal(result, -5);
    });

    it("should create + add + subtract + get", () => {
        calculator.add(5.3);
        calculator.subtract(1.1);
        const result = calculator.get();

        assert.closeTo(result, 4.2, 0.1);
    });

    it("should create + add + subtract + add + subtract + get", () => {
        calculator.add(10);
        calculator.subtract('7');
        calculator.add('-2');
        calculator.subtract(-1);
        const result = calculator.get();

        assert.equal(result, 2);
    });

    it("should create + add('hello')+ get", () => {
        calculator.add('hello');
        const result = calculator.get();

        assert.isNaN(result);
    });

    it("should create + subtract('hello')+ get", () => {
        calculator.subtract('hello');
        const result = calculator.get();

        assert.isNaN(result);
    });
});