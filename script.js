function computerPlay() {
    const gameChoices = ['computerRock', 'computerPaper', 'computerScissors'];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    computerSelection = gameChoices[getRandomInt(3)];
    const computerFinalOption = document.getElementById('computerFinalOption')
    const computerHasChosen = document.getElementById(`${computerSelection}`)

    computerFinalOption.className = computerHasChosen.className;
    
    return computerSelection;
}

// create a function that will return the user input 
// use 'prompt' to get input from the user;
function playerPlay() {
    playerSelection = this.event.path[1].id
    let currentSelection = this.event.path[0].className

    const playerFinalOption = document.getElementById('playerFinalOption')


    playerFinalOption.className = currentSelection;

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

    if (playerSelection === 'rock' && computerSelection === 'computerScissors') {
        playerVictories += 1;
        console.log("You Won! Rock beats Scissors.")
    } else if (playerSelection === 'paper' && computerSelection === 'computerRock') {
        playerVictories += 1;
        console.log("You Won! Paper beats Rock.")
    } else if (playerSelection === 'scissors' && computerSelection === 'computerPaper') {
        playerVictories += 1;
        console.log("You Won! Scissors beats Paper.")
    } else if (playerSelection === 'scissors' && computerSelection === 'computerRock') {
        computerVictories += 1;
        console.log("You Lose! Rock beats Scissors.")
    } else if (playerSelection === 'paper' && computerSelection === 'computerScissors') {
        computerVictories += 1;
        console.log("You Lose! Scissors beats Paper.")
    } else if (playerSelection === 'rock' && computerSelection === 'computerPaper') {
        computerVictories += 1;
        console.log("You Lose! Paper beats Rock.")
    } else {
        console.log("It's a tie. You selected the same weapon.");
    }
    
    score.textContent = `Current score: \n Computer ${computerVictories} \n Player ${playerVictories}`
}
    
    


const playerRock = document.querySelector('#rock');
const playerPaper = document.querySelector('#paper')
const playerScissors = document.querySelector('#scissors')
const score = document.querySelector('.score')

playerRock.addEventListener('click', playRound);
playerPaper.addEventListener('click', playRound);
playerScissors.addEventListener('click', playRound);




