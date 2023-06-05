function getComputerChoice() {

  const choices = ["Rock", "Paper" , "Scissors"];
  const randomIndex = Math.floor(Math.random()* choices.length);
  return choices[randomIndex];
  
}

function playRound(playerSelection, computerSelection) {

  // Convert playerSelection to lowercase for case-insensitive comparison
  playerSelection = playerSelection.toLowerCase();

  // Determine the winner of the round
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// Testing the playRound function
const playerSelection = 'rock';
const computerSelection = getComputerChoice(); 
console.log(playRound(playerSelection, computerSelection));
