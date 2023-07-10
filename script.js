let playerScore = 0;
let computerScore = 0;
let roundWinner = ""

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * choices.length);
    return choices[num];
};

function playRound(computerSelection, playerSelection) {

    if (computerSelection == playerSelection) {
        roundWinner = "Nobody";
        return "It's a Tie!"
    } else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "rock")) {
        roundWinner = "CPU";
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        roundWinner = "Player";
        return `You win! ${playerSelection} beats ${computerSelection}`;
    };

};


function handleMove(selection) {
    const computerSelection = getComputerChoice();
    playRound(computerSelection, selection);
    console.log(roundWinner);
    if (roundWinner == "Nobody") {
        resultsDiv.innerHTML = "It's a tie!"
    } 
    if (roundWinner == "Player") {
        playerScore += 1
        playerScoreP.innerHTML = playerScore
        resultsDiv.innerHTML = "You won that round!"
    } else if (roundWinner == "CPU") {
        computerScore += 1
        computerScoreP.innerHTML = computerScore
        resultsDiv.innerHTML = "You lost that one!"
    }

    if (playerScore == 5) {
        resultsDiv.innerHTML = "You won the game!"
        playerScore = 0
        computerScore = 0
        playerScoreP.innerHTML = playerScore
        computerScoreP.innerHTML = computerScore
    } else if (computerScore == 5) {
        resultsDiv.innerHTML = "You lost the game"
        playerScore = 0
        computerScore = 0
        playerScoreP.innerHTML = playerScore
        computerScoreP.innerHTML = computerScore
    }

}


const gameBtns = document.querySelectorAll("button")
const playerScoreP = document.querySelector(".player-score")
const computerScoreP = document.querySelector(".cpu-score")
const resultsDiv = document.querySelector(".results")
const scissorsBtn = document.querySelector("#scissors")
scissorsBtn.addEventListener("click", () => handleMove("scissors"))
const rockBtn = document.querySelector("#rock")
rockBtn.addEventListener("click", () => handleMove("rock"))
const paperBtn = document.querySelector("#paper")
paperBtn.addEventListener("click", () => handleMove("paper"))