function printDeckOfCards(cards) {
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
                let suitToChar = {
                    'S': '\u2660',
                    'H': '\u2665',
                    'D': '\u2666',
                    'C': '\u2663 '
                };

                return this.face + suitToChar[this.suit];
            }
        }
    }

    let deck=[];
    cards.forEach(card=>{
            let face = Array.from(card).filter((e,i)=> i !== card.length-1).join('');
            let suite =Array.from(card).filter((e,i)=> i === card.length-1).join('');
        try{
            deck.push(makeCard(face, suite));
        }catch (err) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    });
    console.log(deck.join(" "));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);