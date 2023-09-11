import { animeInfo } from "./authors.js";

/*------------ Constants ------------*/
const minutes = '00';

/*------------ Variables ------------*/
let score;
let timeLeft;
let timer;
let question;
let answer;
let options = [];
let shuffledOptions;
let optionsContainer = [];



/*------------ Cached Elements References ------------*/
const playBtn = document.querySelector("#play-btn");
// console.log(playBtn);
const questionEl = document.querySelector("#question-container");
// console.log(question);
const scoreEl = document.querySelector("#score");
// console.log(scoreEl);
const timerEl = document.querySelector("#timer");
// console.log(timer);
const option1 = document.querySelector("#option1");
// console.log(option1);
const option2 = document.querySelector("#option2");
// console.log(option2);
const submitBtn = document.querySelector("#submit");
// console.log(submitBtn);
const resetBtn = document.querySelector("#reset");
// console.log(resetBtn);

/*------------ Event Listeners ------------*/
option1.addEventListener("click", validateAnswer);
option2.addEventListener("click", validateAnswer);

/*------------ Functions ------------*/

optionsContainer.push(option1);
optionsContainer.push(option2);

function displayScore() {
  score = 1;
  scoreEl.textContent = `${score}`
}
// displayScore() -- works

function displayTimer() {
  timeLeft = 10;
  timer = setInterval(function() {  
    // Display timer in the format 'min : sec' in the timer container
    timerEl.textContent = minutes + " : " + `${timeLeft}`;
    timeLeft--;
    if(timeLeft < 0) {
      timerEl.textContent = minutes + " : " + minutes;
      clearInterval(timer);
      // enable submit button
      // submitBtn.disabled = false;
      // submit what's in the input field when timer hits zero
      // submitBtn.click();
    }
    // Urge player by making timeLeft visually appealing
    if(timeLeft < 5) {
      timerEl.style.color = "red";
    } else {
      timerEl.style.color = "#000";
    }

  }, 1000);
}
// displayTimer() -- works
function shuffleOptions() {
  const shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  shuffledOptions = shuffle(animeInfo);
  return shuffledOptions;
}

// shuffleOptions()

// console.log(shuffledOptions)

function displayQuestion() {
  // options = shuffledOptions.slice(0, 2);
  question = shuffledOptions[Math.floor(Math.random() * shuffledOptions.length)];
  questionEl.textContent = `I am "${question.authorName}" and I drew ...`;
}
shuffleOptions()
displayQuestion()
console.log(options);

function displayOptions() {
  optionsContainer[Math.floor(Math.random() * optionsContainer.length)].textContent = question.mangaTitle
  for(let i = 0; i < optionsContainer.length; i++) {
    if (optionsContainer[i].textContent === "") {
      optionsContainer[i].textContent = shuffledOptions[Math.floor(Math.random() * shuffledOptions.length)].mangaTitle;
    }
  }
}


// shuffleOptions()
// displayQuestion()
// displayOptions()
// console.log(optionsContainer)
// optionsContainer[Math.floor(Math.random() * optionsContainer.length)].textContent = question;  -- very important.
function validateAnswer() {
  
 console.log("was clicked");
}
displayScore()
shuffleOptions()
displayQuestion()
displayOptions()
// validateAnswer()