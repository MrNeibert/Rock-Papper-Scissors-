const ChoicesList = ["rock", "papper", "scissors"];
const buttons = document.querySelectorAll ('button');
const outputBox = document.querySelector ('.outputBox');

let round = 0;
let cmpWin = 0;
let plyrWin =0;


buttons.forEach((button) => {          //buttons acts similarly as an array, but of nodes.
  button.addEventListener ('click',() => {   //for each item (button) in buttons, linsten for clicks, and do:
    playerChoice = button.id;    //asigns the button id to the players choice
    let computerChoice = getComputerChoice();
    let text = checkWinner(playerChoice,computerChoice);
    outputBox.textContent = text;
    outputBox.classList.add('outputText'); //addsthe class whose css has background white
  })
});



function getComputerChoice() {
  randomPick = ChoicesList[Math.floor(Math.random()*ChoicesList.length)]; // randommly chose a value between 0 and 1
  return randomPick;   // multiply by 3 and round down. value is either 0, 1 or 2. Use as index to pick an option for computer
}

function checkWinner(player, computer) {
  let gameMsg = "";
  if (player == "rock" && computer == "papper" ||
      player == "papper" && computer == "scissors" ||
      player == "scissors" && computer == "rock"){
    gameMsg = `You lose! You picked ${player} and I played ${computer}!`
  }else if (player == computer){
    gameMsg = `It's a Draw! We both picked ${player}!`
  }else {
    gameMsg = `You win, congratulations! You picked ${player} and I played ${computer}!`
  }
  return gameMsg
}