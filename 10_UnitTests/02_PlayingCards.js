function makeCard(face, suit) {
    const validFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuite = ['S', 'H', 'D', 'C'];

    if (!validFace.includes(face)) {
        throw new Error("Invalid card face: " + face);
    }
    if (!validSuite.includes(suit)) {
        throw new Error("Invalid card suit: " + suit);
    }

    return {
        face,
        suit,
        toString: function () {
            let suitToChar ={
                'S': '\u2660',
                'H':'\u2665',
                'D': '\u2666',
                'C': '\u2663 '
            };
            let curSuite = this.suit;
            return this.face + suitToChar[this.suit];
        }
    }
}

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('A', 'C'));
console.log('' + makeCard('Q', 'D'));
console.log('' + makeCard('10', '10'));
console.log('' + makeCard('1', 'C'));