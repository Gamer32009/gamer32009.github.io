let alarm = new Audio('/eieruhr/alarm.mp3')
let timerstarted = false;
function startTimer(){
    if (!timerstarted){
        timerstarted = true;
    let startime = new Date().getTime();
    let fiveminutes = 1000 * 60 * 5;
    let endTime = startime + fiveminutes;

    setInterval(function() {
        let timeLeft = endTime - new Date().getTime();
        if (timeLeft > 0){
        
        let minutes = timeLeft / (1000 * 60);
        minutes = Math.floor(minutes);
        let seconds = (timeLeft /1000) % 60;
        seconds = Math.round(seconds);
        seconds = ('0' + seconds).slice(-2);
        let text = '0' + minutes + ':' + seconds;
        document.getElementById('timer').innerHTML = text;
        }
        else {
            alarm.play();
            timerstarted = false;
        }
    },1000)
}
}