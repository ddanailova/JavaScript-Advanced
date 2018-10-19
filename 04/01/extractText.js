function extractText() {
    let itemList = $('#items li').toArray().map(e=>$(e).text()).join(", ");
    $('#result').text(itemList);
}