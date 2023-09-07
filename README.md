# Japanime Fan Zone !
***

JP Fan Zone is an online quiz platform dedicated to everything Japan animation-related. It is the place to go to test how much of a fan you truly are when it comes to Japanimation. The game renders a series of quotes that the player/user must correctly guess who said them to see his/her score increase.

# Getting Started
***

Please visit [Japanine Fan-Zone web page](https://jp-fan-zone.netlify.app/) to play.
> ### How to Play:
upon loading the page:
> - Click the play button. The user ***will not be allowed*** to enter any input nor click any other button before he initializes the game by clicking on the **play** button.
- After clicking the play button, game is initialized
- The interface should render:
  - A **counter** to keepp track of the number of questions already played.
  - A **score** or **ratio** to keep track of the number of correct answers provided by the user at that point of the game.
  - A **timer** for each question. The next question is displayed when the timer hits 0 and what's in the input field gets submitted as an answer anyway.
  - A **reset** button to allow the user to quit the current round of 10, reinitialized the game to its initial state, and allow the user to start a fresh new party by clicking the *play* button.
- After a round of 10 questions, the use is presented with a splash screen on which they are prompted to continue to play. The user thus has two options:
  - A ***continue*** button to initialilze a new round and continue playing.
  - An ***Exit*** button that will take the user to an exit screen with no further action required, may be perhaps a **Go back playing** button option.


# Attributions
***

> ### Fonts:
The fonts in this game all come from [Google Fonts](https://fonts.google.com/) and are:
 - [Inknut Antiqua](https://fonts.google.com/specimen/Inknut+Antiqua?query=inknut) 
 - [Jacques Francois](https://fonts.google.com/specimen/Jacques+Francois?query=jacques+fra)
 - [Lilita One](https://fonts.google.com/specimen/Lilita+One?query=lilita)

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

# Techonologies used
***




