'use strict' // restricts the use of undeclared variables

// divs and buttons from html 
const gameLetter = document.querySelector('.letters');
const hintButton = document.querySelector('.hint-btn');
const resetButton = document.querySelector('.reset-btn');
const hint = document.querySelector('.hint');
const hintText = document.querySelector('.hint-txt');
const liveSpan = document.querySelector('.lives');
const answer = document.querySelector('.answer');
const scores = document.querySelector('.scores');
const correctAns = document.querySelector('.correct');
const correctWord = document.querySelector('.correct-word');
const playAgain = document.querySelector('.reset-btn');

// capture letters & lives
let letters; 
let lives; 

// game answers and hints
const words = new Map([
    ['ed sheeran', 'loves castles... and hills'],
    ['beyonce', 'also known as queen b'],
    ['kesha', 'brushes her teeth with a bottle of jack'],
    ['stormzy', 'stars in Top Boy - a UK Drama'],
    ['doja cat', 'has top hits such as woman, aint shit and kiss me more'],
    ['harry styles', 'has top hits such as sign of the times and as it was'],
    ['mimi webb', 'has hits such as good without and house on fire'],
    ['billie eilish', 'has hits such as ocean eyes, bad guy and my strange addiction'],
    ['lady gaga', 'calls her fans her monsters'],
]);

// turns words into strokes
const word_list = [...words.keys()];

// get random word from word_list
const getRandomWord = function (list) {
    return list[Math.floor(Math.random() * word_list.length)];
};

// random word selected upon reset and init
let select_word;
const init = function (state) { // state used to check if its run for the first time
    answer.innerHTML = '';
    if (state === 'start') {
        // adding letters into html
        for (const i of 'abcdefghijklmnopqrstuvwxyz ') {
          const html = `<button class="alpha">${i.toUpperCase()}</button>`;
          gameLetter.insertAdjacentHTML('beforeend', html);
        }
      } else if (state === 'reset') { // state used to check if reset has been hit
        letters.forEach(btn => {
          btn.classList.remove('disabled');
          hint.classList.add('hidden');
          scores.classList.add('hidden');
        });
      }