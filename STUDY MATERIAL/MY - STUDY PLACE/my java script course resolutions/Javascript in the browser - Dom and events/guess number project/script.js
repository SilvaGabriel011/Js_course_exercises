'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number !!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

//define a number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable;
let highScore = 0;

//functions area
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const lostDiplayBody = function () {
  document.querySelector('body').style.backgroundColor = 'rgb(244, 36, 13)';
  document.querySelector('.number').style.width = '35rem';
  document.querySelector('.score').textContent = 0;
};
const winsDisplaybody = function (secretNumber) {
  document.querySelector('.message').textContent = 'Correct number !!';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '35rem';
  document.querySelector('.number').textContent = secretNumber;
};
const resetGame = function (score, highScore) {
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector(
    '.label-highscore'
  ).textContent = `🥇 Highscore: ${highScore}`;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
};
// const selecElementUpdateScore = function(score)
// const compareNumber = function (guess) {
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number!!';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct number !!';
//   } else if (guess < secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'to high !!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = `you lost the correct number was ${secretNumber}`
//     }
//   } else if (guess > secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'to  !!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = `you lost the correct number was ${secretNumber}`
//     }
// };

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  //when there is no input
  if (!guess) {
    displayMessage('No Number!!');

    //when player wins/
  } else if (guess === secretNumber) {
    winsDisplaybody(secretNumber);
    if (score > highScore) {
      highScore = score;
    }
  }
  //when guess is lower
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high' : 'too low');
      score--;
      displayScore(score);
    } else {
      displayMessage(`you lost the correct number was ${secretNumber}`);
      // document.querySelector('.message').textContent = 'wrong!!';
      lostDiplayBody();
    }
  }
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'to low !!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector(
  //       '.message'
  //     ).textContent = `you lost the correct number was ${secretNumber}`;
  //     // document.querySelector('.message').textContent = 'wrong!!';
  //     document.querySelector('body').style.backgroundColor = 'rgb(244, 36, 13)';
  //     document.querySelector('.number').style.width = '35rem';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //when guess is higher
  // } else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'to high !!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector(
  //       '.message'
  //     ).textContent = `you lost the correct number was ${secretNumber}`;
  //     // document.querySelector('.message').textContent = 'wrong!!';
  //     document.querySelector('body').style.backgroundColor = 'rgb(244, 36, 13)';
  //     document.querySelector('.number').style.width = '35rem';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame(score, highScore);
});
