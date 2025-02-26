console.log("Hello World!");

function getComputerChoice(){
    let number=Math.floor(Math.random()*3+1);
    return number===1? "rock" : 
            number===2 ? "paper": "scissors"; 
}

