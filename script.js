const choices = document.querySelectorAll(".choice");
const score = document.querySelector("#score");
const roundResult = document.querySelector("#round-result");
const gameResult = document.querySelector("#game-result");

choices.forEach((choice) => {
    choice.addEventListener("click", () => playRound(choice.id, getComputerChoice()));
});

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";
            break;

        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        roundResult.textContent = "You win!";
    }
    else if (computerChoice === "rock" && playerChoice === "scissors" ||
             computerChoice === "paper" && playerChoice === "rock" ||
             computerChoice === "scissors" && playerChoice === "paper") {
        computerScore++;
        roundResult.textContent = "You lose!";
    }
    else {
        roundResult.textContent = "Tie!";
    }

    score.textContent = `${playerScore} - ${computerScore}`;

    if (playerScore === 5) {
        gameResult.textContent = "Game Over! You win!";
    }
    else if (computerScore === 5) {
        gameResult.textContent = "Game Over! You lose!";
    }
}