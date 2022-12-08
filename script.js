const ChoicesList = ["rock", "papper", "scissors"];
const buttons = document.querySelectorAll ('button');
const outputBox = document.querySelector ('.outputBox');
const scorePlayer = document.getElementById ("scorePlayer");
const scorePc = document.getElementById ("scorePc");
const roundElement = document.getElementById ("round");

let cmpWin = 0;
let plyrWin =0;
let roundsLeft = 5;

buttons.forEach((button) => { 
  button.addEventListener ('click',addEvent(button))

  });

   
function addEvent(button) {
  return () => {
    playerChoice = button.id; //asigns the button id to the players choice
    let computerChoice = getComputerChoice();
    outputBox.textContent = checkWinner(playerChoice, computerChoice); //runs logic and return game msg
    outputBox.classList.add('outputText'); //adds the class whose css has background white
    console.log(plyrWin + " vs " + cmpWin);
    scorePc.innerHTML = `Computer: ${cmpWin}`;
    scorePlayer.innerHTML = `Player: ${plyrWin}`;
    roundElement.innerHTML = `Number of rounds left:${roundsLeft}`;
    if (roundsLeft <= 0) {
      disableButtons();
    }
  };
}

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
    cmpWin ++;  // adds a point to computer
  }else if (player == computer){
    gameMsg = `It's a Draw! We both picked ${player}!`
  }else {
    gameMsg = `You win, congratulations! You picked ${player} and I played ${computer}!`
    plyrWin ++; // adds a point to player
  }
  roundsLeft --
  return gameMsg
}

function disableButtons(){
  buttons.forEach ((button) => {
    button.removeEventListener('click',addEvent);
  })
}
