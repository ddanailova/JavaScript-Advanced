function increment(selector) {
    let text = $('<textarea class="counter" disabled>').val('0');
    let incrementBtn = $('<button class="btn" id="incrementBtn">').text('Increment');
    let addBtn = $('<button class="btn" id="addBtn">').text('Add');
    let list = $('<div class="results">');

    $(selector).append(text);
    $(selector)
        .append(incrementBtn
            .on('click', function () {
                text.val(`${+text.val()+1}`)
            }));
    $(selector).append(addBtn
        .on('click', function () {
            list.append($('<li>').text(text.val()));
        }));
    $(selector).append(list);
}
