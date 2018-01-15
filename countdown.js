var seconds = 0;
var minutes = 25;

var shortSession = 5;
var longSession = 25;

var session = longSession;

var startButton = document.querySelector("#start");
var stopButton = document.querySelector("#stop");
var restartButton = document.querySelector("#restart");
var increaseButton = document.querySelector("#increase");
var decreaseButton = document.querySelector("#decrease");
var shortButton = document.querySelector("#short");
var longButton = document.querySelector("#long");

var begin;

document.querySelector("#seconds").innerHTML = "0" + seconds;
document.querySelector("#minutes").innerHTML = minutes;

function pickLongSession(){
  session = longSession;
  minutes = session;
  document.querySelector("#minutes").innerHTML = session;
}
function pickShortSession(){
  session = shortSession;
  minutes = session;
  document.querySelector("#minutes").innerHTML = session;
}



function increase(){
  longSession = parseInt(document.querySelector("#minutes").innerHTML) + 1;
  document.querySelector("#minutes").innerHTML = session;
  minutes = session;
}

function decrease(){
  longSession = parseInt(document.querySelector("#minutes").innerHTML) - 1;
  document.querySelector("#minutes").innerHTML = session;
  minutes = session;
}

function appendTime(){
  seconds--;
  if (seconds <= 0 && minutes <= 0) {
    console.log("Should stop");
    stop();
  }

  if (seconds <= 9) {
    document.querySelector("#seconds").innerHTML = "0" + seconds;
  } else {
    document.querySelector("#seconds").innerHTML = seconds;
  }

  if (seconds < 0) {
    seconds = 59;
    minutes--;
    document.querySelector("#seconds").innerHTML = seconds;
    if (minutes < 9) {
      document.querySelector("#minutes").innerHTML = "0" + minutes;
    } else {
      document.querySelector("#minutes").innerHTML = minutes;
    }
  }
}

function start(){
    if(!begin){
        begin = setInterval(appendTime, 1000);
    }
}

function stop(){
  if (begin) {
    clearInterval(begin);
    begin = null;
  }
}

function restart(){
  if (begin) {
    clearInterval(begin);
    begin = null;
  }
  seconds = 0;
  minutes = session;
  document.querySelector("#seconds").innerHTML = "0" + seconds;
  document.querySelector("#minutes").innerHTML = minutes;
}

startButton.onclick = start;
stopButton.onclick = stop;
restartButton.onclick = restart;

increaseButton.onclick = increase;
decreaseButton.onclick = decrease;

longButton.onclick = pickLongSession;
shortButton.onclick = pickShortSession;
