let result = (function () {

    class Melon {
        constructor(weight,melonSort) {
            if(new.target === Melon){
                throw TypeError('Melon is an abstract class!');
            }
            this.weight = +weight;
            this.melonSort = melonSort;
        }

        toString(){
            return `Element: ${this.constructor.name.replace('melon', '')}
Sort: ${this.melonSort}
Element Index: ${this._elementIndex}`
        }
    }

    class Watermelon extends Melon{
        constructor(weight,melonSort) {
            super(weight,melonSort);
            this._elementIndex=weight*(melonSort.length);
        }

        get elementIndex(){
            return this._elementIndex;
        }
    }

    class Firemelon extends Melon{
        constructor(weight,melonSort) {
            super(weight,melonSort);
            this._elementIndex=weight*(melonSort.length);
        }

        get elementIndex(){
            return this._elementIndex;
        }
    }

    class Earthmelon extends Melon{
        constructor(weight,melonSort) {
            super(weight,melonSort);
            this._elementIndex=weight*(melonSort.length);
        }

        get elementIndex(){
            return this._elementIndex;
        }
    }

    class Airmelon extends Melon{
        constructor(weight,melonSort) {
            super(weight,melonSort);
            this._elementIndex=weight*(melonSort.length);
        }

        get elementIndex(){
            return this._elementIndex;
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight,melonSort) {
            super(weight,melonSort);
            this._element = "Water";
            this._elements =['Fire', 'Earth', 'Air', 'Water'];
        }
        morph(){
            this._element = this._elements.shift();
            this._elements.push(this._element);
        }

        toString(){
            let fromParent = super.toString();
            return fromParent.replace('Melolemon', this._element);
        }
    }
    return {Melon,Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
})();

let Watermelon = result.Watermelon;
let Firemelon= result.Firemelon;
let Earthmelon = result.Earthmelon;
let Airmelon= result.Airmelon;
let Melolemonmelon= result.Melolemonmelon;

let w = new Watermelon (100, "Test");
let f = new Firemelon (12.5, "Kingsize");
let e = new Earthmelon (178, "Pesho");
let a = new Airmelon (3, "Trandafil");
let mutant = new Melolemonmelon (17, "Toros");

// console.log(w.toString());
// console.log(f.toString());
// console.log(e.toString());
// console.log(a.toString());
console.log(mutant.toString());
mutant.morph();
console.log(mutant.toString());
mutant.morph();
console.log(mutant.toString());
mutant.morph();
console.log(mutant.toString());
