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
     message        = document.querySelector("#message")

var shortSessionBool = false;
var begin;
stopButton.disabled = true;
longButton.disabled = true;

document.querySelector("#seconds").innerHTML = "0" + seconds;
document.querySelector("#minutes").innerHTML = minutes;

function pickLongSession(){
  stop();
  message.innerHTML = "Focus on the proccess";
  shortSessionBool = false;
  decreaseButton.disabled = false;
  longButton.disabled = true;
  shortButton.disabled = false;
  session = longSession;
  minutes = session;
  seconds = 0;
  document.querySelector("#minutes").innerHTML = session;
  document.querySelector("#seconds").innerHTML = "0" + seconds;
}

function pickShortSession(){
  stop();
  message.innerHTML = "Focus on the breath";
  shortSessionBool = true;
  decreaseButton.disabled = false;
  longButton.disabled = false;
  shortButton.disabled = true;
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
  if (session > 1) {
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
    if (!shortSessionBool) {
      message.innerHTML = "Take a break";
    } else {
      message.innerHTML = "Let's get to work";
    }
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
      decreaseButton.classList.add("far-disabled");
      increaseButton.classList.add("far-disabled");
      restartButton.classList.add("far-disabled");
      restartButton.disabled = true;
      decreaseButton.disabled = true;
      increaseButton.disabled = true;
      startButton.disabled = true;
      stopButton.disabled = false;
      begin = setInterval(appendTime, 1000);
    }

    if(!shortSessionBool) {
      message.innerHTML = "Focus on the proccess";
    } else {
      message.innerHTML = "Focus on the breath";
    }
}

function stop(){
  if (begin) {
    decreaseButton.classList.remove("far-disabled");
    increaseButton.classList.remove("far-disabled");
    restartButton.classList.add("far-disabled");
    restartButton.disabled = true;
    decreaseButton.disabled = false;
    increaseButton.disabled = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(begin);
    begin = null;
  }
}

function restart(){
  if (begin) {
    clearInterval(begin);
    begin = null;
  }
  decreaseButton.disabled = false;
  increaseButton.disabled = false;
  startButton.disabled = false;
  stopButton.disabled = true;
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
