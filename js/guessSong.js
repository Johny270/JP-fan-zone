import { getSongs2 } from "./audio.js";

/*------------ Constants ------------*/
const songs = getSongs2();
console.log(songs);

/*------------ variables ------------*/
let song;
let options = [];
let shuffledOptions = [];
let timeLeft;
let timer;

/*------------ Cached Elements Reference ------------*/
const playBtn = document.querySelector("#play-btn");
const resultContainer = document.querySelector("#instructions");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const resetBtn = document.querySelector("#reset");
const exitBtn = document.querySelector("#exit");
const optionsContainer = document.querySelector("#options");


/*------------ Event Listeners ------------*/
playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
optionsContainer.addEventListener("click", printResults);

/*------------ Functions ------------*/

options.push(option1);
options.push(option2);
options.push(option3);

resultContainer.textContent = "SELECT THE CORRECT SONG OPTION";

function play() {
  resultContainer.textContent = "";
  render();
  playBtn.disabled = true;
  resetBtn.disabled = false;
}

function render() {
  playSong();
  shuffleOptions();
  displayOptions()
}

function playSong() {
  song = songs[Math.floor(Math.random() * songs.length)];
  song.song.play();
}

function shuffleOptions() {
  const shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  shuffledOptions = shuffle(songs);
  return shuffledOptions;
}

function displayOptions() {
  options[Math.floor(Math.random() * options.length)].textContent = song.songTitle;
  for(let i = 0; i < options.length; i++) {
    if (options[i].textContent === "") {
      options[i].textContent = shuffledOptions[Math.floor(Math.random() * shuffledOptions.length)].songTitle;
    }
  }
}

function printResults(evt) {
  timeLeft = 2;
  timer = setInterval(function() {  
    if(evt.target.textContent === song.songTitle){
      resultContainer.textContent = "CORRECT !";
      resultContainer.style.color = "#90EE90";
    } else {
      resultContainer.textContent = "WRONG !";
      resultContainer.style.color = "#fbaed2";
    }
    timeLeft--;
    if(timeLeft < 0) {
      clearInterval(timer);
      song.song.pause();
      resultContainer.textContent = "";
      render();
    }
  }, 1000);
}

function reset() {
  clearInterval(timer);
  song.song.pause();
  resultContainer.textContent = "";
  option1.textContent = "";
  option2.textContent = "";
  option3.textContent = "";
  playBtn.disabled = false;
  resetBtn.disabled = true;
}






