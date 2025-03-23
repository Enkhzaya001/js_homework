const blueBtn = document.getElementById("blue");
const redBtn = document.getElementById("red");
const countBlue = document.getElementById("countBlue");
const countRed = document.getElementById("countRed");
const resetBtn = document.getElementById("reset");

let value1 = 0;
let value2 = 0;
const blueButton = (e) => {
  console.log("clicked-blueBtn");
  if (countBlue.innerText < 100 && e.key === "d") {
    value1 = parseInt(countBlue.innerText) + parseInt(5);
    countBlue.innerText = value1;
    value2 = parseInt(countRed.innerText) - parseInt(5);
    countRed.innerText = value2;
    console.log(blueBtn.style);
    blueBtn.style.width = `${value1}%`;
    redBtn.style.width = `${value2}%`;
  }
  checkAlertBlue();
};

const redButton = (e) => {
  console.log("clicked-redBtn");
  if (countRed.innerText < 100 && e.key === "k") {
    value1 = parseInt(countRed.innerText) + parseInt(5);
    countRed.innerText = value1;
    value2 = parseInt(countBlue.innerText) - parseInt(5);
    countBlue.innerText = value2;
    redBtn.style.width = `${value1}%`;
    blueBtn.style.width = `${value2}%`;
  }
  checkAlertRed();
};

resetBtn.addEventListener("click", () => {
  countBlue.innerText = 50;
  countRed.innerText = 50;
  blueBtn.style.width = `${50}%`;
  redBtn.style.width = `${50}%`;
});

const checkAlertRed = () => {
  if (countRed.innerText >= 100) {
    countRed.innerText = "Winner";
    countBlue.innerText = "lost";
    alert("Red Winner");
  }
};
const checkAlertBlue = () => {
  if (countBlue.innerText >= 100) {
    countBlue.innerText = "Winner";
    countRed.innerText = "lost";
    alert("Blue Winner");
  }
};

document.addEventListener("keypress", blueButton);
document.addEventListener("keypress", redButton);
