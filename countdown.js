var seconds = 0;
var minutes = 25;
var startButton = document.querySelector("#start");
var stopButton = document.querySelector("#stop");
var restartButton = document.querySelector("#restart");
var begin;

document.querySelector("#seconds").innerHTML = "0" + seconds;
document.querySelector("#minutes").innerHTML = minutes;

function appendTime(){
  seconds--;
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
  minutes = 25;
  document.querySelector("#seconds").innerHTML = "0" + seconds;
  document.querySelector("#minutes").innerHTML = minutes;
}

startButton.onclick = start;
stopButton.onclick = stop;
restartButton.onclick = restart;
