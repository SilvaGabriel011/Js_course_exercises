'use strict';
//selecting elements
// use hash because we are selecting using an id

const switchingPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// const playDice = function () {
//   let dice = Math.trunc(Math.random() * 6) + 1;
//   diceEl.classList.remove('hidden');
//   diceEl.src = `dice-${dice}.png`;
// };

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0Element.textContent = 0;
score1Element.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
// rolling dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      // ad dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      switchingPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
  }
  //2. check if score is >= 100 ? win game : switch player});

  if (scores[activePlayer] >= 30) {
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add(`player--winner`);
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove(`player--active`);
  } else {
    //3. switch player
    switchingPlayer();
  }
});
btnNew.addEventListener('click', function () {
  // Zerar scores
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Atualizar interface
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceEl.classList.add('hidden');

  // Remover classe de vencedor
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');

  // Resetar classes de ativo
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
});
