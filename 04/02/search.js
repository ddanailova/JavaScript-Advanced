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
