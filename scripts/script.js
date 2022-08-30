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

let playing = true;
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];

rollBtn.addEventListener('click', function() {
  if (playing) {
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
      document.querySelector(`#current--${activePlayer}`).textContent = 0;

      //reset the current score
      currentScore = 0;

      //remove overlay when player switch
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

      // ternary operator if active is 0 then switch to 1 else stay 0
      activePlayer = activePlayer === 0 ? 1 : 0;

      //add overlay when player switch
      document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    }
  }
})


holdBtn.addEventListener('click', function() {
  if (playing) {

    //get current score for current player
    //Add current score to total score
    scores[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    //Check if current player > 100 ? wins : switch player
    if (scores[activePlayer] > 10) {

      playing = false;
      //display the final score for the winner
      document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

      //remove the active class
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

      //add winner class on player
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

      //hide the dice
      diceImg.classList.add('hidden');

    } else {
      document.querySelector(`#current--${activePlayer}`).textContent = 0;

      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
})


newGame.addEventListener('click', function () {
  window.location.reload();
})
