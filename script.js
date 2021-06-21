// game is gonna be played against computer
// create a function called 'computerPlay' that will randomly return either 'Rock' , 'Paper' or 'Scissors'
function computerPlay() {
    const gameChoices = ['rock', 'paper', 'scissors'];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    computerSelection = gameChoices[getRandomInt(3)];
    return computerSelection;
}

// create a function that will return the user input 
// use 'prompt' to get input from the user;
function playerPlay() {
    playerSelection = this.event.path[1].id
}

let playerSelection;
let computerSelection;


let computerVictories = 0;
let playerVictories = 0;


let computer = 'Computer';
let player = 'Player';


// Write a function called 'playRound' that plays a single round of Rock Paper Scissors
function playRound() {

    computerPlay();
    playerPlay();

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerVictories += 1;
        console.log("You Won! Rock beats Scissors.")
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerVictories += 1;
        console.log("You Won! Paper beats Rock.")
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerVictories += 1;
        console.log("You Won! Scissors beats Paper.")
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerVictories += 1;
        console.log("You Lose! Rock beats Scissors.")
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerVictories += 1;
        console.log("You Lose! Scissors beats Paper.")
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerVictories += 1;
        console.log("You Lose! Paper beats Rock.")
    } else {
        console.log("It's a tie. You selected the same weapon.");
    }
    
    score.textContent = `Current score: \n Computer ${computerVictories} \n Player ${playerVictories}`
}
    
    

// Write a new function called game() {

function game() {

// use a loop to play more than 1 round of the game
// if one player gets to score 3, return message and finish game by exiting loop
    for (let i=0; i<=15; i++) {
        if (computerVictories == 5 || playerVictories == 5) {
            return `Congratulations ${(computerVictories > 4) ? computer : player}! You won.`;
    } else {
        playRound();
            console.log(`Current score is:\n  Player: ${playerVictories} \n Computer ${computerVictories}`);
            }
    }

    computerVictories = 0;
    playerVictories = 0;
}

// }


const playerRock = document.querySelector('#rock');
const playerPaper = document.querySelector('#paper')
const playerScissors = document.querySelector('#scissors')
const score = document.querySelector('.score')

playerRock.addEventListener('click', playRound);
playerPaper.addEventListener('click', playRound);
playerScissors.addEventListener('click', playRound);
// playersChoices.forEach(choice => choice.addEventListener('click', playRound));



