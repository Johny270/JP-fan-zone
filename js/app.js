import { getRandomQuote } from "./quotes.js";

/*------------ Constants ------------*/
// const roundQuoteArr = getRandomQuote();
const arr = getRandomQuote();
const totalQuestions = 10;
const minutes = "00";

// console.log(roundQuoteArr); -- works



/*------------ Variables ------------*/
let ratioText, timerText;
let ratio;
let timeLeft;
let shuffledArray;
let roundQuoteArr = [];
let quote= [];
let quoteText;
let answers = []; // to store all user's answers for a round of 10 questions
let answer; // to store user's answer for the current question

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
const quoteContainer = document.querySelector("#quotes-placeholder");
// console.log(quoteContainer); -- works




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
    // render timer

    // render ratio

    // render quote
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
  // Increment ratio by one each time the submit button gets clicked
  ratio++;

  // Imcrement ratio by One each time the timer hits 0
  if(timeLeft < 0) {
    ratio++;
  }
  // display updated ratio to the screen
  ratioContainer.innerHTML = `${ratio} / ${totalQuestions}`;

  // Store the current value of ratio for next round

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
renderQuote();

function validateAnswer() {

  /*-------------- This function works ---------------*/

  //userAns.textContent = "Natsu Dragneel";
  // store the text value within the input field in a variable
  answer = userAns.textContent.toLowerCase();
  // push string value of variable to an array of answers for the current round of 10
  answers.push(answer);
  // compare text value of the variable to text value of the current quote name of the character who said it
  // And increment counter by one if strings match, else leave it as is, for the the next round
  if(answer === quote.characterName.toLowerCase()) {
    console.log("Increment the ratio");
    // ratio++;
  }
  // clear variable for the next round
  answer = "";
}
validateAnswer();

function clearRound() {
   
}

// console.log(renderQuote());

function updatePlayBtn() {

}

function submit() {
  updateRatio();
}

// function reset() {
//   start();
// }