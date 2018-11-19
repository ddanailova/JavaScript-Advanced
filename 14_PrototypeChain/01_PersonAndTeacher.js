let result = (function () {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {Person, Teacher}
})();

let Person = result.Person;
let Teacher = result.Teacher;

console.log(new Person('Pesho', 'pesho@gmail.com'));
console.log(new Teacher('Gosho', 'gosho@abv.bg', 'math'));

