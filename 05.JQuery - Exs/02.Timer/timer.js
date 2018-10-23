function timer() {
    let secunds = $('#seconds');
    let minutes = $('#minutes');
    let hours = $('#hours');
    let interval = null;

    $('#start-timer').on('click', function () {
        if(interval === null){
            interval = setInterval(increment, 1000);
        }

    });

    $('#stop-timer').on('click', function () {
        clearInterval(interval);
        interval = null;
    });

    function increment() {
        if (+secunds.text() < 59) {
            let curSecs = +secunds.text() + 1;
            secunds.text(`${("0" + curSecs).slice(-2)}`)
        } else {
            secunds.text("00");
            if (+minutes.text() < 59) {
                let curMins = +minutes.text() + 1;
                minutes.text(`${("0" + curMins).slice(-2)}`)
            } else {
                minutes.text("00");
                if (+hours.text() < 23) {
                    let curHours = +hours.text() + 1;
                    hours.text(`${("0" + curHours).slice(-2)}`)
                }
            }
        }
    }
}

