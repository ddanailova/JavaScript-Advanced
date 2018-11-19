let result = (function () {
    let Suits = {
        SPADES: "♠",
        HEARTS: "♥",
        DIAMONDS: "♦",
        CLUBS: "♣"
    };

    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this._face = null;
            this._suit = null;
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(val) {
            if (!validFaces.includes(val)) {
                throw new Error(`Invalid face ${val}`);
            }
            this._face = val;
        }

        get suit() {
            return this._suit;
        }

        set suit(val) {
            if (!Object.values(Suits).includes(val)) {
                throw new Error(`Invalid suit ${val}`);
            }
            this._suit = val;
        }

        toString(){
            return `${this.face}${this.suit}`
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
})();

let Card = result.Card;
let Suits = result.Suits;
let card = new Card("Q", Suits.CLUBS);
card.face = "A";
card.suit = Suits.DIAMONDS;
// let card2 = new Card("1", Suits.CLUBS);
let card2 = new Card("2", Suits.SPADES);
console.log(card2);