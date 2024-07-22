function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0) {
        console.log(randomNumber)
return "rock";

    } else if (randomNumber == 1) {
        console.log(randomNumber)
return "paper";
    } else {
        console.log(randomNumber)
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Pick rock, paper or scissors").toLowerCase();
    if(choice === "rock") {
        console.log("rock")
        return "rock";
    } else if(choice === "paper") {
        console.log ("paper")
        return "paper";
    } else if(choice === "scissors") {
        console.log("scissors")
        return "scissors";
    } else {
        console.log("please pick a valid answer")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {

    let computerScore = 0;
    let humanScore = 0;
    
    function playRound(humanChoice, computerChoice) {
    
    
        if (humanChoice == "paper" && computerChoice == "scissor") {
            computerScore++;
            console.log("You lose! Paper loses to Scissor");
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("Draw!");
        } else if (humanChoice == "scissor" && computerChoice == "scissor") {
            console.log("Draw!");
        } else if (humanChoice == "scissor" && computerChoice == "rock") {
            computerScore++;
            console.log("You lose! Scissor loses to Rock");
        } else if (humanChoice == "scissor" && computerChoice == "paper") {
            humanScore++;
            console.log("You win! Scissor beats Paper");
        } else if (humanChoice == "rock" && computerChoice == "scissor") {
            humanScore++;
            console.log("You win! rock wins against scissor");
        } else if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("Draw!");
        } else {
            computerScore++;
            console.log("You lose! Rock loses to Paper");
        }
        
    }
    
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    
    console.log(humanScore);
    console.log(computerScore);
    
    }
    
    playGame();