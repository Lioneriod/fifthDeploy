/*
The problem: Creating a code that will make the computer choose a hand from 
rock, paper and scissors to battle against the player, and thus defining a 
winner, with points and wins counting

The plan: For now, the user needs to input the hand through console command,
using only console for visual representations and values.

The Pseudocode:
1. Computer launches a random value between 0 and 1, representing each hand
2. User inputs value
2. Code compares user input value with computer randomly selected value
3. Console logs their values/hands and the winner
*/

function getComputerChoice(computerChoice) {
  computerChoice = Math.floor(Math.random() * 3);
  while (computerChoice < 3) {
    if (computerChoice === 0) {
      document.querySelector(".announcerHand").innerHTML = "rock";
      return "rock";
    } else if (computerChoice === 1) {
      document.querySelector(".announcerHand").innerHTML = "paper";
      return "paper";
    } else {
      document.querySelector(".announcerHand").innerHTML = "scissors";
      return "scissors";
    }
  }
}

// For debugging
let computerHand = getComputerChoice();
console.log("Computer chose " + computerHand + "!");

// Main function for each round
function playRound(playerSelection, computerSelection) {
  const winner =
    "You win! " +
    playerSelection +
    " " +
    "beats" +
    " " +
    computerSelection +
    "!";

  const loser =
    "You lose! " +
    computerSelection +
    " " +
    "beats" +
    " " +
    playerSelection +
    "!";
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return loser;
    } else {
      return winner;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return loser;
    } else {
      return winner;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return loser;
    } else {
      return winner;
    }
  } else {
    return "ERROR!";
  }
}

// To display and count their scores
let computerScore = 0;
let playerScore = 0;

document.querySelector(".computerScore").innerHTML = computerScore;
document.querySelector(".playerScore").innerHTML = playerScore;
document.querySelector(".announcerHand").innerHTML = " ";

// A complicated function to check for wins and losses
// and also stop after scoring 3 points
function scoreChecker() {
  let round = playRound(playerChoice, getComputerChoice());
  while (playerScore < 4 && computerScore < 4) {
    if (round[4] === "w") {
      return (document.querySelector(".playerScore").innerHTML = ++playerScore);
    } else if (round[4] === "l") {
      return (document.querySelector(".computerScore").innerHTML =
        ++computerScore);
    } else if (round[3] === "!") {
      return;
    } else {
      console.log("ERROR");
    }
  }
}

// Code to create the winning/losing message
function winLose() {
  if (playerScore === 3) {
    document.querySelector(".result").innerHTML =
      "Congrats, you kept your soul!";
  } else if (computerScore === 3) {
    document.querySelector(".result").innerHTML = "Yep, you ded";
  } else {
    document.querySelector(".result").innerHTML = " ";
  }
}

// Function to reset the game
function resetGame() {
  if (playerScore > 2 || computerScore > 2) {
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".playerScore").innerHTML = playerScore;
    document.querySelector(".computerScore").innerHTML = computerScore;
  } else {
    return;
  }
}

// To make the code extra clean
function gameFunctions() {
  scoreChecker();
  winLose();
  resetGame();
}
// To setup the initial value of each button
let playerChoice = "";

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  playerChoice = "rock";
  let round = playRound(playerChoice, getComputerChoice());
  // Call the function that groups functions
  scoreChecker();
  winLose();
  resetGame();
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  playerChoice = "paper";
  let round = playRound(playerChoice, getComputerChoice());
  // Call the function that groups functions
  scoreChecker();
  winLose();
  resetGame();
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  let round = playRound(playerChoice, getComputerChoice());
  // Call the function that groups functions
  scoreChecker();
  winLose();
  resetGame();
});
