const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started');
    startButton.classList.add('hide')
    currentQuestionIndex = 0
    time = 60;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {

}

function showQuestion(question) {
    questionElement 
}

function selectAnswer() {

}

function startTimer() {

}

function viewHighscores () {
    
}

const questions = [
    {
        question: 'Which HTML element do we put the JavaScript in?',
        choices: ['<script', '<js>', '<javascript>', '<scripting>' ],
        answer: '<script>'
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        choices: ['msgBox("Hello World");', 'msg("Hello World");', 'alertBox("Hellow World");', 'alert("Hellow World");'],
        answer: 'alert("Hello World");'
    },
    {
        question: 'How do you create a function in JavaScript?',
        choices: ['function:myFunction()', 'function myFunction()', 'function = myFunction()', 'function {myFunction}' ],
        answer: 'function myFunction()'
    },
    {
        question: 'Which example is the correct way to write an IF statement in JavaScript?',
        choices: ['if i = 5', 'if i = 5 then', 'if ( i == 5 )', 'if i == 5 then' ],
        answer: 'if ( i == 5 )'
    },
    {
        question: 'How can you add a comment in JavaScript?',
        choices: ['// This is a comment', '<!-- This is a comment -->', '" This is a comment', ' " This is a comment!' ],
        answer: '// This is a comment'
    },
    {
        question: 'How does a FOR loop start?',
        choices: ['for ( i <= 5; i++)', 'for ( i = 0; i <= 5)', 'for ( i = 0; i <= 5; i++)', 'for i = 1 to 5' ],
        answer: 'for ( i = 0; i <= 5; i++)'
    },
];