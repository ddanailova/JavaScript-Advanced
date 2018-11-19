let result = (function () {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString(){
            let parentToSering = super.toString().slice(0, -1);
            return parentToSering + `, subject: ${this.subject})`
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString(){
            let parentToSering = super.toString().slice(0, -1);
            return parentToSering + `, course: ${this.course})`
        }
    }
    return {Person, Teacher, Student}
})();

let Person = result.Person;
let Teacher = result.Teacher;
let Student = result.Student;

console.log(new Person('Pesho', 'pesho@gmail.com').toString());
console.log(new Teacher('Gosho', 'gosho@abv.bg', 'math').toString());
console.log(new Teacher('Maria', 'maria@gmail.co.uk', 'JavaScript').toString());