import { getRandomQuote } from "./quotes.js";

/*------------ Constants ------------*/
// const roundQuoteArr = getRandomQuote();
const arr = getRandomQuote();
const totalQuestions = 10;
const minutes = "00";

// console.log(roundQuoteArr); -- works



/*------------ Variables ------------*/
// let ratioText, timerText;
let ratio;
let timeLeft;
let shuffledArray;
let roundQuoteArr = [];
let quote= [];
let quoteText;
let answers = []; // to store all user's answers for a round of 10 questions
let counter; // max value must be 10.
let timer;

// console.log(arr)



/*------------ Cached Element References ------------*/
let userAns = document.querySelector("#user-input");
// console.log(userAns); -- Works
const playBtn = document.querySelector("#play-btn");
//console.log(playBtn); -- works
const timerContainer = document.querySelector("#timer-container");
//console.log(timerContainer); -- works
const counterEl = document.querySelector("#counter");
//console.log counterEl); -- works
const submitBtn = document.querySelector("#submit-btn");
//console.log(submitBtn); -- works
const quoteContainer = document.querySelector("#quotes-placeholder");
// console.log(quoteContainer); -- works
const ratioContainer = document.querySelector("#ratio-container");




/*------------ Event listeners ------------*/
playBtn.addEventListener("click", start);
submitBtn.addEventListener("click", submit);
userAns.addEventListener("input", enableDisable );



/*------------ Functions ------------*/
userAns.value = "";
userAns.disabled = true;
submitBtn.disabled = true;
function start() {
  //enableDisable();
  // activate input field
  userAns.disabled = false;
  submitBtn.disabled = false;
  // Change play button text to reset and body color from green to red

  // initialize ratio to 1\
  counter = 0;
  ratio = 0;
  // reset timer to 20 seconds

  // reset right/wrong ratio
 
  // display random quote in quotes placeholder

  // disable the submit button

  // Clear input field and put focus in it
  userAns.value = "";
  userAns.focus();
  // render game state to the player
    // render timer
    // render ratio
    // render quote
    render();
}

function render() {
  // render game state
  displaytimer();
  displayRatio();
  updateCounter();
  shuffleArray();
  renderQuote();
  enableDisable();
}

function displaytimer() {
  timeLeft = 20;
  timer = setInterval(function() {
    // Display timer in the format 'min : sec' in the timer container
    timerContainer.textContent = minutes + " : " + `${timeLeft}`;
    timeLeft--;
    if(timeLeft < 0) {
      timerContainer.textContent = minutes + " : " + minutes;
      // clearTimeout(timer)
      clearInterval(timer);
      // submit what's in the input field when timer hits zero
      submitBtn.click();
    }
    //clearInterval(timer);
  }, 1000);
}

function updateCounter() {
  // Increment ratio by one each time the submit button gets clicked
  counter++;
  // display updated ratio to the screen
 counterEl.textContent = `${counter} / ${totalQuestions}`;

  // Store the current value of ratio for next round

}

function displayRatio() {
  ratioContainer.textContent = `${ratio} / ${totalQuestions}`;
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
// shuffleArray(); // -- works

function renderQuote() {
  // Create an array of 10 random elements for each round
  // can just return the 10 first elements of the intitial array since they are already shuffled
  roundQuoteArr = shuffledArray.slice(0, 10);
  // console.log(roundQuoteArr); --  works
  // randomly pick a quote for the current hand
  quote = roundQuoteArr[Math.floor(Math.random() * roundQuoteArr.length)];
  console.log(quote);
  // capture only the text of the quote to render to the user
  quoteText = quote.quote;
  // console.log(quoteText) -- works
  // Finally, render quote to the quote container
  quoteContainer.textContent = quoteText;
}
// renderQuote(); //-- works

function validateAnswer() {

  /*-------------- This function works ---------------*/

  // make sure the answers array is not populated with empty strings
  if(userAns.value != "") {
    answers.push(userAns.value);
  }

  // Loop over answers and check if there's a value that matches current quote characterName
  // If yes meaning the user answer is right, increment ratio by 1.
  for(let i = 0; i < answers.length; i++) {
    if (answers[i] === quote.characterName) {
      console.log(answers[i])
      ratio++;
    }
    // ratio--;
    ratioContainer.textContent = `${ratio} / ${totalQuestions}`;
  }

}
// validateAnswer();

function clearRound() {
  // clear input field and quotes container if timer hits 0 or submitBtn is clicked
  userAns.value = "";
  quoteContainer.textContent = "";
  userAns.focus();
}

// console.log(renderQuote());

function updatePlayBtn() {

}

function submit() {
  validateAnswer();
  clearRound();
  render();
  clearInterval(timer);
}

function enableDisable(){
  if(userAns.value.trim() === ""){
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}
console.log(userAns);
enableDisable();

function submitAtTimer0() { 
  //Increment counter when timer hits zero
  updateCounter();
  // submit answer anyway if timer hits 0
  // if(timer < 20) submit();
}

function endGame() {
  // end current round if ratio == totalQuestions
}

// function reset() {
//   start();
// }
// console.log(answers);