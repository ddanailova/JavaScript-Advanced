class Vacationer {
    constructor(fullNameArr, creditCardArr) {

        this.fullName = fullNameArr;

        this.idNumber = this.generateIDNumber();

        this.creditCard = this.addCreditCardInfo(creditCardArr);

        this.wishList=[];
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(fullNameArr) {
        if (fullNameArr.length !== 3) {
            throw  Error("Name must include first name, middle name and last name");
        }
        let namePattern = /^[A-Z][a-z]*$/;
        fullNameArr.forEach(name => {
            if (!namePattern.test(name)) {
                throw  Error("Invalid full name");
            }
        });
        this._fullName = {
            firstName: fullNameArr[0],
            middleName: fullNameArr[1],
            lastName: fullNameArr[2]
        };
    }

    generateIDNumber() {
        let lastLetterOptions = ["a", "e", "i", "o", "u"];
        let firstLetter = this.fullName.firstName.charCodeAt(0);
        let idNumber = (231 * firstLetter + 139 * this.fullName.middleName.length).toString();
        let lastLetter = this.fullName.lastName.slice(-1);
        if (lastLetterOptions.includes(lastLetter)) {
            return idNumber + "8";
        } else {
            return idNumber + "7";
        }
    }

    addCreditCardInfo(creditCardArr) {
        if(!creditCardArr){
            return {
                cardNumber: 1111,
                expirationDate: "",
                securityNumber: 111
            }
        }
        if (creditCardArr.length !== 3) {
            throw Error("Missing credit card information");
        }

        if (typeof creditCardArr[0] !== "number" || typeof creditCardArr[2] !== "number") {
            throw Error("Invalid credit card details");
        }
        return {
            cardNumber: creditCardArr[0],
            expirationDate: creditCardArr[1],
            securityNumber: creditCardArr[2]
        }
    }

    addDestinationToWishList(destination){
        if(this.wishList.includes(destination)){
            throw Error("Destination already exists in wishlist");
        }
        this.wishList.push(destination);
        this.wishList.sort((a,b)=>a.length-b.length);
    }

    getVacationerInfo(){
            return  `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}
ID Number: ${this.idNumber}
Wishlist:
${this.wishList.length < 1?"empty":this.wishList.join(", ")}
Credit Card:
Card Number: ${this.creditCard.cardNumber}
Expiration Date: ${this.creditCard.expirationDate}
Security Number: ${this.creditCard.securityNumber}`;
    }
}

let person = new Vacationer(["Vania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]);
console.log(person.getVacationerInfo());
// person.addDestinationToWishList("Spain");
// person.addDestinationToWishList("Germany");
