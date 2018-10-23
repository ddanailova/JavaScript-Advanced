function validate() {
    let usernameRgex = /^[a-zA-Z0-9]{3,20}$/gm;
    let emailRegex = /^[^@.]+@[^@]*\..*$/gm;
    let passwordRegex = /^[\w]{5,15}$/gm;
    let companyNumRegex = /^[1-9][0-9]{3}$/gm;

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyNumber = $('#companyNumber');
    let checkBox = $('#company');

    let isFormValid = true;

    checkBox.on('change', function () {
        if (checkBox.attr('checked') === 'checked') {
            checkBox.attr('checked', null);
            $('#companyInfo').css('display', 'none');
        } else {
            checkBox.attr('checked', 'checked');
            $('#companyInfo').css('display', 'block');
        }
    });

    $('#submit').on('click', validateFields);

    function validateFields(ev) {
        ev.preventDefault();
        validator (username, usernameRgex);

        validator (email, emailRegex);

        if(password.val() === confirmPassword.val()){
            validator (password, passwordRegex);
            validator(confirmPassword, passwordRegex);
        }else {
            isFormValid=false;
            password.css('border-color', 'red');
            confirmPassword.css('border-color', 'red');
        }

        if ( checkBox.attr('checked') === 'checked'){
            validator (companyNumber, companyNumRegex);
        }
        if (isFormValid) {
            $('#valid').css('display', 'block');
        }
    }

    function validator (inputText, pattern){
        if (!inputText.val().trim().match(pattern)) {
            inputText.css('border-color', 'red');
            isFormValid === true ? isFormValid = false : isFormValid;
        } else {
            inputText.css('border-color', 'none');
        }
    }
}
