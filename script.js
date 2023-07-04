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

function game() {

    while (playerScore < 5 && computerScore < 5) {

        const playerSelection = prompt("Your Selection (Rock, Paper, or Scissors)").toLowerCase();
        const computerSelection = getComputerChoice()

        console.log(playRound(getComputerChoice(), playerSelection));
        switch (roundWinner) {

            case "Player":
                playerScore++
                break;

            case "CPU":
                computerScore++
                break;
        };
    };

    if (playerScore > computerScore) {
        return "You Won The Game!"
    } else {
        return "You Suck!"
    };
};

console.log(game());