const ChoicesList = ["rock", "papper", "scissors"];

function getPlayerChoice ()
{
  do {
    ChoicePlayer = prompt("What do you want to play? Rock, Papper or Scissors?");
    ChoicePlayer = ChoicesList.indexOf(ChoicePlayer.toLowerCase());
    console.log(ChoicePlayer);
    if (ChoicePlayer === -1) {
      alert("Please pick a valid option!")  }
  }
  while (ChoicePlayer === -1);
  return ChoicesList[ChoicePlayer]
}

function getComputerChoice() {
  randomPick = ChoicesList[Math.floor(Math.random()*ChoicesList.length)];
  console.log(randomPick);
  return randomPick;
}

function checkWinner(player, computer) {
  if (player === "rock" && computer === "papper"){
    alert(`You lose! You picked ${player} and I played ${computer}!`)
  }else if (player === "papper" && computer === "scissors"){
    alert(`You lose! You picked ${player} and I played ${computer}!`)
  }else if (player === "scissors" && computer === "rock"){
    alert(`You lose! You picked ${player} and I played ${computer}!`)
  }else if (player === computer){
    alert(`It's a Draw! We both picked ${player}!`)
  }else {
    alert(`You win, congratulations! \nYou picked ${player} and I played ${computer}!`)
  }
}





let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
checkWinner(playerChoice,computerChoice);