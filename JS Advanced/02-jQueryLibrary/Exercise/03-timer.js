function timer(){
    let time = 0, intervalID;
    let startButton = $('#start-timer');
    let stopButton = $('#stop-timer');

    startButton.on('click', startTimer);

    function startTimer(){
        if (!intervalID){
            intervalID = setInterval(increaseTime, 1000)
        }
    }

    stopButton.on('click', function() {
        clearInterval(intervalID);
        intervalID = undefined;
    });

    function increaseTime(){
        time++;
        $('.timer#hours').text(("0" + Math.trunc(time / 3600)).slice(-2));
        $('.timer#minutes').text(("0" + Math.trunc(time / 60) % 60).slice(-2));
        $('.timer#seconds').text(("0" + (time % 60)).slice(-2));
    }
}