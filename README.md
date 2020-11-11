# Tic Tac Turing
## Overview
Have you ever wondered which 2010FE Mod 1 instructor would win in a battle? Well, this will definitely not answer that question!
Tic Tac Turing brings the classic game of tic tac toe to life, and allows you to play as any one of your favorite 2010FE Mod 1 instructors. 
Who will you be???

### Game
Players can win by getting three (3) of their tokens in a row, column, or diagonal. If all squares are filled, and neither player has won, then the game is declared a draw.
### Features
Scores are displayed on either side of the board under the corresponding player's token symbol.

## Technologies
Tic Tac Toe was built using JavaScript on an HTML framework with CSS styling.

## Architecture

The JavaScript is handled by three file: ```main.js```, ```game.js```, and ```player.js```.
  * ```main.js``` handles all DOM manipulation, and also houses all querySelectors and event listeners. Any time something changes visually on the page, that is handled by functions within ```main.js```. This separation prevents the DOM from being manipulated by methods that are meant to update data, and vice versa.
  * ```game.js``` does the majority of the data model work.  It instantiates a game class, and uses the associated methods to update the data model, look for patterns, and track user input.
  * ```player.js``` uses a class constructor to instantiate a new player class. It also stores and retrieves the data associated with each player from ```localStorage```, by calling a method from the player class. 

## Download
Clone the repository to your local machine:
 - ```git clone git@github.com:DrewBradley/ticTacToe-2010fe-solo-project.git```

Change directories:
 - ```cd ticTacToe-2010fe-solo-project```

Open ```index.html``` in your browser of choice. 
 - ```open index.html```

If you need to, clear localStorage before starting a new game.

## Wins/Challenges
Wins:
 - Using localStorage to have scores persist through refreshing the page.
 - Keeping DOM and data model seperated throughout the project.
 - Getting the site to function the way it was expected to.

Challenges:
 - Using CSS grid to create a responsive site that adjusts to different screen sizes, without distorting the gameboard.
 - Writing DRY js when dealing with DOM or data for each player in the game.
 - Using media queries after having built the site for desktop.
 - Encountering issues with certain diagonal win senarios returning a draw.
 - Updating the README.md from the main branch on GitHub.

## Images
![game play](https://media.giphy.com/media/LjCaZcS7EPq5tcDMGD/giphy.gif)

![WIN!](https://media.giphy.com/media/5WUUmzraYH1O2XWLQ5/giphy.gif)

![DRAW](https://media.giphy.com/media/6nW00MWlGgIDQ1jP8T/giphy.gif)

![Mobile splash](https://media.giphy.com/media/CpVSLCRnfgzuaPZIUH/giphy.gif)

![Mobile game play](https://media.giphy.com/media/syst97jtITYgekVNqD/giphy.gif)
