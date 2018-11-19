class Rat {
    constructor(name){
        this.name=name;
        this.ratBuggies =[];
    }

    unite(otherRat){
        if(Object.getPrototypeOf(otherRat)=== Object.getPrototypeOf(this)){
            this.ratBuggies.push(otherRat);
        }
    }

    getRats(){
        return this.ratBuggies;
    }

    toString(){
        let result = this.name + "\n";

        this.ratBuggies.forEach(rat=>{
            result += `## ${rat.name}\n`
        });
        return result;
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho