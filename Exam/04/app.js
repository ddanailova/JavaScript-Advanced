function realEstateAgency() {
    let rent = $('input[name="apartmentRent"]');
    let type = $('input[name="apartmentType"]');
    let commission = $('input[name="agencyCommission"]');
    let registerBtn = $('button[name="regOffer"]');
    let notifications = $('#notifications #message');
    let offers = [];

    let budget = $('input[name="familyBudget"]');
    let typeNeeded = $('input[name="familyApartmentType"]');
    let familyName = $('input[name="familyName"]');
    let findBtn = $('button[name="findOffer"]');

    let profit = 0;
    registerBtn.on('click', function () {
        if (typeof +rent.val() === "number" && +rent.val() > 0 && typeof +commission.val() === "number" && +commission.val() >= 0 && +commission.val() <= 100 && type.val().trim() !== "" && !type.val().includes(':')) {
            notifications.text("Your offer was created successfully.");

            $('#building').append($('<div class="apartment"></div>')
                .append(`<p>Rent: ${rent.val()}</p>`)
                .append(`<p>Type: ${type.val()}</p>`)
                .append(`<p>Commission: ${commission.val()}</p>`));

            offers.push({
                rent: +rent.val(),
                type: type.val(),
                commission: +commission.val()
            });

        } else {
            notifications.text("Your offer registration went wrong, try again.");
        }

        rent.val("");
        type.val("");
        commission.val("");
    });

    findBtn.on('click', function () {
        if (typeof +budget.val() === "number" && +budget.val() > 0 && typeNeeded.val().trim() !== "" && familyName.val().trim() !== "") {
            let foundApart=false;
            for (let i = 0; i < offers.length; i++) {
                if (offers[i].type === typeNeeded.val().trim() && (offers[i].rent + offers[i].rent*(offers[i].commission*0.01)) <= budget.val()) {
                    foundApart = true;
                    $(`.apartment:nth-child(${i + 1})`)
                        .empty()
                        .append(`<p>${familyName.val()}</p>`)
                        .append(`<p>live here now</p>`)
                        .append(`<button>MoveOut</button>`)
                        .css('border', '2px solid red');

                    $('.apartment button').on('click', function (ev) {
                        let name = $(ev.target).parent().find('p').first().text();
                        $(ev.target).parent().remove();
                        notifications.text(`They had found cockroaches in ${name}\'s apartment`);
                    });
                    profit+=offers[i].rent;
                    $('#roof h1').text(`Agency profit: ${profit.toFixed(2)} lv.`);
                    notifications.text("Enjoy your new home! :))");
                    break;
                }
            }

            if(!foundApart){
                notifications.text("We were unable to find you a home, so sorry :(");
            }

        } else {
            notifications.text("We were unable to find you a home, so sorry :(");
        }

        budget.val("");
        typeNeeded.val("");
        familyName.val("");
    });
}