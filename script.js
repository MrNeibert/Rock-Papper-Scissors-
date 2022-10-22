const ChoicesList = ["rock", "papper", "scissors"];



function getComputerChoice() {
  ComputerChoice = ChoicesList[Math.floor(Math.random()*ChoicesList.length)];
  console.log(ComputerChoice);
  return ComputerChoice;
}

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
  ChoicePlayer = ChoicesList[ChoicePlayer]
}

function CheckWinner() {
  if (ChoicePlayer === "rock" && ComputerChoice === "papper"){
    alert(`You lose! You picked ${ChoicePlayer} and I played ${ComputerChoice}!`)
  }else if (ChoicePlayer === "papper" && ComputerChoice === "scissors"){
    alert(`You lose! You picked ${ChoicePlayer} and I played ${ComputerChoice}!`)
  }else if (ChoicePlayer === "scissors" && ComputerChoice === "rock"){
    alert(`You lose! You picked ${ChoicePlayer} and I played ${ComputerChoice}!`)
  }else if (ChoicePlayer === ComputerChoice){
    alert(`It's a Draw! We both picked ${ComputerChoice}!`)
  }else {
    alert(`You win, congratulations! \nYou picked ${ChoicePlayer} and I played ${ComputerChoice}!`)
  }
}





getPlayerChoice();
getComputerChoice();
CheckWinner();