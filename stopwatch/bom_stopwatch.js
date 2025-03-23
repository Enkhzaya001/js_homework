let timerId = null;
let seconds = 0,
  minutes = 0,
  hours = 0;

const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const displayEl = document.getElementById("display");
const lapList = document.getElementById("lap-list");

const startOperation = () => {
  console.log("start");
  if (startBtn.innerText === "Start") {
    startBtn.innerText = "Stop";
    startBtn.classList.add("stop");
    resetBtn.innerText = "LAP";
    resetBtn.classList.add("lap");
    startTimer();
  } else {
    startBtn.innerText = "Start";
    startBtn.classList.remove("stop");
    resetBtn.innerText = "Reset";
    resetBtn.classList.remove("lap");

    stopTimer();
  }
};

const timeOperation = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
      if (hours === 24) {
        hours = 0;
      }
    }
  }
  display();
};
const startTimer = () => {
  if (timerId === null) {
    timerId = setInterval(timeOperation, 1000);
  }
};

const stopTimer = () => {
  clearInterval(timerId);
  timerId = null;
};

const formattedTime = (num) => {
  return num.toString().padStart(2, "0");
};
const display = () => {
  displayEl.innerText = `${formattedTime(hours)}:${formattedTime(
    minutes
  )}:${formattedTime(seconds)}`;
};

const lapAdd = () => {
  const cardEl = `
    <div class="card-container">
      <h4>LAP</h4>
      <p>${formattedTime(hours)}:${formattedTime(minutes)}:${formattedTime(
    seconds
  )}</p>
    </div>
`;
  lapList.innerHTML += cardEl;
};

const resetOperation = () => {
  if (resetBtn.innerText === "LAP") {
    lapAdd();
    seconds = 0;
    minutes = 0;
    hours = 0;
  } else {
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapList.innerHTML = "";
    display();
  }
};

startBtn.addEventListener("click", startOperation);
resetBtn.addEventListener("click", resetOperation);
