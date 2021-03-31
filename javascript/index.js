const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  minDec.innerText = `${chronometer.twoDigitsNumber(
    chronometer.getMinutes()
  )}`[0];
  minUni.innerText = `${chronometer.twoDigitsNumber(
    chronometer.getMinutes()
  )}`[1];
  secDec.innerText = `${chronometer.twoDigitsNumber(
    chronometer.getSeconds()
  )}`[0];
  secUni.innerText = `${chronometer.twoDigitsNumber(
    chronometer.getSeconds()
  )}`[1];
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerHTML === "START") {
    chronometer.startClick(printTime);
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
  } else {
    chronometer.stopClick();
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
  }

  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
});

let split = document.getElementById("splits");

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerHTML === "RESET") {
    chronometer.resetClick();
    printTime();
  } else if (btnRight.innerHTML === "SPLIT") {
    chronometer.splitClick();
    let newTag = document.createElement("li");
    newTag.innerText = chronometer.splitClick();
    split.appendChild(newTag);
  }
});
