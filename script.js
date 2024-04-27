
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

function getComputerChoice()
{
    switch (Math.floor(Math.random() * 3))
    {
        case 0:
            return "ROCK";

        case 1:
            return "PAPER";

        case 2:
            return "SCISSORS";
    }
}

function playRound(e)
{
    let humanChoice = e.target.className.toUpperCase();
    let computerChoice = getComputerChoice();

    if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") || (humanChoice === "PAPER" && computerChoice === "ROCK") || (humanChoice === "SCISSORS" && computerChoice === "PAPER"))
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return 0;
    }
    else if ((computerChoice === "ROCK" && humanChoice === "SCISSORS") || (computerChoice === "PAPER" && humanChoice === "ROCK") || (computerChoice === "SCISSORS" && humanChoice === "PAPER"))
    {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return 1;
    }
    else
    {
        console.log("It's a tie!");
        return -1;
    }
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        switch (playRound(getHumanChoice(), getComputerChoice()))
        {
            case 0:
                humanScore++;
                break;

            case 1:
                computerScore++;
                break;
        }
    }

    if (humanScore > computerScore)
    {
        console.log("You win the best of 5!");
    }
    else if (computerScore > humanScore)
    {
        console.log("You lost the best of 5!");
    }
    else
    {
        console.log("There are no winners in the best of 5.");
    }
}