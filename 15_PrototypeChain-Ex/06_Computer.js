let result = (function () {
    // class Product {
    //     constructor(manufacturer){
    //         if(new.target === Product){
    //             throw Error('This is an abstract class!');
    //         }
    //         this.manufacturer=manufacturer;
    //     }
    // }
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = +responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = +width;
            this.height = +height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = +expectedLife;

        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw TypeError('This is an abstract class!');
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.color = color;
            this.weight = weight;
            this._battery = "";
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (value instanceof Battery) {
                this._battery = value;
            }else{
                throw TypeError('The input should be from class Battery');
            }
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this._keyboard = "";
            this._monitor = "";
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (value instanceof Keyboard) {
                this._keyboard = value;
            }else {
                throw TypeError('The input should be from class Keyboard');
            }
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (value instanceof Monitor) {
                this._monitor = value;
            }else{
                throw TypeError('The input should be from class Monitor');
            }
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
})();

let Laptop = result.Laptop;
let Desktop = result.Desktop;
let Battery = result.Battery;
let Keyboard = result.Keyboard;
let Monitor = result.Monitor;

// let battery = new Battery('Trust', 15);
// let keyboard = new Keyboard('Logitech', 2.5);
// let monitor = new Monitor('Sony', 1600, 900);

// let l= new Laptop("HP", 15, 800, 50, "silver", 15, battery);
// let pc = new Desktop("ASUS", 15, 800, 50, keyboard, "monitor");

let keyboard = new Keyboard('Logitech', 70);
let monitor = new Monitor('Benq', 28, 18);

let l = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", "pesho");
// let d1 = new Desktop("JAR Computers", 3.3, 8, 1, 1, monitor);
// let d2 = new Desktop("JAR Computers", 3.3, 8, 1, keyboard, "monitor")


