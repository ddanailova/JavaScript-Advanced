class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelf = [];
        this.shelfCapacity = shelfCapacity;
        this.shelfGenre = shelfGenre;
    }

    get shelfGenre() {
        return this._shelfGenre;
    }

    set shelfGenre(genre) {
        let validRooms = ["livingRoom", "bedRoom", "closet"];
        if (!validRooms.includes(this.room)) {
            throw Error(`Cannot have book shelf in ${this.room}`);
        }
        this._shelfGenre = genre;
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre) {
        let newBook = {bookName, bookAuthor, genre:""};
        if (genre) {
            newBook.genre = genre;
        }

        if (this.shelfCapacity === this.shelf.length) {
            this.shelf.shift();
        }
        this.shelf.push(newBook);

        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));

        return this;
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(book=>book.bookName !== bookName);
        return this;
    }

    showBooks(genre) {
        let result = `Results for search "${genre}":`;

        this.shelf.filter(book=>book.genre === genre).forEach(book=>{
            result +=`\n\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"`;
        });

        return result;
    }

    toString() {
        if (this.shelf.length < 1) {
            return "It's an empty shelf";
        }else{
            let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            this.shelf.forEach(book=>{
                result+=`\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`;
            });

            return result;
        }
    }
}

// let livingRoom = new BookCollection("Programming", "livingRoom", 5)
//     .addBook("Introduction to Programming with C#", "Svetlin Nakov")
//     .addBook("Introduction to Programming with Java", "Svetlin Nakov")
//     .addBook("Programming for .NET Framework", "Svetlin Nakov")
//     .throwAwayBook("Introduction to Programming with C#")
//     .throwAwayBook("Introduction to Programming with Java")
//     .throwAwayBook("Programming for .NET Framework");
// console.log(livingRoom.toString());

// let garden = new BookCollection("Programming", "garden");

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));