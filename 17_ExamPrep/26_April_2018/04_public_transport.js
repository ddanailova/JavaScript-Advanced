class PublicTransportTable {

    constructor(town) {
        this.changeHeaderTitle(town);
        this.addEventListeners();
    }

    changeHeaderTitle(town) {
        $('caption').text(`${town}'s Public Transport`)
    }

    addVehicle(obj) {
        let tr = $(`<tr><td>${obj.type}</td><td>${obj.name}</td></tr>`);
        let button = $('<button>More Info</button>');
        button.on('click', moreLessInfo);

        tr.append($('<td></td>').append(button));
        $('.vehicles-info').append(tr);

        let trXtra;
        function moreLessInfo(event) {
            if( $(event.target).text()==='More Info'){
                trXtra = $('<tr class="more-info"><td colspan="3"><table>' +
                    `<tr><td>Route: ${obj.route}</td></tr>` +
                    `<tr><td>Price: ${obj.price}</td></tr>` +
                    `<tr><td>Driver: ${obj.driver}</td></tr></table></td></tr>`);
                trXtra.insertAfter(tr);
                $(event.target).text("Less Info");
            }else if($(event.target).text()==='Less Info'){
                trXtra.remove();
                $(event.target).text("More Info");
            }
        }
    }
     addEventListeners(){

         $('.search-btn').on('click',function () {
             let type = $('input[name="type"]');
             let name = $('input[name="name"]');
             let rows = $('.vehicles-info tr').not('more-info');

             if(name.val() || type.val()){
                for (let i = 0; i < rows.length; i++) {
                    let selectedType = $(rows[i]).find('td').eq(0);
                    let selectedName = $(rows[i]).find('td').eq(1);
                   if(!selectedName.text().includes(name.val()) || !selectedType.text().includes(type.val())){
                       $(rows[i]).css('display','none');
                       let btn =$(rows[i]).find('td').eq(2).find('button');
                       if(btn.text() === 'Less Info'){
                           btn.click();
                       }
                   }else{
                       $(rows[i]).css('display','');
                   }
                }
            }

        });

         $('.clear-btn').on('click',function (){
             let type = $('input[name="type"]');
             let name = $('input[name="name"]');
             let rows = $('.vehicles-info tr');
                type.val("");
                name.val("");

             for (let i = 0; i < rows.length; i++) {
                 $(rows[i]).css('display','');
             }
         });
     }
}