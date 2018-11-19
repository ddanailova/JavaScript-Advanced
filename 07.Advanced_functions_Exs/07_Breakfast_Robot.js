let manager = (() => {
    let cookingRobot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
        restock: restockAction,
        prepare: prepareAction,
        report: report
    };

    let receipts = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10,},
    };

    function restockAction(type, qty) {
        cookingRobot[type] += +qty;
        return 'Success';
    }

    function prepareAction(receipt, qty) {
        let stockElements = Object.keys(cookingRobot).filter(k => k !== 'restock' && k !== 'prepare' && k !== 'report');
        let ingredients = Object.keys(receipts[receipt]);
        let currentState = {
            protein: cookingRobot.protein,
            carbohydrate: cookingRobot.carbohydrate,
            fat: cookingRobot.fat,
            flavour: cookingRobot.flavour,
        };
        for (let item of ingredients) {

            if (cookingRobot[item] < receipts[receipt][item] * (+qty)) {
                return `Error: not enough ${item} in stock`;
            }
            currentState[item] = cookingRobot[item] - receipts[receipt][item] * (+qty);
        }
        stockElements.forEach(e => {
            cookingRobot[e] = currentState[e];
        });

        return 'Success';
    }

    function report() {
        let result = "";
        Object.keys(cookingRobot).filter(k => k !== 'restock' && k !== 'prepare' && k !== 'report')
            .forEach(e => {
                result += `${e}=${cookingRobot[e]} `
            });
        return result.trim();
    }

    return function (input) {
        let [command, receipt, qty] = input.split(" ").map(e=>e.trim());

        if (command === "report") {
            return cookingRobot.report();
        } else {
            return cookingRobot[command](receipt, qty);
        }
    };
})();



console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));


