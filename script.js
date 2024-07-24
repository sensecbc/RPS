//PC answer
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0) {
        console.log(randomNumber)
        return "rock";
    } else if (randomNumber == 1) {
        console.log(randomNumber)
        return "paper";
    } else {
        console.log(randomNumber)
        return "scissors";
    }
}

//Human answer
function getHumanChoice() {
    const promptUser = prompt("Rock, paper or scissors?").toLowerCase();
    if (promptUser == "rock") { 
        return "rock";
    } else if (promptUser == "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}

//gave both functions above a variable so that I can easily work it

    

function playGame() {

    //score
let humanScore = 0;
let computerScore = 0;

//plays 1 round of RPS and adds the score
function playRound() {

    //had to get this part of the code inside the playGame function so that it would repeat 5 times
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

    if (computerSelection == "rock" && humanSelection == "scissors") {
        console.log("you lost because rock beats scissors")
        computerScore++;
    } else if (computerSelection == "rock" && humanSelection == "paper") {
        console.log("you won because rock loses to scissors")
        humanScore++;
    } else if (computerSelection == "rock" && humanSelection == "rock") {
        console.log("tied rock rock")
    } else if (computerSelection == "paper" && humanSelection == "rock") {
        console.log("you lost because paper beats rock")
        computerScore++;
    } else if (computerSelection == "paper" && humanSelection == "scissors") {
        console.log("you won because paper loses to scissors")
        humanScore++;
    } else if (computerSelection == "paper" && humanSelection == "paper") {
        console.log("tied paper paper")
    } else if (computerSelection == "scissors" && humanSelection == "paper") {
        console.log("you lost because scissors beats paper")
        computerScore++;
    } else if (computerSelection == "scissors" && humanSelection == "scissors") {
        console.log("tied scissors scissors")
    } else if (computerSelection == "scissors" && humanSelection == "rock") {
        console.log("you won because scissors loses to rock")
        humanScore++;
    }   
}
//repeats the game 5 times
for(let i = 0; i < 5; i++) {
    playRound()
} 

console.log(humanScore, computerScore)

}

playGame();