console.log("Welcome to Rock-Paper-Scissors console edition!");

//START GLOBALS
let humanScore = 0;
let computerScore = 0;
let roundNumber = 3; //To do: Implement logic for the user to set (First to # or Best out of #)
//END GLOBALS

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3 + 1);
  return number === 1 ? "rock" : number === 2 ? "paper" : "scissors";
}

//Play a round of rock-paper-scissors when a button is clicked
const buttonList = document.querySelectorAll("button");
const scoreList = document.querySelector("#score");


function initializeButtons(){
  buttonList.forEach(button => {
    button.disabled=false;
    button.addEventListener("click", playRound);
    });
}

function doesHumanWinRound(humanChoice, computerChoice) {
  console.log("Computer chose: " + computerChoice);
  if (humanChoice.toLowerCase() === "rock") return (computerChoice === "scissors") ? true : false;
  else if (humanChoice.toLowerCase() === "paper") return (computerChoice === "rock") ? true : false;
  else return (computerChoice === "paper") ? true : false;
}

function playRound() {
  const humanChoice=this.textContent;
  const computerChoice=getComputerChoice();
  if (humanChoice.toLowerCase() !== computerChoice.toLowerCase()) {
    (doesHumanWinRound(humanChoice, computerChoice)) ? humanScore++ : computerScore++;
  }
  updateScoreBoard();
  checkForGameOver();
}

function updateScoreBoard(){
  scoreList.textContent=`Human Score: ${humanScore} | Computer Score: ${computerScore}`;
}

//I smell refactoring here
function checkForGameOver(){
  if(humanScore===roundNumber){
    scoreList.textContent="You WIN! :)"
    disableButtons();
    addRestartButton();
  }
  else if(computerScore===roundNumber){
    scoreList.textContent="You LOSE! :(";
    disableButtons();
    addRestartButton();
  }
}

function disableButtons(){
  buttonList.forEach(button => {
    button.disabled=true;
  })
}

function addRestartButton(){
  const restartButton=document.createElement('button');
  restartButton.setAttribute('id',"restartButton");
  restartButton.textContent="Restart";
  scoreList.insertAdjacentElement("afterend",restartButton);
  restartButton.addEventListener("click",startGame);
}

function removeRestartButton() {
  if (document.getElementById('restartButton')) document.getElementById('restartButton').remove();
}

function startGame(){
  removeRestartButton();
  humanScore=computerScore=0;
  initializeButtons();
  updateScoreBoard();
}
startGame();

