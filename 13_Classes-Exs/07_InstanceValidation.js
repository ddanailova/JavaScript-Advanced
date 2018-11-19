class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        let clientPattern = /^[1-9][0-9]{5}$/g;
        if (!clientPattern.test(clientId)) {
            throw new TypeError("Client ID must be a 6-digit number");
        } else {
            this.clientId = clientId;
        }

        let emailPattern = /[a-zA-Z]+@[a-zA-Z.]+/g;
        if (!emailPattern.test(email)) {
            throw new TypeError("Invalid e-mail");
        } else {
            this.email = email;
        }

        let namePattern = /^[a-zA-Z]+$/;
        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        } else if (!namePattern.test(firstName)) {
            throw new TypeError("First name must contain only Latin characters");
        } else {
            this.firstName = firstName;
        }

        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        } else if (!namePattern.test(lastName)) {
            throw new TypeError("Last name must contain only Latin characters");
        } else {
            this.lastName = lastName;
        }
    }
}

// let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
// let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
let acc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov');