console.log("Welcome to Rock-Paper-Scissors console edition!");

//START OF GLOBAL SCOPE
let humanScore = 0;
let computerScore = 0;
//END OF GLOBAL SCOPE

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3 + 1);
  return number === 1 ? "rock" : number === 2 ? "paper" : "scissors";
}

//NEED TO: Implement capitalization cases (ex. Rock vs rock)
function getHumanChoice() {
  let choice = prompt("Please pick: Rock, Paper or Scissors");
  if (choice === "Rock" || choice === "Paper" || choice === "Scissors")
    console.log("You picked: " + choice);
  else console.log("Invalid choice!: " + choice);
}
