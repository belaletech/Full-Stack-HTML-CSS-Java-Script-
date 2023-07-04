const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timerLeft = 1800;

function updateTimer() {
  let minutes = Math.floor(timerLeft / 60);
  let seconds = timerLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:  ${seconds.toString().padStart(2,"0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timerLeft--;
    updateTimer();
    if(timerLeft===0)
    {
      clearInterval(interval);
      alert("Time's up!");
      timerLeft=1800;
      updateTimer();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
 clearInterval(interval)
 timerLeft=1800;
 updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
