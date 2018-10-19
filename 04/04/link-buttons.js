function attachEvents() {
    $('.button').on('click', function(){
        $('.button').toArray().forEach(btn => $(btn).removeClass('selected'));
       $(this).addClass('selected');
    })
}