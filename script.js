function getComputerChoice() {
        let number = Math.floor(Math.random() * 3) + 1;
        console.log(number)
        if (number === 1) {
            return "rock";
        } else if (number === 2) {
            return "paper";
        } else {
            return "scissors"
        }
}