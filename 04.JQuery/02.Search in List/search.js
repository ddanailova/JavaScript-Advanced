// function search() {
//     let input = $('#searchText');
//
//     if(input.val().trim() !== ""){
//         let items = $(`ul#towns li`).css('font-weight','normal');
//         items = $(`ul#towns li:contains(${input.val()})`).css('font-weight','bold');
//        input.val("");
//        $('#result').text(`${items.length} matches found.`);
//     }
// }

function search() {

    let towns = $('ul#towns li');
    let inputTown=$('#searchText');
    let counter =0;
    if(inputTown.val() !==""){
        towns.toArray().forEach(t=>{
            $(t).text().includes(inputTown.val())?$(t).css('font-weight','bold')&&counter++:$(t).css('font-weight','normal');
        });
        inputTown.val("");
    }
    $('#result').text(`${counter} matches found`);
}