function attachEventsListeners() {
    let btnList = document.querySelectorAll("input[type='button']");
    let min;

    Array.from(btnList).forEach(btn => btn.addEventListener('click', convert));

    function convert(event) {
        let btnPressed = event.target.id;
        if(btnPressed === 'daysBtn'){
            min = Number(document.getElementById('days').value)*24*60;
        }else if(btnPressed === 'hoursBtn'){
            min = Number(document.getElementById('hours').value)*60;
        }else if(btnPressed === 'minutesBtn'){
            min = Number(document.getElementById('minutes').value);
        }else if(btnPressed === 'secondsBtn'){
            min = Number(document.getElementById('seconds').value)/60;
        }
        document.getElementById('days').value = (min/24)/60;
        document.getElementById('hours').value=min/60;
        document.getElementById('minutes').value = min;
        document.getElementById('seconds').value= min*60;
    }
}