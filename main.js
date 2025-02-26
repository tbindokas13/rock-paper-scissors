console.log("Welcome to Rock-Paper-Scissors console edition!");

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3 + 1);
  return number === 1 ? "rock" : number === 2 ? "paper" : "scissors";
}

function getHumanChoice() {
  let choice = prompt("Please pick: Rock, Paper or Scissors");
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      !(
        humanChoice.toLowerCase() === "rock" ||
        humanChoice.toLowerCase() === "paper" ||
        humanChoice.toLowerCase() === "scissors"
      )
    )
      return true;
    else {
      console.log("Computer chose: " + computerChoice);
      switch (humanChoice.toLowerCase()) {
        case "rock":
          if (computerChoice === "rock") console.log("It's a tie!");
          else if (computerChoice === "paper") {
            console.log("You lost this round! :(");
            computerScore++;
          } else {
            console.log("You won this round! :)");
            humanScore++;
          }
          break;
        case "paper":
          if (computerChoice === "rock") {
            console.log("You won this round! :)");
            humanScore++;
          } else if (computerChoice === "paper") {
            console.log("It's a tie!");
          } else {
            console.log("You lost this round! :(");
            computerScore++;
          }
          break;
        case "scissors":
          if (computerChoice === "rock") {
            console.log("You lost this round! :(");
            computerScore++;
          } else if (computerChoice === "paper") {
            console.log("You won this round! :)");
            humanScore++;
          } else {
            console.log("It's a tie!");
          }
      }
    }
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    return false;
  }

  while (humanScore < 2 && computerScore < 2) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if(playRound(humanSelection, computerSelection)){
        console.log("Invalid choice! You typed: " + humanSelection);
    }
  }

  if (humanScore === 5)
    console.log(
      "You Win! Your Score: " + humanScore + "Computer Score: " + computerScore
    );
  else
    console.log(
      "You Lose :( Your Score: " +
        humanScore +
        " and Computer Score: " +
        computerScore
    );
}

playGame();
