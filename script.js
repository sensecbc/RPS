const choices = ["rock", "paper", "scissors"];
let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");
let computerScoreboard = document.querySelector("#computerScoreboard");
let playerScoreboard = document.querySelector("#playerScoreboard");
let numberTies = document.querySelector("#ties");
let announcer = document.querySelector("#announcer");
let computerScore = 0;
let playerScore = 0;
let ties = 0;
let buttons = document.querySelector(".buttons");
let scores = document.querySelector(".scores");
announcer.textContent = "press rock, paper or scissors!";
const resetButton = document.createElement("button");
resetButton.className = "jsButton";

btnRock.addEventListener("click", playRock);
function playRock() {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerSelection);
  if (computerSelection === "rock") {
    ties++;
    announcer.textContent = "Computer drew rock as well, you've tied!";
  } else if (computerSelection === "paper") {
    computerScore++;
    announcer.textContent = "Computer drew paper, you've lost!";
  } else if (computerSelection === "scissors") {
    playerScore++;
    announcer.textContent = "Computer drew scissors, you've won!";
  }
  computerScoreboard.textContent = computerScore;
  playerScoreboard.textContent = playerScore;
  numberTies.textContent = ties;

  if (playerScore > 4 || computerScore > 4) {
    endgame();
  }
}

btnPaper.addEventListener("click", playPaper);
function playPaper() {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerSelection);
  if (computerSelection === "rock") {
    announcer.textContent = "Computer drew rock, you've won!";
    playerScore++;
  } else if (computerSelection === "paper") {
    ties++;
    announcer.textContent = "Computer drew paper, you've tied!";
  } else if (computerSelection === "scissors") {
    computerScore++;
    announcer.textContent = "Computer drew scissors, you've lost!";
  }
  computerScoreboard.textContent = computerScore;
  playerScoreboard.textContent = playerScore;
  numberTies.textContent = ties;

  if (playerScore > 4 || computerScore > 4) {
    endgame();
  }
}

btnScissors.addEventListener("click", playScissors);
function playScissors() {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerSelection);
  if (computerSelection === "rock") {
    announcer.textContent = "Computer drew rock, you've lost!";
    computerScore++;
  } else if (computerSelection === "paper") {
    announcer.textContent = "Computer drew rock, you've won";
    playerScore++;
  } else if (computerSelection === "scissors") {
    announcer.textContent = "Computer drew rock, you've tied";
    ties++;
  }
  computerScoreboard.textContent = computerScore;
  playerScoreboard.textContent = playerScore;
  numberTies.textContent = ties;

  if (playerScore > 4 || computerScore > 4) {
    endgame();
  }
}

function endgame() {
  buttons.style.display = "none";
  announcer.style.display = "none";
  scores.style.display = "none";

  if (playerScore > 4) {
    resetButton.textContent = "YOU WIN. PLAY AGAIN?";
  } else if (computerScore > 4) {
    resetButton.textContent = "TRY AGAIN?";
  }

  // Show reset button again
  document.querySelector(".container").appendChild(resetButton);
  resetButton.style.display = "block";
}

resetButton.addEventListener("click", reset);
function reset() {
  console.log("boas");
  computerScore = 0;
  playerScore = 0;
  ties = 0;
  playerScoreboard.textContent = "0";
  computerScoreboard.textContent = "0";
  numberTies.textContent = "0";
  resetButton.style.display = "none";
  buttons.style.display = "flex";
  announcer.style.display = "block";
  scores.style.display = "flex";
}
