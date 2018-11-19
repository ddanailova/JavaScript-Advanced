let assert = require('chai').assert;

class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

describe("HolidayPackage(string, string)", () => {
    it("should be object with undefined properties if no parameters are provided", () => {
        let result = new HolidayPackage();
        assert.isObject(result);
        assert.isUndefined(result.destination);
        assert.isUndefined(result.season);
        assert.isArray(result.vacationers);
        assert.isEmpty(result.vacationers);
    });

    it("\"should be object with correct properties if parameters are provided", () => {
        let result = new HolidayPackage('Rome', 'Summer');
        assert.isObject(result);
        assert.equal(result.destination, 'Rome');
        assert.equal(result.season, 'Summer');
        assert.isArray(result.vacationers);
        assert.isEmpty(result.vacationers);
    });

    describe("insuranceIncluded", () => {
        it("should have default value false", () => {
            let package = new HolidayPackage('Rome', 'Summer');
            let insurance = package.insuranceIncluded;
            assert.isFalse(insurance);
        });
        it("should throw error if not boolean value is provided",()=>{
            let package = new HolidayPackage('Rome','Summer');
            let input = "true";
            assert.throws(()=>{package.insuranceIncluded = input;},Error, "Insurance status must be a boolean");
        });

        it("should throw error if not boolean value is provided",()=>{
            let package = new HolidayPackage('Rome','Summer');
            let input = true;
            package.insuranceIncluded = input;
            assert.isTrue(package.insuranceIncluded);
        });
    });

    describe("showVacationers()", () => {
        it("should return massage if no vacationers are included", () => {
            let package = new HolidayPackage('Rome', 'Summer');
            let massage = package.showVacationers();
            assert.equal(massage, "No vacationers are added yet");
        });

        it("should return single person when 1 vacationer is included", () => {
            let package = new HolidayPackage('Rome', 'Summer');
            package.vacationers.push("Pesho");
            let vacationers = package.showVacationers();
            assert.equal(vacationers, "Vacationers:\nPesho");
        });

        it("should return all people when more then 1 vacationers are included", () => {
            let package = new HolidayPackage('Rome', 'Summer');
            package.vacationers.push("Pesho");
            package.vacationers.push("Gosho");
            package.vacationers.push("Maria");
            let vacationers = package.showVacationers();
            assert.equal(vacationers, "Vacationers:\nPesho\nGosho\nMaria");
        });
    });

    describe("showVacationers(name)", () => {
        it("should throw and error if no name is provided", () => {
            let package = new HolidayPackage('Rome', 'Summer');
            assert.throws(() => {
                package.addVacationer()
            }, Error, "Vacationer name must be a non-empty string");
        });

        it("should throw and error if empty string is provided", () => {
            let package = new HolidayPackage('Rome', 'Summer');
            assert.throws(() => {
                package.addVacationer(" ")
            }, Error, "Vacationer name must be a non-empty string");
        });

        it("should throw and error when only one name is provided", () => {
            let package = new HolidayPackage('Rome', 'Summer');
            let name = "Pesho";
            assert.throws(() => {
                package.addVacationer(name)
            }, Error, "Name must consist of first name and last name");
        });

        it("should add vacationer if first and last names are provided", () => {
            let package = new HolidayPackage('Rome', 'Summer');
            let name = "Pesho Georgiev";
            package.addVacationer(name);
            assert.equal(package.showVacationers(), "Vacationers:\nPesho Georgiev");
        });
    });

    describe("generateHolidayPackage()",()=>{
        it("should throw and error if no vacationers have signed up", ()=>{
            let package = new HolidayPackage('Rome', 'Summer');
            assert.throws(()=>{package.generateHolidayPackage()}, Error, "There must be at least 1 vacationer added")
        });

        it("should calculate correctly when vacationers have signed up for Summer with no insurance", ()=>{
            let package = new HolidayPackage('Rome', 'Summer');
            package.addVacationer('Ivan Ivanov');
            package.addVacationer('Pesho Ivanov');
            let result = package.generateHolidayPackage();
            let expexted = "Holiday Package Generated\nDestination: Rome\nVacationers:\nIvan Ivanov\nPesho Ivanov\nPrice: 1000";
            assert.equal(result, expexted);
        });

        it("should calculate correctly when vacationers have signed up for Summer with insurance", ()=>{
            let package = new HolidayPackage('Rome', 'Summer');
            package.addVacationer('Ivan Ivanov');
            package.addVacationer('Pesho Ivanov');
            package.insuranceIncluded = true;
            let result = package.generateHolidayPackage();
            let expexted = "Holiday Package Generated\nDestination: Rome\nVacationers:\nIvan Ivanov\nPesho Ivanov\nPrice: 1100";
            assert.equal(result, expexted);
        });

        it("should calculate correctly when vacationers have signed up for Winter with no insurance", ()=>{
            let package = new HolidayPackage('Rome', 'Winter');
            package.addVacationer('Ivan Ivanov');
            package.addVacationer('Pesho Ivanov');
            let result = package.generateHolidayPackage();
            let expexted = "Holiday Package Generated\nDestination: Rome\nVacationers:\nIvan Ivanov\nPesho Ivanov\nPrice: 1000";
            assert.equal(result, expexted);
        });

        it("should calculate correctly when vacationers have signed up for Winter with insurance", ()=>{
            let package = new HolidayPackage('Rome', 'Winter');
            package.addVacationer('Ivan Ivanov');
            package.addVacationer('Pesho Ivanov');
            package.insuranceIncluded = true;
            let result = package.generateHolidayPackage();
            let expexted = "Holiday Package Generated\nDestination: Rome\nVacationers:\nIvan Ivanov\nPesho Ivanov\nPrice: 1100";
            assert.equal(result, expexted);
        });

        it("should calculate correctly when vacationers have signed up not for Winter or Summer with no insurance", ()=>{
            let package = new HolidayPackage('Rome', 'Spring');
            package.addVacationer('Ivan Ivanov');
            package.addVacationer('Pesho Ivanov');
            let result = package.generateHolidayPackage();
            let expexted = "Holiday Package Generated\nDestination: Rome\nVacationers:\nIvan Ivanov\nPesho Ivanov\nPrice: 800";
            assert.equal(result, expexted);
        });

        it("should calculate correctly when vacationers have signed up not for Winter or Summer  with insurance", ()=>{
            let package = new HolidayPackage('Rome', 'Spring');
            package.addVacationer('Ivan Ivanov');
            package.addVacationer('Pesho Ivanov');
            package.insuranceIncluded = true;
            let result = package.generateHolidayPackage();
            let expexted = "Holiday Package Generated\nDestination: Rome\nVacationers:\nIvan Ivanov\nPesho Ivanov\nPrice: 900";
            assert.equal(result, expexted);
        });
    });
});