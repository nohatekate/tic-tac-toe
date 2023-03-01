/*----- constants -----*/
// 1) Define required constants
//1) Define required constants:
//1.1
const colors = {
    'player1': null,
    'player-1': null
}
let currentPlayer = "X";

const squareEls = document.querySelectorAll(".square")
console.log(squareEls)

//1.2
const winningCombinations = {
    combo1: ["0", "1", "2"],
    combo2: ["0", "4", "8"],
    combo3: ["0", "3", "6"],
    combo4: ["3", "4", "5"],
    combo5: ["6", "7", "8"],
    combo6: ["6", "4", "2"],
    combo7: ["1", "4", "7"],
    combo8: ["2", "5", "8"]
}
/*----- state variables -----*/
// 2) Define required variables used to track the state of the game
const gameBoard = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"];

let yourTurn = null;

let winner = null;

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
const square0 = document.querySelector('#zero');
const square1 = document.querySelector('#one');
const square2 = document.querySelector('#two');
const square3 = document.querySelector('#three');
const square4 = document.querySelector('#four');
const square5 = document.querySelector('#five');
const square6 = document.querySelector('#six');
const square7 = document.querySelector('#seven');
const square8 = document.querySelector('#eight');

/*----- event listeners -----*/
// 4) Upon loading the app should:
//   4.1) Initialize the state variables
//   4.2) Render those values to the page
//   4.3) Wait for the user to click a square

/*----- functions -----*/
// 5) Handle a player clicking a square
function handleClick(evt) {
    if (currentPlayer === 'X' && evt.target.innerHTML === "") {
        evt.target.innerHTML = currentPlayer;
        for (let i = 0; i < gameBoard.length; i++) {
            if (evt.target.id === gameBoard[i]) {
                gameBoard[i] = currentPlayer;
            }
        }
        console.log(gameBoard);
        console.log(evt.target.id)


        currentPlayer = "O"
        console.log(currentPlayer)

    } else if (currentPlayer === "O" && evt.target.innerHTML === "") {
        evt.target.innerHTML = currentPlayer;
        for (let i = 0; i < gameBoard.length; i++) {
            if (evt.target.id === gameBoard[i]) {
                gameBoard[i] = currentPlayer;
            }
        }

        currentPlayer = "X"
        console.log(currentPlayer)
    }
    // console.log(evt.target.innerText = "X")
}
// 6) Handle a player clicking the replay button
squareEls.forEach(function (evt) {
    evt.addEventListener("click", handleClick)
})
// for (let i = 0; i<squareEls.length; i++){
//     evt.addEventListener("click", handleClick(squareEls[i]))
//     // handleClick(squareEls[i])
//     console.log(squareEls[i])
// }
// 6) Handle a player clicking the replay button:
const resetButton = document.querySelector('#button')
console.log(resetButton)
resetButton.addEventListener("click", resetGame)
function resetGame() {
    squareEls.forEach(square)


    console.log("I've been clicked")
}
function square(square) {
    square.innerHTML = ""
    // console.log("We're making progress")
}

// Three of the same player in a row is a win
// 3 across
// 3 down
// 2 diagonal 
