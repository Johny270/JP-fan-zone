![Japanime fan zone screenshot](./assets/Screenshot%202023-09-08%20134844.png)

# Japanime Fan Zone !

***

JP Fan Zone is an online quiz platform dedicated to everything Japan animation-related. It is the place to go to test how much of a fan you truly are when it comes to Japanimation. This game saw the light of the day because of an intention to spread and share the japanimation passion between those who feel like they belong to such a community. The author of the project himself is a great admirer of the artistry of japanese people when it comes to story-telling, art, and animation. The game renders a series of quotes for which the player/user must correctly guess the author their score increase.

## Getting Started

***

Please visit [Japanine Fan-Zone web page](https://jp-fan-zone.netlify.app/) to play.
> ### How to Play:
upon loading the page:
> - Click the play button. The user ***will not be allowed*** to enter any input nor click any other button before he initializes the game by clicking on the **play** button.
- After clicking the play button, game is initialized
- The interface should render:
  - A **counter** to keep track of the number of questions already displayed.
  - A **score** or **ratio** to keep track of the number of correct answers provided by the user at that point of the game.
  - A **timer** for each question. The next question is displayed when the timer hits 0 and what's in the input field gets submitted as an answer anyway.
  - A **reset** button to allow the user to quit the current round of 10, reinitialize the game to its initial state, and allow the user to start a fresh new party by clicking the *play* button.
- After a round of 10 questions, the user is presented with a splash screen on which they are prompted to continue to play. The user thus has two options:
  - A ***continue*** button to initialilze a new round and continue playing.
  - An ***Exit*** button that will take the user to an exit screen with no further action required, may be perhaps a **Go back playing** button option.


## Attributions

***

> ### Fonts:
The fonts in this game all come from [Google Fonts](https://fonts.google.com/) and are:
 - [Inknut Antiqua](https://fonts.google.com/specimen/Inknut+Antiqua?query=inknut) 
 - [Jacques Francois](https://fonts.google.com/specimen/Jacques+Francois?query=jacques+fra)
 - [Lilita One](https://fonts.google.com/specimen/Lilita+One?query=lilita)

> ### Songs
  - [Code Geass](https://archive.org/details/02-stories)
  - [Attack On Titans](https://archive.org/details/attack-on-titan-original-soundtrack)
  - [Naruto](https://downloads.khinsider.com/game-soundtracks/album/naruto-shippuden-ultimate-ninja-1-unofficial-soundtrack) 

  > ### Images
  [Obito Uchiha Image](https://www.wallpaperflare.com/uchiha-obito-wallpaper-naruto-uchiha-madara-digital-wallpaper-wallpaper-qwx/download/1920x1080)

 > ### Features:
 Critical features and challenges building this application were:
 - Making sure a *random* quote is rendered to the user for each question. Doing this will reduce the risk of coming accross the same quote too often during a single round of 10.
  ```const shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  shuffledArray = shuffle(arr); 
  ```
  for which a ***Fisher-Yates Sorting Algorithm*** syntax found in this [article](https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/) from freecodecamp.

  - Another challenge involved disabling the *submit button* until the *input field* had value in it. Two articles helped resolving the issue:
    - [
Enable or Disable Button based on condition using JavaScript ](https://www.aspsnippets.com/Articles/Enable-or-Disable-Button-based-on-condition-using-JavaScript.aspx)
    - [HTMLElement: input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)

## Techonologies used

***

- HTML
- CSS
- JavaScript

## Icebox - Next Steps

***

- [x] Render game interface to the user
- [x] Implement color palette for user interface in css
- [x] Handle game win / loss logic
- [x] Reset Functionality.
- [x] Handle song
- [x] Display favicon
- [ ] make sure the same question is never asked twice during a round of 10
- [ ] Implement answers forgiveness, meaning if the user only enter the character first name, or only the character last name, the validation returns true
- [ ] Implement audio visualizer for sound
- [ ] Display anime image that matches the current quote
- [ ] play anime song that matches the current image and quote.
- [ ] quit game option
- [ ] exit screen for when the user quit the game, with the option to go back to the game

## AUTHOR

***

Jonathan Takam | [linkedIn](www.linkedin.com/in/takam-jonathan).



