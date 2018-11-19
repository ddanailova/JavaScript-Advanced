let result = (function() {
    class Employee{
        constructor(name, age){
            if(new.target === Employee){
                throw new Error("Cannot make instance of abstract class Employee.");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work(){
            let currentTask = this.tasks.shift();
            console.log(`${this.name} ` + currentTask);
            this.tasks.push(currentTask);
        }

        getSalary(){
            return this.salary;
        }

        collectSalary(){
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }
    }

    class Junior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push("is working on a simple task.");
        }
    }

    class Senior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push("is working on a complicated task.");
            this.tasks.push("is taking time off work.");
            this.tasks.push("is supervising junior workers.");
        }
    }

    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            this.dividend = 0;
            this.tasks.push("scheduled a meeting.");
            this.tasks.push("is preparing a quarterly report.");
        }

        getSalary(){
            return super.getSalary() + this.dividend;
        }
    }

    return {Employee, Junior, Senior, Manager}
})();

// let Employee = result.Employee;
let Junior = result.Junior;
let Senior = result.Senior;
let Manager = result.Manager;

// let guy1 = new Junior('pesho', 20);
// let guy2 = new Senior('gosho', 21);
// let guy3 = new Manager('ivan', 22);
//
// console.log(guy1.hasOwnProperty('name'));
// console.log(guy1.hasOwnProperty('age'));
// console.log(guy1.hasOwnProperty('salary'));
//
// console.log(guy2.hasOwnProperty('name'));
// console.log(guy2.hasOwnProperty('age'));
// console.log(guy2.hasOwnProperty('salary'));
//
//
// console.log(guy3.hasOwnProperty('name'));
// console.log(guy3.hasOwnProperty('age'));
// console.log(guy3.hasOwnProperty('salary'));

let pesho = new Junior("Pesho", 25);
let mariya = new Senior("Mariya", 30);
let bigBoss = new Manager("Boss", 45);

pesho.work();
pesho.salary =1000;
pesho.collectSalary();
console.log(pesho.hasOwnProperty("salary"));

mariya.work();
mariya.salary = 1500;
mariya.work();
mariya.collectSalary();

bigBoss.work();
bigBoss.salary =5000;
bigBoss.divident = 2000;
bigBoss.collectSalary();