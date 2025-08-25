var seconds = 0;
var timerId = 0;

function startTimer() {
  if (timerId == 0) {
    timerId = setInterval(updateTime, 1000);
  } else {
  }
}

function stopTimer() {
  if (timerId != 0) {
    clearInterval(timerId);
    timerId = 0;
  } else {
  }
}

function resetTimer() {
  if (timerId != 0) {
    clearInterval(timerId);
    timerId = 0;
  }
  seconds = 0;
  showTime();
}

function updateTime() {
  seconds = seconds + 1;
  showTime();
}

function showTime() {
  var hrs = Math.floor(seconds / 3600);
  var mins = Math.floor((seconds % 3600) / 60);
  var secs = seconds % 60;

  if (hrs < 10) {
    hrs = "0" + hrs;
  } else {
    hrs = "" + hrs;
  }

  if (mins < 10) {
    mins = "0" + mins;
  } else {
    mins = "" + mins;
  }

  if (secs < 10) {
    secs = "0" + secs;
  } else {
    secs = "" + secs;
  }

  document.querySelector("#display").innerText = hrs + ":" + mins + ":" + secs;
}