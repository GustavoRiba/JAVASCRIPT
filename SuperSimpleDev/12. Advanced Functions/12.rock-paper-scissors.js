let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}; 
// we use JSON.parse() for transform score from string back to object.

/* we used the '||' to create a codition. left side is trufy and right side is falsy
if (!score) { // '!score' = null = falsy
score = {
  wins: 0,
  losses: 0,
  ties: 0
}; // because we used the removeItem, we need to recreate the 'score'
}*/

updateScoreElement();

let isAutoPlaying = false; 
let intervalId;

function autoPlay() {
  if(!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  })

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  })

  document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
      playGame('rock')
    } else if (event.key === 'p') {
      playGame('paper')
    } else if (event.key === 's') {
      playGame('scissors')
    }
  });

function playGame(playerMove) {
const computerMove = pickComputerMove();

result = '';

if (playerMove === 'Scissors') {
  if (computerMove === 'Rock') {
    result = 'You Lose :('
  } else if (computerMove === 'Paper') {
      result = 'You Win :)'
  } else if (computerMove === 'Scissors') {
    result = 'Tie!'
  }

} else if (playerMove === 'Paper') {
  if (computerMove === 'Rock') {
      result = 'You Win :)'
  } else if (computerMove === 'Paper') {
      result = 'Tie!'
  } else if (computerMove === 'Scissors') {
      result = 'You Lose :('
  }

} else if ('Rock') {
  if (computerMove === 'Rock') {
    result = 'Tie!'
  } else if (computerMove === 'Paper') {
    result = 'You Lose :('
  } else if (computerMove === 'Scissors'){
    result = 'You Win :)'
  }
}

if (result === 'You Win :)') {
  score.wins += 1;
} else if (result === 'You Lose :(') {
  score.losses += 1;
} else if (result === 'Tie!') {
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score)); // localStorage only supports strings, so we use JSON para transformar score em uma string e poder utiliza-lo. 

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You 
<img src="Images/${playerMove}-emoji.png" class="move-icon">
<img src="Images/${computerMove}-emoji.png"  class="move-icon">
Computer`;
}

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}

function pickComputerMove() {
let randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'Rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove = 'Paper';
} else {
  computerMove = 'Scissors';
}

return computerMove;

}