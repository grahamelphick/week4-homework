var countdownEl = document.getElementById("timer");

var minsLeft = 5
var secondsLeft = minsLeft * 60;
var timeDisplay = "Timer: " + minsLeft +": " + secondsLeft

function countDown() {
    setInterval(function () {
        countdownEl.textContent = secondsLeft
        secondsLeft--;

        if (secondsLeft <= 0) {
            clearInterval(secondsLeft = 0);
        }

    }, 1000);

    console.log("timer started")
}


countDown();