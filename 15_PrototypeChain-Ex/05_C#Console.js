const assert = require('chai').assert;
const expect =require('chai').expect;
class Console {

    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                let tokens = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (tokens.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < tokens.length; i++) {
                        let number = Number(tokens[i].substring(1, tokens[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(tokens[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
}

describe("writeLine", () => {
    it("should be a function", () => {
        assert.isFunction(Console.writeLine);
    });
    it("should return string when the input is a single string", () => {
        let input = 'pesho';
        let result = Console.writeLine(input);
        assert.equal(input, result)
    });

    it("should return JSON when the input is a single object", () => {
        let input = {
            person: "pesho",
            age: 18
        };
        let result = Console.writeLine(input);
        assert.equal(JSON.stringify(input), result)
    });

    it("should throw error if the input is multiple arguments but the first one is not a string", ()=>{
        let mainInput = 152;
        let placeholder = 1;

        assert.throws(()=>{Console.writeLine(mainInput,placeholder)}, TypeError, 'No string format given!');
    });

    it("should throw error if parameters don't match number of placeholders", () => {
        let input = "This {0} a simple {1}";
        assert.throws(()=>{Console.writeLine(input,"is", "simple","example")}, RangeError, 'Incorrect amount of parameters given!');
    });
    it("should throw error if placeholders value is bigger then number of parameters", () => {
        let input = "This {0} a simple {1}, {15}";
        assert.throws(()=>{Console.writeLine(input,"is", "simple","example")}, RangeError, 'Incorrect placeholders given!');

    });

    it("should work correctly with string parameters", () => {
        let input = "This {0} too {1}, {2}";
        let result = Console.writeLine(input,"is", "simple","example");
        assert.equal(result, "This is too simple, example");

    });

    it("should work correctly with number parameters", () => {
        let input = "The sum of {0} and {1} is {2}";
        let result = Console.writeLine(input,2, 3,5);
        assert.equal(result, "The sum of 2 and 3 is 5");

    });

    it("should work correctly with number parameters", () => {
        let input = "The sum of {0} and {1} is {2}";
        let result = Console.writeLine(input,2, 3,5);
        assert.equal(result, "The sum of 2 and 3 is 5");

    });

    it("should work correctly with mixed parameters", () => {
        let input = "The sum of {0} and {1} is {2}";
        let result = Console.writeLine(input,2, 3,"five");
        assert.equal(result, "The sum of 2 and 3 is five");

    });
});