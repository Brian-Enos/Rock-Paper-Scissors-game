function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.trim().toLowerCase();

  if (playerSelection === computerSelection) {
    return 'tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt(
      'Round ' + round + ': Enter your choice (Rock, Paper, or Scissors):'
    );

    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);

    if (result === 'player') {
      playerScore++;
      console.log(
        `You win! ${playerSelection} beats ${computerSelection}.`
      );
    } else if (result === 'computer') {
      computerScore++;
      console.log(
        `You lose! ${computerSelection} beats ${playerSelection}.`
      );
    } else {
      console.log(`Round ${round} is a tie!`);
    }
  }

  if (playerScore > computerScore) {
    console.log('Congratulations! You win the game!');
  } else if (playerScore < computerScore) {
    console.log('Sorry, you lose the game.');
  } else {
    console.log('The game ends in a tie!');
  }

  console.log(`Final Score: Player - ${playerScore}, Computer - ${computerScore}`);
}

// Start the game
game();
