let result=(function () {
    class Figure {
        constructor(){
            if(new.target===Figure){
                throw TypeError('Class Figure is abstract');
            }
        }

        toString(){
            return `${this.constructor.name} - `
        }
    }

    class Rectangle extends Figure {
        constructor(width, height){
            super();
            this.width=width;
            this.height=height;
        }

        get area(){
            return this.width*this.height;
        }

        toString(){
            return super.toString() + `width: ${this.width}, height: ${this.height}`;
        }
    }

    class Circle extends Figure {
        constructor(radius){
            super();
            this.radius=radius;

        }

        get area(){
            return Math.PI*(this.radius**2);
        }

        toString(){
            return super.toString() + `radius: ${this.radius}`;
        }
    }

    return {Figure, Rectangle, Circle}
})();

let Figure = result.Figure;
let Rectangle= result.Rectangle;
let Circle = result.Circle;

// let f = new Figure();
let c= new  Circle(5);

console.log(c.area);
console.log(c.toString());

let r= new Rectangle (3,2);

console.log(r.area);
console.log(r.toString());