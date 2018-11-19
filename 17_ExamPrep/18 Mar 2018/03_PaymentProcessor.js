class PaymentProcessor {
    constructor(options) {
        this.options = options;
        this._payments = [];
        this._balance = 0;
    }

    set options(value) {
        this._options = { types: ["service", "product", "other"],
            precision: 2};
        if (value) {
            if (value.hasOwnProperty('types')) {
                this._options.types = value.types;
            }

            if (value.hasOwnProperty('precision')) {
                this._options.precision = value.precision;
            }
        }
    }

    setOptions(value) {
        return this.options = value;
    }

    registerPayment(id, name, type, value) {
        if (typeof id !== "string" || id.trim() === '' || typeof name !== "string" || name.trim() === '' || typeof value !== "number" || !this._options.types.includes(type)) {
            throw new Error("invalid type");
        }
        let targetPaymnet = this._payments.find(payment=>payment.id===id);
        if (!this._payments.includes(targetPaymnet)) {
            let newPayment = {id, name, type, value: value.toFixed(this._options.precision)};
            this._payments.push(newPayment);
            this._balance = (Number(this._balance) + Number(newPayment.value)).toFixed(this._options.precision);
        }else{
            throw new Error("ID exists");
        }
    }

    get (id){
        let targetPaymnet = this._payments.find(payment=>payment.id===id);
        if(!this._payments.includes(targetPaymnet)){
            throw new Error('ID not found')
        }
        return `Details about payment ID: ${id}
- Name: ${targetPaymnet.name}
- Type: ${targetPaymnet.type}
- Value: ${targetPaymnet.value}`
    }

    deletePayment(id){
        let targetPaymnet = this._payments.find(payment=>payment.id===id);
        if(!this._payments.includes(targetPaymnet)){
            throw new Error('ID not found')
        }

        this._payments = this._payments.filter(payment=>payment.id!==id);
        this._balance = (Number(this._balance) -Number(targetPaymnet.value)).toFixed(this._options.precision);
    }

    toString() {

        return 'Summary:\n' +
            `- Payments: ${this._payments.length}\n` +
            `- Balance: ${this._balance}`;
    }
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());
// Should throw an error (invalid type)
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
// generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
//
//
// generalPayments.deletePayment('E028');
// console.log(generalPayments.toString());

// // Initialize processor with custom types
// const servicePyaments = new PaymentProcessor({types: ['service']});
// servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
// servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
// console.log(servicePyaments.toString());
//
// // Initialize processor with custom precision
// const transactionLog = new PaymentProcessor({precision: 5});
// transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
// console.log(transactionLog.toString());