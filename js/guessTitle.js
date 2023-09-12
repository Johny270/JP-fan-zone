import { animeInfo } from "./authors.js";

/*------------ Constants ------------*/
const minutes = '00';

/*------------ Variables ------------*/
let score;
let timeLeft;
let timer;
let question;
let answer;
let shuffledOptions;
let optionsContainer = [];



/*------------ Cached Elements References ------------*/
const playBtn = document.querySelector("#play-btn");
const questionEl = document.querySelector("#question-container");
const scoreEl = document.querySelector("#score");
const timerEl = document.querySelector("#timer");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const resetBtn = document.querySelector("#reset");
const exitBtn = document.querySelector("#quit");
const imageContainer = document.querySelector("#imageContainer");
const actualImage = document.querySelector("#actualImage")

/*------------ Event Listeners ------------*/
option1.addEventListener("click", validateAnswer);
option2.addEventListener("click", validateAnswer);
playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);


/*------------ Functions ------------*/

optionsContainer.push(option1);
optionsContainer.push(option2);
timerEl.style.color = "white";
hideElements()

function play() {
  score = 0;
  showElements();
  render();
  playBtn.disabled = true;
}

function render() {
  displayScore();
  displayTimer();
  shuffleOptions();
  displayQuestion();
  displayOptions();
  displayImage();
}

function displayScore() {
  scoreEl.textContent = `${score}`
}

function displayTimer() {
  timeLeft = 40;
  timer = setInterval(function() {  
    // Display timer in the format 'min : sec' in the timer container
    timerEl.textContent = minutes + " : " + `${timeLeft}`;
    timeLeft--;
    if(timeLeft < 0) {
      clearInterval(timer);
      timerEl.textContent = minutes + " : " + minutes;
      printResults();
    }

    // Urge player by making timeLeft visually appealing
    if(timeLeft < 5) {
      timerEl.style.color = "red";
    } else {
      timerEl.style.color = "#fff";
    }

  }, 1000);
}

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


function displayQuestion() {
  question = shuffledOptions[Math.floor(Math.random() * shuffledOptions.length)];
  questionEl.textContent = `I am "${question.authorName}" and I drew ...`;
}


function displayOptions() {
  optionsContainer[Math.floor(Math.random() * optionsContainer.length)].textContent = question.mangaTitle
  for(let i = 0; i < optionsContainer.length; i++) {
    if (optionsContainer[i].textContent === "") {
      optionsContainer[i].textContent = shuffledOptions[Math.floor(Math.random() * shuffledOptions.length)].mangaTitle;
    }
  }
}

function renderNextQuestions() {
  shuffleOptions();
  displayQuestion();
  displayOptions();
  displayImage();
}

function displayImage() {
  actualImage.setAttribute("src", question.image);
  imageContainer.style.backgroundImage = actualImage;
}
// render()
// displayImage()
// console.log(actualImage);

function validateAnswer(event) {
  answer = event.currentTarget.textContent;
  if (answer === question.mangaTitle) score++
  option1.textContent = "";
  option2.textContent = "";
  renderNextQuestions();
  displayScore()
}

function printResults() {
  if(score < 5) {
    clearInterval(timer);
    questionEl.textContent = "";
    questionEl.textContent = `You scored ${score} which is less than 5, you loose!`;
  }
  if(score > 5) {
    questionEl.textContent = "";
    questionEl.textContent = `You scored ${score} which is above 5, you win!`;
  }
}

function reset() {
  clearInterval(timer);
  questionEl.textContent = "";
  scoreEl.textContent = "";
  timerEl.textContent = "";
  option1.textContent = "";
  option2.textContent = ""
  hideElements();
  playBtn.disabled = false;
}

function hideElements() {
  questionEl.hidden = true;
  scoreEl.hidden = true;
  timerEl.hidden = true;
  option1.hidden = true;
  option2.hidden = true;
  exitBtn.hidden = true;
  resetBtn.hidden = true;
  imageContainer.hidden = true;
}

function showElements() {
  questionEl.hidden = false;
  scoreEl.hidden = false;
  timerEl.hidden = false;
  option1.hidden = false;
  option2.hidden = false;
  exitBtn.hidden = false;
  resetBtn.hidden = false;
  imageContainer.hidden = false;
}

// imageContainer.style.backgroundImage = ""