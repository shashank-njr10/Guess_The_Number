let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
  // Game won by correct guess
  else if (guess === secret_number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret_number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // Guess is too high
  else if (guess > secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // Guess is too low
  else if (guess < secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//resetting the game using again button .
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1; // Reassign the secret number
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '??';
  document.querySelector('.guess').value = ''; // Clear the input field
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222'; // Reset the background color
});
