const choices = ['rock', 'paper', 'scissors']

function ComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);

  const item = choices[randomIndex];

  return item;
}

const result = ComputerChoice(choices);
console.log(result);

let playerChoice = prompt('Please write rock, paper, or scissors.')

console.log(playerChoice);
 
function playRound(playerChoice, result) {
  if (playerChoice === null) {
    return 'Maybe next time.'
  }
  if (playerChoice === result) {
    return 'This is a tie';
  }
  if (playerChoice === 'rock' && result === 'scissors') {
    return 'You win!';
  }
  if (playerChoice === 'paper' && result === 'rock') {
    return 'You win!';
  }
  if (playerChoice === 'scissors' && result === 'paper') {
    return 'You win!';
  }
  if (playerChoice === 'rock' && result === 'paper') {
    return 'The computer wins!';
  }
  if (playerChoice === 'paper' && result === 'scissors') {
    return 'The computer wins!';
  }
  if (playerChoice === 'scissors' && result === 'rock') {
    return 'The computer wins!';
  }
};

const winner = playRound(playerChoice, result);

function game() {
  for (let i = 0; i <= 5; i++) {
    let playerChoice = prompt('Please write rock, paper, or scissors.')
    playRound();
  }
  logWins();
}

function logWins(winner) {
  let playerScore = 0;
  let computerScore = 0;

  if (winner === playerChoice) {
    ++playerScore;
  }
  if (winner === result) {
    ++computerScore;
  }
};

console.log(logWins);

game(playRound);

console.log(winner);