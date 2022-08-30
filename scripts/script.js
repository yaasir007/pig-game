'use strict';

//Selecting scores elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');

//Selecting buttons
const newGame = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

//Selecting current scores elements
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

//Selecting players
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');



//Initialise the app
score0El.textContent = 0;
score1El.textContent = 0;
diceImg.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];

rollBtn.addEventListener('click', function() {

  //Generating random number for dice
  const dice = Math.trunc(Math.random() * 6 + 1);

  //display the dice img
  diceImg.classList.remove('hidden');
  diceImg.src = `../images/dice-${dice}.png`;

  if (dice !== 1) {
    //Add dice number to current score
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;


  } else {
    //Switch to Player 2
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
    // ternary operator if active is 0 then switch to 1 else stay 0
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

  }

})



newGame.addEventListener('click', function () {
  window.location.reload();
})
