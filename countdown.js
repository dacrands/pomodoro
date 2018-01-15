var seconds = 0,
    minutes = 25,
    shortSession = 5,
    longSession = 25,
    session = longSession;

var startButton     = document.querySelector("#start"),
     stopButton     = document.querySelector("#stop"),
     restartButton  = document.querySelector("#restart"),
     increaseButton = document.querySelector("#increase"),
     decreaseButton = document.querySelector("#decrease"),
     shortButton    = document.querySelector("#short"),
     longButton     = document.querySelector("#long");

var shortSessionBool = false;
var begin;

document.querySelector("#seconds").innerHTML = "0" + seconds;
document.querySelector("#minutes").innerHTML = minutes;

function pickLongSession(){
  shortSessionBool = false;
  session = longSession;
  minutes = session;
  seconds = 0;
  document.querySelector("#minutes").innerHTML = session;
  document.querySelector("#seconds").innerHTML = "0" + seconds;
}

function pickShortSession(){
  shortSessionBool = true;
  session = shortSession;
  minutes = session;
  seconds = 0;
  document.querySelector("#minutes").innerHTML = session;
  document.querySelector("#seconds").innerHTML = "0" + seconds;
}

function increase(){
    decreaseButton.disabled = false;
    session = parseInt(document.querySelector("#minutes").innerHTML) + 1;
    minutes = session;
    seconds = 0;
    document.querySelector("#minutes").innerHTML = session;
    document.querySelector("#seconds").innerHTML = "0" + seconds;
    if (!shortSessionBool) {
      longSession = session;
    } else {
      shortSession = session;
    }
}

function decrease(){
  if (minutes > 1) {
    session = parseInt(document.querySelector("#minutes").innerHTML) - 1;
    minutes = session;
    seconds = 0;
    document.querySelector("#minutes").innerHTML = session;
    document.querySelector("#seconds").innerHTML = "0" + seconds;
  } else {
    decreaseButton.disabled = true;
  }

  if (!shortSessionBool) {
    longSession = session;
  } else {
    shortSession = session;
  }
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
      decreaseButton.disabled = true;
      increaseButton.disabled = true;
      startButton.disabled = true;
      begin = setInterval(appendTime, 1000);
    }
}

function stop(){
  if (begin) {
    decreaseButton.disabled = false;
    increaseButton.disabled = false;
    startButton.disabled = false;
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
