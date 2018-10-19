// function attachEvents() {
//     let itemsList =[];
//     $('#items').on('click', 'li', function () {
//         let li = $(this);
//
//         if (li.attr('data-selected')) {
//             li.removeAttr('data-selected');
//             li.css('background', '');
//
//             let index = itemsList.indexOf(li.text());
//             itemsList.splice(index,1);
//         } else {
//             li.attr('data-selected', 'true');
//             li.css('background', '#DDD');
//             itemsList.push(li.text());
//         }
//     });
//
//     $('#showTownsButton').on('click', ()=>{
//         $('#selectedTowns').text(itemsList.join(", "));
//     });
// }

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