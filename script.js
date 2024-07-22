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

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if(humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lose rock < paper")
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        console.log("You win rock > scissors")
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose paper < scissors")
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("you win paper > rock")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("you lose scissors < rock")
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        console.log("you win scissors > paper")
    } else { 
        console.log("TIE")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame () {

    }
