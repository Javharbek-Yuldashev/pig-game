'use strict';

// players
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const playerActive =document.querySelector('.player--active')

// scores
const scoreOne = document.querySelector('#score--0');
const scoreTwo = document.querySelector('#score--1');
const currentOne = document.querySelector('#current--0');
const currentTwo = document.querySelector('#current--1');

// buttons
const newgame = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

// Dice image
const dice = document.querySelector('.dice');

// Additional varaibles
let sum = 0;
let sumPlayerOne = 0;
let sumPlayerTwo = 0;
let active = 1; 

/* Functions */

function play() {
    const random = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${random}.png`;
    if (random !== 1){
        sum += random;
    } else {
        sum = 0;
        currentPlayer(sum);
        activePlayer();
        switchPlayer();
    }
    currentPlayer(sum);
}

function currentPlayer(sum) {
    if(active) {
        currentOne.textContent = sum;
    } else {
        currentTwo.textContent = sum;
    }
}

function scorePlayer(sum) {
    if(active) {
        sumPlayerOne += sum;
        scoreOne.textContent = sumPlayerOne;
    } else {
        sumPlayerTwo += sum;
        scoreTwo.textContent = sumPlayerTwo;
    }
}

function switchPlayer() {
    playerOne.classList.toggle('player--active');
    playerTwo.classList.toggle('player--active');
}

function activePlayer() {
    if (active) {
        active = 0;
    } else {
        active = 1;
    };
}

function newGame() {
    sum = 0;
    sumPlayerOne = 0;
    sumPlayerTwo = 0;
    active = 1;

    scoreOne.textContent = sumPlayerOne;
    scoreTwo.textContent = sumPlayerTwo;
    currentOne.textContent = sum;
    currentTwo.textContent = sum;
    
    if(playerTwo.classList.contains('player--active')){
        switchPlayer();
    }
}


/* Click */

roll.addEventListener('click', play);

hold.addEventListener('click', function(){
    scorePlayer(sum);
    sum = 0;
    currentPlayer(sum);
    activePlayer();
    switchPlayer();
});

newgame.addEventListener('click', newGame)


