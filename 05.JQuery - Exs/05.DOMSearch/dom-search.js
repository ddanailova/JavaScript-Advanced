function domSearch(selector, caseSensitive) {
    $(selector).append($('<div class="add-controls">')
        .append('<label>Enter text: </label>')
        .append('<input type="text"/>')
        .append('<a class="button">Add</a>'));

    $(selector).append($('<div class="search-controls">')
        .append('<label>Search: </label>')
        .append('<input type="text"/>'));

    $(selector).append($('<div class="result-controls ">')
        .append('<ul class="items-list">'));

    $('.button:contains("Add")').on('click', addItem);

    let searchInput = $('.search-controls input');
    searchInput.on('input', search);

    function search() {
        let itemList = $('.list-item').toArray();
        let targetText = searchInput.val();
        itemList.forEach(e => {
            if (caseSensitive) {
                if (!$(e).text().includes(targetText)) {
                    $(e).css('display', 'none');
                } else {
                    $(e).css('display', '');
                }
            } else {
                if (!$(e).text().toLowerCase().includes(targetText.toLowerCase())) {
                    $(e).css('display', 'none');
                } else {
                    $(e).css('display', '');
                }
            }
        });
    }

    function addItem() {
        let input = $('.add-controls input');
        input.attr('name', input.val());
        $('.items-list').append($(`<li class="list-item"><strong>${input.val()}</strong></li>`)
            .prepend('<a class="button">X</a>'));
        input.val("");
        $('.button:contains("X")').on('click', deleteItem);
    }

    function deleteItem() {
        $(this).parent().remove();
    }
}