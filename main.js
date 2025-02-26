console.log("Welcome to Rock-Paper-Scissors console edition!");

//START OF GLOBAL SCOPE
let humanScore = 0;
let computerScore = 0;
//END OF GLOBAL SCOPE

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3 + 1);
  return number === 1 ? "rock" : number === 2 ? "paper" : "scissors";
}

function getHumanChoice() {
  let choice = prompt("Please pick: Rock, Paper or Scissors");
  return choice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if (
    !(
      humanChoice.toLowerCase() === "rock" ||
      humanChoice.toLowerCase() === "paper" ||
      humanChoice.toLowerCase() === "scissors"
    )
  )
    return console.log("Invalid choice!: " + humanChoice);
  else {
    console.log("Computer chose: " + computerChoice);
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "rock") console.log("It's a tie!");
        else if (computerChoice === "paper") {
          console.log("You lost! :(");
          computerScore++;
        } else {
          console.log("You won! :)");
          humanScore++;
        }
        break;
      case "paper":
        if (computerChoice === "rock") {
          console.log("You won! :)");
          humanScore++;
        } else if (computerChoice === "paper") {
          console.log("It's a tie!");
        } else {
          console.log("You lost! :(");
          computerScore++;
        }
        break;
      case "scissors":
        if (computerChoice === "rock") {
          console.log("You lost! :(");
          computerScore++;
        } else if (computerChoice === "paper") {
          console.log("You won! :)");
          humanScore++;
        } else {
          console.log("It's a tie!");
        }
    }
  }
  console.log("Your Score: " + humanScore);
  console.log("Computer Score: " + computerScore);
}

playRound(humanSelection, computerSelection);
