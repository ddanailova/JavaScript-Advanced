function addDestination(ev) {
    let city = $('#input .inputData:first-of-type');
    let country = $('#input .inputData:last-of-type');
    let season = $('#seasons :selected');

    if(city.val() !== "" && country.val() !== ""){
        $('#destinationsList').append($(`<tr><td>${city.val()}, ${country.val()}</td><td>${season.text()}</td></tr>`));
        city.val("");
        country.val("");
        $('#seasons option:first-child').attr('selected', 'selected');
        let currnetValue = $(`#summaryBox input#${season.text().toLowerCase()}`);
        currnetValue.val(`${Number(currnetValue.val())+1}`);
    }
}