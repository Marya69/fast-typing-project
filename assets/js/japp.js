window.addEventListener("load", init);

let time = 5;
let score = 0;
let isPlaying;

// DOM elements
const bigWord = document.querySelector(".big-word");
const input = document.querySelector("#input");
const result = document.querySelector(".result");
const timeRemain = document.querySelector(".time_remain");
const message = document.querySelector("#message");
const restartBtn = document.getElementById("restartBtn");

// Word list
const words = [
    "cat", "dog", "sun", "hat", "run", "cup", "box", "red", "blue", "car",
    "bed", "pen", "book", "ball", "tree", "bird", "fish", "milk", "cake",
    "shoe", "hand", "face", "rain", "star", "frog", "ship", "rock", "game",
    "jump", "play"
];

// Initialize game
function init() {
    showwordes(words);
    input.addEventListener("input", startMatch);
    setInterval(countdowntime, 1000);
    setInterval(checkStatus, 50);
    restartBtn.addEventListener("click", restartGame);
}

// Show a random word
function showwordes(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    bigWord.innerHTML = words[randomIndex];
}

// Countdown
function countdowntime() {
    if (time > 0) {
        time--;
        timeRemain.innerHTML = `کاتی ماوە: ${time}`;
    } else {
        isPlaying = false;
        message.innerHTML = "کاتی تۆمارکردن کۆتایی هات";
        input.disabled = true;
        input.value = "";
        restartBtn.style.display = "inline-block"; // show restart button
    }
}

// Check if game ended
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = "کاتی تۆمارکردن کۆتایی هات";
        input.disabled = true;
        if (score <= 0) {
            result.innerHTML = "تەنجام: 0";
        }
    }
}

// Start typing check
function startMatch() {
    if (checkMatch()) {
        isPlaying = true;
        time = 5;
        showwordes(words);
        input.value = "";
        score++;
        result.innerHTML = `تەنجام: ${score}`;
        message.innerHTML = "ڕاستە";
    }
}

// Check if typed word matches
function checkMatch() {
    return input.value === bigWord.innerHTML;
}

// Restart the game
function restartGame() {
    score = 0;
    time = 5;
    isPlaying = true;
    input.disabled = false;
    input.value = "";
    input.focus();
    showwordes(words);
    result.innerHTML = "تەنجام: 0";
    message.innerHTML = "";
    restartBtn.style.display = "none";
}
