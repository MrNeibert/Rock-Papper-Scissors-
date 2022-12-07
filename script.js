const ChoicesList = ["rock", "papper", "scissors"];
const buttons = document.querySelectorAll ('button');
const outputBox = document.querySelector ('.outputBox');

let round = 0;
let cmpWin = 0;
let plyrWin =0;


buttons.forEach((button) => {
  button.addEventListener ('click',() => {
    playerChoice = button.id;
    let computerChoice = getComputerChoice();
    console.log(playerChoice + " vs " + computerChoice);
    let text = checkWinner(playerChoice,computerChoice);
    outputBox.textContent = text;
    outputBox.classList.add('outputText');
  })
});



function getComputerChoice() {
  randomPick = ChoicesList[Math.floor(Math.random()*ChoicesList.length)];
  return randomPick;
}

function checkWinner(player, computer) {
  let gameMsg = "";
  if (player === "rock" && computer === "papper"){
    gameMsg = `You lose! You picked ${player} and I played ${computer}!`
  }else if (player === "papper" && computer === "scissors"){
    gameMsg = `You lose! You picked ${player} and I played ${computer}!`
  }else if (player === "scissors" && computer === "rock"){
    gameMsg =`You lose! You picked ${player} and I played ${computer}!`
  }else if (player === computer){
    gameMsg = `It's a Draw! We both picked ${player}!`
  }else {
    gameMsg = `You win, congratulations! \nYou picked ${player} and I played ${computer}!`
  }
  return gameMsg
}