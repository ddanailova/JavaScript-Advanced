 function createBook(selector, title, author, isbn) {
    let counter = 1;
    $(selector)
        .append($(`<div class="book${counter}">`)
            .append(`<p class=title>${title}</p>`)
            .append(`<p class=author>${author}</p>`)
            .append(`<p class=isbn>${isbn}</p>`)
            .append('<button>Select</button>')
            .append('<button>Deselect</button>'));

    $('button:contains("Select")').on('click', function () {
        $('.book1').css('border',"2px solid blue");
    });

    $('button:contains("Deselect")').on('click', function () {
        $('.book1').css('border',"none");
    })
}