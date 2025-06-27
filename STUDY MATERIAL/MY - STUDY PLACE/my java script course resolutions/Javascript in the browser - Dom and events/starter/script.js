'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number !!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

//define a number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable;
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

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!';

    //when player wins/
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number !!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '35rem';
    //when guess is lower
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'to low !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `you lost the correct number was ${secretNumber}`;
      document.querySelector('.score').textContent = 0;
    }
    //when guess is higher
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'to high !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `you lost the correct number was ${secretNumber}`;
      document.querySelector('.score').textContent = 0;
    }
  }
});
