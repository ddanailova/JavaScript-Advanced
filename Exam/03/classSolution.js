class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    get numberOfChildren() {
        let count = 0;
        Object.keys(this.kids).forEach(grade => {
            count += this.kids[grade].length;
        });

        return count;
    }

    registerChild(name, grade, budget) {
        if (this.budget > budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        for (let kid of this.kids[grade]) {
            let currentName = kid.split('-')[0];
            if (currentName === name) {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            }
        }

        this.kids[grade].push(`${name}-${budget}`);
        return this.kids[grade];
    }

    removeChild(name, grade) {
        let target = null;
        if (this.kids[grade]) {
            for (let i = 0; i < this.kids[grade].length; i++) {
                let currentName = this.kids[grade][i].split('-')[0];
                if (currentName === name) {
                    target = i;
                    break;
                }
            }
            if (target === 0 || target) {
                this.kids[grade].splice(target, 1);
                return this.kids[grade];
            }
        }
        return `We couldn't find ${name} in ${grade} grade.`
    }

    toString() {
        let output="";
        if(this.numberOfChildren!==0){
            output = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
            Object.keys(this.kids).sort((a, b) => a - b).forEach(grade => {
                output += `Grade: ${grade}\n`;
                this.kids[grade].forEach((kid, index) => {
                    output += `${index + 1}.${kid}\n`;
                })
            });
        }else{
            output=`No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }


        return output;
    }
}

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
vacation.registerChild('Gosho', 5, 2000);
vacation.registerChild('Pesho', 6, 2100);
vacation.registerChild('Lilly', 6, 2100);
vacation.registerChild('Marto', 6, 2100);
vacation.registerChild('Lilly', 5, 2100);
console.log(vacation.kids);
console.log(vacation.removeChild('Lilly', 6));
console.log(vacation.kids);