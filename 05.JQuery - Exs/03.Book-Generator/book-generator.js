function createBook() {
    let id = 0;
    let books = (function bookGenerator() {

        return function (selector, title, author, isbn) {
            id++;
            $(selector)
                .append($(`<div id="book${id}">`)
                    .append(`<p class=title>${title}</p>`)
                    .append(`<p class=author>${author}</p>`)
                    .append(`<p class=isbn>${isbn}</p>`)
                    .append('<button>Select</button>')
                    .append('<button>Deselect</button>'));

            $('button:contains("Select")').on('click', function () {
                $(this).parent().css('border','2px solid blue');
           });

            $('button:contains("Deselect")').on('click', function () {
                $(this).parent().css('border','none');
            });
        }

    }());

    books("#wrapper", "Alice in Wonderland", "Lewis Carroll", 1111);
}

