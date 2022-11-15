const clockNumber = document.querySelector(".clockNumber");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
let secondTimer = 0;
let timerClock;
startButton.addEventListener(
  "click",
  () => {
    clearInterval(timerClock);
    timerClock = setInterval(timer, 1000);
  },
  1000
);

stopButton.addEventListener("click", () => {
  clearInterval(timerClock);
});

function timer() {
  ++secondTimer;
  if (secondTimer < 10) {
    clockNumber.innerText = `0${secondTimer} sec`;
  } else if (secondTimer > 99) {
    clockNumber.innerText = `переполнение счётчика`;
    clearInterval(timerClock);
    secondTimer = 0;
  } else {
    clockNumber.innerText = `${secondTimer} sec`;
  }
}
