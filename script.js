const ChoicesList = ["rock", "papper", "scissors"];
const buttons = document.querySelectorAll ('button');

buttons.forEach((button) => {
  button.addEventListener ('click',() => {
    playerChoice = button.id;
    let computerChoice = getComputerChoice();
    checkWinner(playerChoice,computerChoice);
  })
});



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