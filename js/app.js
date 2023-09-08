import { getRandomQuote } from "./quotes.js";
import { getSongs } from "./audio.js";

/*------------ Constants ------------*/

const arr = getRandomQuote();
const totalQuestions = 10;
const minutes = "00";
const jpSongs = getSongs();

/*------------ Variables ------------*/
let ratio;
let timeLeft;
let shuffledArray;
let roundQuoteArr = [];
let quote = [];
let answers = []; // to store all user's answers for a round of 10 questions
let counter; // max value must be 10.
let timer;
let song;

/*------------ Cached Element References ------------*/
let userAns = document.querySelector("#user-input");
const playBtn = document.querySelector("#play-btn");
const timerContainer = document.querySelector("#timer-container");
const counterEl = document.querySelector("#counter");
const submitBtn = document.querySelector("#submit-btn");
const quoteContainer = document.querySelector("#quotes-placeholder");
const ratioContainer = document.querySelector("#ratio-container");
const resetBtn = document.querySelector("#reset-btn");

/*------------ Event listeners ------------*/
playBtn.addEventListener("click", start);
submitBtn.addEventListener("click", submit);
userAns.addEventListener("input", enableDisable );
resetBtn.addEventListener("click", reset);

/*------------ Functions ------------*/
userAns.value = "";
userAns.disabled = true;
submitBtn.disabled = true;

function start() {

  quoteContainer.style.color = "#ffffff";
  resetBtn.disabled = false;

  // activate input field and disable submitBtn
  userAns.disabled = false;
  submitBtn.disabled = false;

  // initialize ratio to 0 and counter to 0
  counter = 0;
  ratio = 0;

  // Clear input field and put focus in it
  userAns.value = "";
  userAns.focus();
  // render game state to the player
    // render counter
    // render timer
    // render ratio
    // render quote
    render();
}

function render() {
  // render game state
  displayTimer();
  displayRatio();
  updateCounter();
  shuffleArray();
  renderQuote();
  playSound();
  enableDisable();
  endGame();
}

function displayTimer() {
  // initialize timer to 20 seconds
  timeLeft = 20;
  timer = setInterval(function() {
    // Display timer in the format 'min : sec' in the timer container
    timerContainer.textContent = minutes + " : " + `${timeLeft}`;
    timeLeft--;
    if(timeLeft < 0) {
      timerContainer.textContent = minutes + " : " + minutes;
      clearInterval(timer);
      // enable submit button
      submitBtn.disabled = false;
      // submit what's in the input field when timer hits zero
      submitBtn.click();
    }
    // Urge player by making timeLeft visually appealing
    if(timeLeft < 5) {
      timerContainer.style.color = "red";
    } else {
      timerContainer.style.color = "#000";
    }

  }, 1000);
}

function updateCounter() {
  // Increment ratio by one each time the submit button gets clicked
  counter++;
  // display updated ratio to the screen
 counterEl.textContent = `${counter} / ${totalQuestions}`;

}

function displayRatio() {
  ratioContainer.textContent = `${ratio} / ${totalQuestions}`;

  // make win / loss visually appealling
  if(ratio < (totalQuestions / 2)) {
    ratioContainer.style.color = "#e3242b";
  } else if(ratio > (totalQuestions / 2)) {
    ratioContainer.style.color = "#03c04a";
  } else{
    ratioContainer.style.color = "#000000";
  }
}

function playSound() {
  song = jpSongs[Math.floor(Math.random() * jpSongs.length)];
  song.play();
}

function pauseSound() {
  song.pause();
}

function shuffleArray() {
  // Implementing a Fisher-Yates Sorting Algorithm
  // to shuffle the initial array of 50+ elements
  const shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  shuffledArray = shuffle(arr);
  return shuffledArray;
}

function renderQuote() {
  // Create an array of 10 random elements for each round
  // can just return the 10 first elements of the intitial array since they are already shuffled
  roundQuoteArr = shuffledArray.slice(0, 10);
  // randomly pick a quote for the current hand
  quote = roundQuoteArr[Math.floor(Math.random() * roundQuoteArr.length)];
  // Finally, render quote in the quote container
  quoteContainer.textContent = quote.quote;
}

function validateAnswer() {

  // make sure the answers array is not populated with empty strings
  if(userAns.value != "") {
    answers.push(userAns.value);
  }

  // Loop over answers and check if there's a value that matches current quote characterName
  // If yes meaning the user answer is right, increment ratio by 1.
  for(let i = 0; i < answers.length; i++) {
    if ((answers[i]).toLowerCase() === (quote.characterName).toLowerCase()) {
      ratio++;
    }

    // Render result to the user
    ratioContainer.textContent = `${ratio} / ${totalQuestions}`;
  }
}

function clearRound() {
  // clear input field and quotes container if timer hits 0 or submitBtn is clicked
  userAns.value = "";
  quoteContainer.textContent = "";
  userAns.focus();
}

function submit() {
  pauseSound();
  clearInterval(timer);
  validateAnswer();
  clearRound();
  render();
}

function enableDisable(){
  if(userAns.value.trim() === ""){
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

function reset() {
  pauseSound();
  clearInterval(timer);
  counterEl.innerHTML = "";
  ratioContainer.innerHTML = "";
  timerContainer.innerHTML = "";
  quoteContainer.textContent = "";
  userAns.value = "";
  userAns.disabled = true;
  submitBtn.disabled = true;
  console.log(timerContainer);
  resetBtn.disabled = true;
}

function endGame() {
  // Display results to the player
  if(counter > 10) {
    clearInterval(timer);
    submit.disabled = true;
    if(ratio < (totalQuestions / 2)) {
      quoteContainer.style.color = "#e3242b";
      quoteContainer.textContent = `Your score is ${ratio} / ${totalQuestions}. You are not truly a fan yet`;
    } else if(ratio > (totalQuestions / 2)) {
      quoteContainer.style.color = "#03c04a";
      quoteContainer.textContent = `Your score is ${ratio} / ${totalQuestions}. You've proven you got the fandom living within you!`;
    } else {
      quoteContainer.textContent = `Your score is ${ratio} / ${totalQuestions}. Just one more to hone your title!`;
    }
  }

}

