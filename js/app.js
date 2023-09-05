import { getRandomQuote } from "./quotes.js";

/*------------ Constants ------------*/
// const roundQuoteArr = getRandomQuote();
const totalQuestions = 10;
const minutes = "00";

// console.log(roundQuoteArr); -- works



/*------------ Variables ------------*/
let ratioText, timerText;
let ratio;
let timeLeft;
let shuffledArray;
let roundQuoteArr = [];
const arr = getRandomQuote();
// console.log(arr)



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
playBtn.addEventListener("click", displaytimer);
submitBtn.addEventListener("click", updateRatio)



/*------------ Functions ------------*/
function start() {
  // Change play button text to reset and body color from green to red

  // initialize ratio to 1
  ratio = 1;
  // reset timer to 20 seconds
  timeLeft = 20;
  // reset right/wrong ratio

  // display random quote in quotes placeholder

  // disable the submit button

  // Clear input field and put focus in it

  // render game state to the player
}

function render() {
  // render game state
}

function displaytimer() {
  timeLeft = 20;
  let timer = setInterval(function() {
    // Display timer in the format 'min : sec' in the timer container
    timerContainer.textContent = minutes + " : " + `${timeLeft}`;
    timeLeft--;
    if(timeLeft < 0) {
      timerContainer.textContent = minutes + " : " + minutes;
      clearInterval(timer);
      // submit what's in the input field when timer hits zero
      submitBtn.click();
    }
  }, 1000);

}

function updateRatio() {
  ratio = 1;
  // Increment ratio by one each time the submit button gets clicked
  ratio++;

  // Imcrement ratio by One each time the timer hits 0


  //ratioContainer.style.color = "black";

  // display updated ratio to the screen
  ratioContainer.innerHTML = `${ratio} / ${totalQuestions}`;

  // Store the current value of ratio for next round


  // console.log("submit was clicked!")
  // console.log(ratioContainer.textContent)
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
shuffleArray(); // works

function renderquote() {
  // Create an array of 10 elements for each round
  
  // Display a quote to the player in the quote container for each round


}

function updatePlayBtn() {

}

function submit() {

}

// function reset() {
//   start();
// }