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
        output.innerHTML = `<span style="color:green;">You Won!</span> Rock beats Scissors.`
    } else if (playerSelection === 'paper' && computerSelection === 'computerRock') {
        playerVictories += 1;
        output.innerHTML = `<span style="color:green;">You Won!</span> Paper beats Rock.`
    } else if (playerSelection === 'scissors' && computerSelection === 'computerPaper') {
        playerVictories += 1;
        output.innerHTML = `<span style="color:green;">You Won!</span> Scissors beats Paper.`
    } else if (playerSelection === 'scissors' && computerSelection === 'computerRock') {
        computerVictories += 1;
        output.innerHTML = `<span style="color:red;">You Lost!</span> Rock beats Scissors.`
    } else if (playerSelection === 'paper' && computerSelection === 'computerScissors') {
        computerVictories += 1;
        output.innerHTML = `<span style="color:red;">You Lost!</span> Scissors beats Paper.`
    } else if (playerSelection === 'rock' && computerSelection === 'computerPaper') {
        computerVictories += 1;
        output.innerHTML = `<span style="color:red;">You Lost!</span> Paper beats Rock.`
    } else {
        output.textContent = "It's a tie. You selected the same weapon."
        output.innerHTML = `<span style="color:grey;">It's a tie!</span> You selected the same weapon.`
    }
    
    score.textContent = `Current score: \n Computer ${computerVictories} \n Player ${playerVictories}`
}
    
    


const playerRock = document.querySelector('#rock');
const playerPaper = document.querySelector('#paper')
const playerScissors = document.querySelector('#scissors')
const score = document.querySelector('.score')
const output = document.querySelector('.output')
const resetScore = document.querySelector('.resetScore')

playerRock.addEventListener('click', playRound);
playerPaper.addEventListener('click', playRound);
playerScissors.addEventListener('click', playRound);
resetScore.addEventListener('click', function reset() {
    computerVictories = 0;
    playerVictories = 0;
    score.textContent = `Current score: \n Computer ${computerVictories} \n Player ${playerVictories}`
    output.textContent = 'Make your first choice!'
})



