// class Circle {
//     constructor(radius){
//         this.radius=radius;
//         this._diameter="";
//         this._area = "";
//     }
//
//     get diameter() {
//         return 2*this.radius;
//     }
//
//     set diameter(val) {
//         this._diameter = val;
//         this.radius = val/2;
//     }
//
//     get area() {
//         return Math.PI*this.radius**2;
//     }
// }
function Circle(radius) {
    this.radius =radius;
}

Object.defineProperty(Circle.prototype, 'diameter', {
    get () {
        return 2*this.radius;
    },

    set (val) {
        this._diameter = val;
        this.radius = val/2;
    }
});

Object.defineProperty(Circle.prototype, 'area',{
    get(){
        return Math.PI*this.radius**2;
    }
});

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);