let assert = require('chai').assert;

let sharedObject=require('../shared-object/shared-object').sharedObject;

describe("sharedObject",()=>{
    it("should be type object and have certain properties", ()=>{
        let properties = ['name', 'income', 'changeName', 'changeIncome', 'updateName', 'updateIncome'];
        assert.isObject(sharedObject);
        assert.containsAllKeys(sharedObject, properties);

        Object.keys(sharedObject)
            .filter(key=>key !== "name" && key !== "income")
            .forEach(key=>{
                assert.isFunction(sharedObject[key]);
            })
    });
    it("should have default value of name null", ()=>{
        assert.isNull(sharedObject.name);
    });
    it("should have default value of income null", ()=>{
        assert.isNull(sharedObject.income);
    });

    describe("changeName(name)",()=>{
        it("should not change the name of sharedObject if empty string is provided",()=>{
            let input ="";
            sharedObject.changeName(input);

            assert.isNull(sharedObject.name);
        });
        it("should change the name of sharedObject if string is provided",()=>{
            let input ="Pesho";
            sharedObject.changeName(input);

            assert.equal(sharedObject.name, "Pesho");
        });
    });
});

