$(document).ready(function () {

    //timer
    //----------------------------------------------------------------------------------------
    let intervalId;
    let time = 300;

    run = () => {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 100);
    }

    decrement = () => {
        time--;
        $('.timer').html('<h2>' + time + '</h2>');
        if (time === 0) {
            stop();
            alert('Time Up!');
        }
    }

    stop = () => {
        clearInterval(intervalId);
    }

    run();

    //-------------------------------------------------------------------------------------------


});
