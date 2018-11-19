function addSticker() {
    let title = $('.title');
    let text = $('.content');

    if (title.val().trim() !== "" && text.val().trim() !== "") {
        $('#sticker-list')
            .append($('<li class="note-content"></li>')
                .append($('<a class="button">x</a>'))
                .append(`<h2>${title.val()}</h2>`)
                .append('<hr>')
                .append(`<p>${text.val()}</p>`));
        title.val("");
        text.val("");

        $('.button').on('click', function (ev) {
            ev.preventDefault();
            $(ev.target).parent().remove();
        });
    }
}