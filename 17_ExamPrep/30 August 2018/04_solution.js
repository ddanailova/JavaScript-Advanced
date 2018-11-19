function makeReservation(conteinerID) {
    let subminBtn = $('#submit');
    let editBtn =$('#edit');
    let continueBtn =$('#continue');
    // let conteiner =$('#container');


    subminBtn.on('click', addToPrieview);
    editBtn.on('click', editInput);
    continueBtn.on('click',continuePayment );

    function checkOut() {
        $('#wrapper')
            .empty()
            .append('<h4>Thank you for your reservation!</h4>');
    }

    function paymentOptions() {
        let selected =$('#paymentOptions :selected')
            // .find(':selected')
            .val();
        if(selected === 'creditCard'){

            $('#extraDetails')
                .empty()
                .append('<div class="inputLabel">Card Number<input></div><br>')
                .append('<div class="inputLabel">Expiration Date<input></div><br>')
                .append('<div class="inputLabel">Security Numbers<input></div><br>')
        }else if (selected === 'bankTransfer'){
            $('#extraDetails')
                .empty()
                .append($(`<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>`));
        }

        $('#extraDetails').append('<button id="checkOut">Check Out</button>');

        $('#checkOut').on('click', checkOut);
    }


    function continuePayment() {
        $(conteinerID)
            .append('<h2>Payment details</h2>')
            .append($('<select id="paymentOptions"></select>')
                .addClass("custom-select")
                .append('<option selected disabled hidden>Choose</option>')
                .append('<option value="creditCard">Credit Card</option>')
                .append('<option value="bankTransfer">Bank Transfer</option>'))
            .append('<div id="extraDetails"></div>');

        $('#paymentOptions').on('change', paymentOptions);

        subminBtn.attr('disabled', 'disabled');
        editBtn.attr('disabled', 'disabled');
        continueBtn.attr('disabled', 'disabled');
    }

    function editInput() {
        $('#fullName').val($('#infoPreview li:nth-child(1) span').text());
        $('#email').val($('#infoPreview li:nth-child(2) span').text());
        $('#phoneNumber').val($('#infoPreview li:nth-child(3) span').text());
        $('#address').val($('#infoPreview li:nth-child(4) span').text());
        $('#postalCode').val($('#infoPreview li:nth-child(5) span').text());
        $('#infoPreview').empty();
        subminBtn.removeAttr('disabled');
        editBtn.attr('disabled', 'disabled');
        continueBtn.attr('disabled', 'disabled');
    }
    function addToPrieview() {

        let person = {
            name: $('#fullName'),
            email: $('#email'),
            phone: $('#phoneNumber'),
            address: $('#address'),
            postalCode: $('#postalCode')
        };
        if(person.name.val() !== "" && person.email.val() !== "" ){
            $('#infoPreview').append(`<li>Name: <span>${person.name.val()}</span></li>`)
                .append(`<li>E-mail: <span>${person.email.val()}</span></li>`)
                .append(`<li>Phone: <span>${person.phone.val()}</span></li>`)
                .append(`<li>Address: <span>${person.address.val()}</span></li>`)
                .append(`<li>Postal Code: <span>${person.postalCode.val()}</span></li>`);

            Object.keys(person).map(prop => {person[prop].val("")});
            subminBtn.attr('disabled', 'disabled');
            editBtn.removeAttr('disabled');
            continueBtn.removeAttr('disabled');
        }
    }
}