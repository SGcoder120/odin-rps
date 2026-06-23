function getComputerChoice() {
    var computerChoice = Math.random() * 3;
    if (0 <= computerChoice && computerChoice <= 1) {
        computerChoice = "rock";
    } else if (1 <= computerChoice && computerChoice <= 2) {
        computerChoice = "paper";
    } else if (2 <= computerChoice && computerChoice <= 3) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    var humanChoice = prompt("Enter a choice");
    const valid = ["rock", "scissors", "paper"];
    while (!valid.includes(humanChoice)) {
        humanChoice = prompt("Enter a choice");
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === computerChoice) {
        alert("It's a tie!");
        return 0;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock"
    ) {
        alert("Human wins!");
        return 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "rock" && computerChoice === "paper"
    ) {
        alert("Computer wins!");
        return -1;
    }
}

var humanScore = 0;
var computerScore = 0;

for (var i = 1; i <= 5; i++) {
    var humanSelection = getHumanChoice();
    var computerSelection = getComputerChoice();
    alert(humanSelection + " vs " + computerSelection);
    var result = playRound(humanSelection, computerSelection);
    if (result === 1) {
        humanScore += 1;
    } else if (result === -1) {
        computerScore += 1;
    }
}

if (humanScore > computerScore) {
    alert("Human wins!");
} else if (humanScore === computerScore) {
    alert("The set ends in a tie!");
} else if (humanScore < computerScore) {
    alert("Computer wins!");
}

alert("Human: " + humanScore + " | Computer: " + computerScore);
