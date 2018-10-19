function attachEvents() {
    $('a.button').on('click', markSelected);

    function markSelected() {

        $('.selected').removeClass("selected");
        $(this).addClass("selected");

        // multiple selections
        // if($(this).hasClass('selected')){
        //     $(this).removeClass("selected");
        // }else{
        //     $(this).addClass("selected");
        // }

    }
}