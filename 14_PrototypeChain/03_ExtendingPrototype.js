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

function extendClass (cl){
    cl.prototype.species="Human";
    cl.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ` + this.toString();
    }
}

let Person = result.Person;
let Teacher = result.Teacher;
let Student = result.Student;

let p = new Person ('Pesho', 'pesho@gmail.com');
console.log(p.toString());
extendClass(Person);
console.log(p.toSpeciesString());

