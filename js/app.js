import { getRandomQuote } from "./quotes.js";

/*------------ Constants ------------*/
const roundQuoteArr = getRandomQuote();
const totalQuestions = 10;

// console.log(roundQuoteArr); -- works



/*------------ Variables ------------*/
let ratioText, timerText;
let ratio;
let timeLeft = 20;



/*------------ Cached Element References ------------*/
const userAns = document.querySelector("#user-input");
// console.log(userAns); -- Works
const playBtn = document.querySelector("#play-btn");
//console.log(playBtn); -- works
const timerContainer = document.querySelector("#timer-container");
//console.log(timerContainer); -- works
const ratioContainer = document.querySelector("#ratio-container");
//console.log(ratioContainer); -- works
const submitBtn = document.querySelector("#submit-btn");
//console.log(submitBtn); -- works




/*------------ Event listeners ------------*/
playBtn.addEventListener("click", start);
submitBtn.addEventListener("click", updateRatio)



/*------------ Functions ------------*/
function start() {
  // Change play button text to reset and body color from green to red

  // initialize ratio to 1
  ratio = 1;
  // reset timer to 0

  // reset right/wrong ratio

  // display random quote in quotes placeholder

  // disable the submit button

  // render game state to the player
}

function render() {
  // render game state
}

function displaytimer() {

}

function updateRatio() {
  // Increment ratio by one each time the submit button gets clicked
  ratio++;

  // Imcrement ratio by One each time the timer hits 0


  //ratioContainer.style.color = "black";

  // display updated ratio to the screen
  ratioContainer.innerHTML = `${ratio} / ${totalQuestions}`;
  // console.log("submit was clicked!")
  // console.log(ratioContainer.textContent)
}

function updatePlayBtn() {

}