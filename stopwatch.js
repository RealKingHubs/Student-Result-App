// Variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

// DOM Elements
const hoursContainer = document.getElementById("hours");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");
const millisecondsContainer = document.getElementById("milliseconds");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Utility: format numbers with leading zeros
function format(num, length = 2) {
  return String(num).padStart(length, "0");
}

// Start Timer
function startTimer() {
  clearInterval(interval);
  interval = setInterval(updateWatch, 10); // update every 10ms
}

// Stop Timer
function stopTimer() {
  clearInterval(interval);
}

// Reset Timer
function resetTimer() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  clearInterval(interval);
}

// Core stopwatch logic
function updateWatch() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

// Update DOM
function updateDisplay() {
  millisecondsContainer.textContent = format(milliseconds);
  secondsContainer.textContent = format(seconds);
  minutesContainer.textContent = format(minutes);
  hoursContainer.textContent = format(hours);
}

// Event Listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
