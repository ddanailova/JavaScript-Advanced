let assert = require('chai').assert;
let PaymentPackage = require('./02_PaymentPackage');

describe("PaymentPackage constructor", () => {
    it('should trow error if one input param is provided', () => {
        assert.throws(() => {
            const hrPack = new PaymentPackage('HR Services');
        }, Error);
    });

    it('should trow error if name is not a string', () => {
        assert.throws(() => {
            const hrPack = new PaymentPackage(1500, 1500);
        }, Error, 'Name must be a non-empty string');
    });

    it('should trow error if name is not a empty string', () => {
        assert.throws(() => {
            const hrPack = new PaymentPackage('', 1500);
        }, Error, 'Name must be a non-empty string');
    });

    it('should trow error if value is not a number', () => {
        assert.throws(() => {
            const hrPack = new PaymentPackage('HR Services', '1500');
        }, Error, 'Value must be a non-negative number');
    });

    it('should trow error if value is negative number', () => {
        assert.throws(() => {
            const hrPack = new PaymentPackage('HR Services', -1500);
        }, Error, 'Value must be a non-negative number');
    });

    it("should correctly instantiated with two parameter -  a string name and number value", () => {
        const hrPack = new PaymentPackage('HR Services', 1500);
        assert.equal(hrPack.name, 'HR Services');
        assert.equal(hrPack.value, 1500);
        assert.equal(hrPack.VAT, 20);
        assert.isTrue(hrPack.active);
    });

    it("should correctly instantiated with two parameter -  a string name and number value zero", () => {
        const hrPack = new PaymentPackage('HR Services', 0);
        assert.equal(hrPack.name, 'HR Services');
        assert.equal(hrPack.value, 0);
        assert.equal(hrPack.VAT, 20);
        assert.isTrue(hrPack.active);
    });

    describe("Getters and setters of props", () => {
        it("should throw error if VAT is changed with a non number value", () => {
            let newPack = new PaymentPackage('HR Services', 1500);
            assert.throws(() => {
                newPack.VAT = 'Test';
            }, Error, 'VAT must be a non-negative number')
        });
        it("should throw error if VAT is changed with a negative value", () => {
            let newPack = new PaymentPackage('HR Services', 1500);
            assert.throws(() => {
                newPack.VAT = -20;
            }, Error, 'VAT must be a non-negative number')
        });
        it("should change VAT if positive number value", () => {
            let newPack = new PaymentPackage('HR Services', 1500);
            newPack.VAT = 100;
            assert.equal(newPack.VAT, 100);
        });
        it("should change VAT if zero", () => {
            let newPack = new PaymentPackage('HR Services', 1500);
            newPack.VAT = 0;
            assert.equal(newPack.VAT, 0);
        });

        it("should throw error if active is changed with a non boolean value", () => {
            let newPack = new PaymentPackage('HR Services', 1500);
            assert.throws(() => {
                newPack.active = -20;
            }, Error, 'Active status must be a boolean')
        });
        it("should change active if boolean is provied", () => {
            let newPack = new PaymentPackage('HR Services', 1500);
            newPack.active = false;
            assert.isFalse(newPack.active);
        });
    });

    describe("toString function", () => {
        let newPack;
        beforeEach("initiate new instance", () => {
            newPack = new PaymentPackage('HR Services', 1500);
            newPack.VAT = 18;
            newPack.active = false;
        });
        it("should append the label to inactive if the prop active is false", () => {
            let output = newPack.toString();
            assert.equal(output, 'Package: HR Services (inactive)\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 18%): 1770')
        });

        it("should not append the label if the prop active is true", () => {
            newPack.active = true;
            let output = newPack.toString();
            assert.equal(output, 'Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 18%): 1770')
        });

        it("should calculate VAT corectly with floating numbers", () => {
            newPack.value = 1478.25;
            let calculateVAT = newPack.value * (1 + newPack.VAT / 100);
            let output = newPack.toString();
            assert.closeTo(calculateVAT, 1744.33, 0.01 );
        });
    });
});