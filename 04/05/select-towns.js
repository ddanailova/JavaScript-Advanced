function attachEvents(){
    $('ul#items li').on('click', selected);

    let selectedTowns =[];

    function selected() {
        if($(this).attr('data-selected') !== "true"){
            selectedTowns.push($(this).text());
            $(this).attr('data-selected', 'true');
            $(this).css('background', ' #DDD');
        }else{
            let index = selectedTowns.indexOf($(this).text());
            selectedTowns.splice(index,1);
            $(this).attr('data-selected', 'false');
            $(this).css('background', ' none');
        }
    }

    $('#showTownsButton').on('click', function () {
        $('#selectedTowns').text(selectedTowns.join(', '));
    })
}