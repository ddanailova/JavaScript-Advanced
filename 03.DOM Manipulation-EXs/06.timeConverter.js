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

function attachEventsListenersObj() {
    let buttons = document.querySelectorAll('input[value="Convert"]');
    Array.from(buttons).forEach(btn => btn.addEventListener('click', convert));
    let time;

    let timeInDays = {
        daysBtn:(value)=>value,
        hoursBtn:(value)=>value/24,
        minutesBtn:(value)=>(value/24)/60,
        secondsBtn:(value)=>((value/24)/60)/60,
    };
    function convert(event) {
        let id = event.target.id;
        let timeValue = event.target.parentNode.childNodes[3].value;
        if(timeValue !== ""){
            time = timeInDays[id](timeValue);
            document.getElementById('days').value = time;
            document.getElementById('hours').value = time*24;
            document.getElementById('minutes').value = time*24*60;
            document.getElementById('seconds').value = time*24*60*60;
        }
    }
}