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
    ['ed sheeran', 'loves castles... and hills'],
    ['ed sheeran', 'loves castles... and hills'],
    ['ed sheeran', 'loves castles... and hills'],
    ['ed sheeran', 'loves castles... and hills'],
    ['ed sheeran', 'loves castles... and hills'],
])