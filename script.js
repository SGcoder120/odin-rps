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
        return 0;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock"
    ) {
        return 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "rock" && computerChoice === "paper"
    ) {
        return -1;
    }
}

var humanScore = 0;
var computerScore = 0;

var rock_btn = document.querySelector(".rock-button");
var paper_btn = document.querySelector(".paper-button");
var scissors_btn = document.querySelector(".scissors-button");
var battle_log = document.querySelector(".battle-log");

rock_btn.addEventListener("click", (e) => {
    var result = playRound("rock", getComputerChoice());
    if (result === 1) {
        var p_elem = document.createElement("p");
        p_elem.textContent = "Human Wins! Rock beats scissors!";
        humanScore += 1;
    } else if (result === -1) {
        var p_elem = document.createElement("p");
        p_elem.textContent = "Computer Wins! Paper beats rock!";
        computerScore += 1;
    } else if (result === 0) {
        var p_elem = document.createElement("p");
        p_elem.textContent = "It's a tie! Rock is rock!";
    }
    p_elem.textContent += ` Human Score: ${humanScore} | Computer Score ${computerScore}`;
    battle_log.appendChild(p_elem);

    if (humanScore === 5) {
        var p_result = document.createElement("p");
        p_result.textContent = "Human wins the set!";
        battle_log.appendChild(p_result);
        document.querySelector(".rock-button").disabled = true;
        document.querySelector(".paper-button").disabled = true;
        document.querySelector(".scissors-button").disabled = true;
    } else if (computerScore === 5) {
        var p_result = document.createElement("p");
        p_result.textContent = "Computer wins the set!";
        battle_log.appendChild(p_result);
        document.querySelector(".rock-button").disabled = true;
        document.querySelector(".paper-button").disabled = true;
        document.querySelector(".scissors-button").disabled = true;
    }
});
paper_btn.addEventListener("click", (e) => {
    var result = playRound("paper", getComputerChoice());
    if (result === 1) {
        var p_elem = document.createElement("p");
        p_elem.textContent = "Human Wins! Paper beats rock!";
        humanScore += 1;
    } else if (result === -1) {
        var p_elem = document.createElement("p");
        p_elem.textContent = "Computer Wins! Scissors beats paper!";
        computerScore += 1;
    } else if (result === 0) {
        var p_elem = document.createElement("p");
        p_elem.textContent = "It's a tie! Paper is paper!";
    }
    p_elem.textContent += ` Human Score: ${humanScore} | Computer Score ${computerScore}`;
    battle_log.appendChild(p_elem);

    if (humanScore === 5) {
        var p_result = document.createElement("p");
        p_result.textContent = "Human wins the set!";
        battle_log.appendChild(p_result);
        document.querySelector(".rock-button").disabled = true;
        document.querySelector(".paper-button").disabled = true;
        document.querySelector(".scissors-button").disabled = true;
    } else if (computerScore === 5) {
        var p_result = document.createElement("p");
        p_result.textContent = "Computer wins the set!";
        battle_log.appendChild(p_result);
        document.querySelector(".rock-button").disabled = true;
        document.querySelector(".paper-button").disabled = true;
        document.querySelector(".scissors-button").disabled = true;
    }
});
scissors_btn.addEventListener("click", (e) => {
    var result = playRound("scissors", getComputerChoice());
    if (result === 1) {
        var p_elem = document.createElement("p");
        p_elem.textContent = "Human Wins! Scissors beats paper!";
        humanScore += 1;
    } else if (result === -1) {
        var p_elem = document.createElement("p");
        p_elem.textContent = "Computer Wins! Rock beats scissors!";
        computerScore += 1;
    } else if (result === 0) {
        var p_elem = document.createElement("p");
        p_elem.textContent = "It's a tie! Scissors is scissors!";
    }
    p_elem.textContent += ` Human Score: ${humanScore} | Computer Score ${computerScore}`;
    battle_log.appendChild(p_elem);

    if (humanScore === 5) {
        var p_result = document.createElement("p");
        p_result.textContent = "Human wins the set!";
        battle_log.appendChild(p_result);
        document.querySelector(".rock-button").disabled = true;
        document.querySelector(".paper-button").disabled = true;
        document.querySelector(".scissors-button").disabled = true;
    } else if (computerScore === 5) {
        var p_result = document.createElement("p");
        p_result.textContent = "Computer wins the set!";
        battle_log.appendChild(p_result);
        document.querySelector(".rock-button").disabled = true;
        document.querySelector(".paper-button").disabled = true;
        document.querySelector(".scissors-button").disabled = true;
    }
});

