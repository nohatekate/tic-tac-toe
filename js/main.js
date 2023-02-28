  /*----- constants -----*/
// 1) Define required constants
//1) Define required constants:
//1.1
const colors = {
    'player1': null,
    'player-1': null
}

    //1.2
const winningCombinations = {
    combo1 :["0", "1", "2"],
    combo2 :["0", "4", "8"],  
    combo3 :["0", "3", "6"],
    combo4 :["3", "4", "5"],
    combo5 :["6", "7", "8"],
    combo6 :["6", "4", "2"],
    combo7:["1", "4", "7"],
    combo8:["2", "5", "8"]
}
  /*----- state variables -----*/
// 2) Define required variables used to track the state of the game
const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]; 

let yourTurn = null;

let winner = null;

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
const square0 = document.querySelector('#0');
const square1 = document.querySelector('#1');
const square2 = document.querySelector('#2');
const square3 = document.querySelector('#3');
const square4 = document.querySelector('#4');
const square5 = document.querySelector('#5');
const square6 = document.querySelector('#6');
const square7 = document.querySelector('#7');
const square8 = document.querySelector('#8');

  /*----- event listeners -----*/
// 4) Upon loading the app should:
//   4.1) Initialize the state variables
//   4.2) Render those values to the page
//   4.3) Wait for the user to click a square

  /*----- functions -----*/
// 5) Handle a player clicking a square

// 6) Handle a player clicking the replay button
