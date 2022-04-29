var startButton = document.getElementById('start-btn')
// var questionContainerElement = document.getElementById('question-container')
// var questionContainerElement = document.getElementById('intro-container')
// var questionContainerElement = document.getElementById('final-container')
// var questionElement = document.getElementById('question')
// var answerButtonsElement = document.getElementById('answer-buttons')
var intro = document.getElementById("intro-container");
var questions = document.getElementById("question-container");
var controls = document.getElementById("final-container");
var final = document.getElementById("controls");

startButton.addEventListener('click', startGame)

function startGame() {
    intro.setAttribute('hide', true);
    questions.setAttribute('hide', true);
    controls.setAttribute('hide', true);
    final.setAttribute('hide', true);
} 




// let hideIntroContainer = 
// let hidefinalContainer = 



// function startGame() {
//     startButton.classList.add('hide')
//     currentQuestionIndex = 0
//     time = 60;
//     questionContainerElement.classList.remove('hide')
//     setNextQuestion()
// }

// function setNextQuestion() {

// }

// function showQuestion(question) {
//     questionElement 
// }

// function selectAnswer() {

// }

// function startTimer() {

// }

// function viewHighscores () {
    
// }

// const questions = [
//     {
//         question: 'Which HTML element do we put the JavaScript in?',
//         choices: ['<script', '<js>', '<javascript>', '<scripting>' ],
//         answer: '<script>'
//     },
//     {
//         question: 'How do you write "Hello World" in an alert box?',
//         choices: ['msgBox("Hello World");', 'msg("Hello World");', 'alertBox("Hellow World");', 'alert("Hellow World");'],
//         answer: 'alert("Hello World");'
//     },
//     {
//         question: 'How do you create a function in JavaScript?',
//         choices: ['function:myFunction()', 'function myFunction()', 'function = myFunction()', 'function {myFunction}' ],
//         answer: 'function myFunction()'
//     },
//     {
//         question: 'Which example is the correct way to write an IF statement in JavaScript?',
//         choices: ['if i = 5', 'if i = 5 then', 'if ( i == 5 )', 'if i == 5 then' ],
//         answer: 'if ( i == 5 )'
//     },
//     {
//         question: 'How can you add a comment in JavaScript?',
//         choices: ['// This is a comment', '<!-- This is a comment -->', '" This is a comment', ' " This is a comment!' ],
//         answer: '// This is a comment'
//     },
//     {
//         question: 'How does a FOR loop start?',
//         choices: ['for ( i <= 5; i++)', 'for ( i = 0; i <= 5)', 'for ( i = 0; i <= 5; i++)', 'for i = 1 to 5' ],
//         answer: 'for ( i = 0; i <= 5; i++)'
//     },
// ];