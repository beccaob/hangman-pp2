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

select_word = getRandomWord(word_list);
lives = 8;

// capturing letters 
letters = document.querySelectorAll('.alpha');
liveSpan.textContent = lives;

// selecting word 
for (let i = 0; i < select_word.length; i++) {
    const html = `<p class="word">_</p>`;
    answer.insertAdjacentHTML('beforeend', html);
  }
};

// initalising game 
init('start');

// show score card 
const showScores = function (msg) {
    scores.classList.remove('hidden');
    correctWord.textContent = select_word;
    correctAns.textContent = `You ${msg}`;
  };

  // decrease life if incorrect letter chosen
const decreaseLife = function () {
    lives--;
    //   console.log(lives);
    liveSpan.textContent = lives;
    if (lives === 0) {
      showScores('lost :( Better luck next time!');
    }
  };

// matching pressed letter to selected word 
const getindexes = function (letter) {
    let indexes = [];
    [...select_word].forEach((val, i) => {
      if (val === letter) {
        const index = i;
        indexes.push(index);
      }
    });
    //   console.log(indexes);
    return indexes;
  };

  // check if word is complete 
const checkWord = function () {
    let val = true;
    for (let i = 0; i < answer.children.length; i++) {
      if (answer.children[i].textContent === '_') {
        val = false;
      }
    }
    return val;
  };

  // event listeners

  // letters event listener 
const letterPress = function () {
const letter = this.textContent.toLowerCase();
if (select_word.includes(letter)) {
    const indexes_list = getindexes(letter);
    indexes_list.forEach((val, i) => {
      answer.children[val].textContent = this.textContent;
    });
    if (checkWord()) showScores('won! Congratulations :D');
  } else {
    decreaseLife();
  }
  this.classList.add('disabled');
};