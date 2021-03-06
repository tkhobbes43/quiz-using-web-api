var intro = document.getElementById("intro-container");
var startButton = document.getElementById('start-btn');
var questions = document.getElementById("question-container");
var elements = document.getElementsByClassName("answer");
var controls = document.getElementById("controls");
var time = document.getElementById("highScores").innerHTML

var final = document.getElementById("final-container");
var scoreArea = document.getElementById("log");
var log = document.querySelector(".finalLog");
var questionNumber = 0;
var viewHighScoresButton = document.getElementById("highScores");
index = 0;
var timer
let runingTimer

// local Storage objects
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const quiz = [
    {
        question: 'Which HTML element do we put the JavaScript in?',
        choices: ['script', 'js', 'javascript', 'scripting'],
        answer: '<script>'
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        choices: ['msgBox("Hello World");', 'msg("Hello World");', 'alertBox("Hello World");', 'alert("Hello World");'],
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
        choices: ['// This is a comment', '!-- This is a comment -->', '" This is a comment', '" This is a comment!' ],
        answer: '// This is a comment'
    },
    {
        question: 'How does a FOR loop start?',
        choices: ['for ( i <= 5; i++)', 'for ( i = 0; i <= 5)', 'for ( i = 0; i <= 5; i++)', 'for i = 1 to 5' ],
        answer: 'for ( i = 0; i <= 5; i++)'
    },
];

startButton.addEventListener('click', startGame)
viewHighScoresButton.addEventListener('click', displayScores)

// function for starting the game
function startGame() {
    intro.setAttribute('hidden', true);
    document.getElementById('controls').style.display = "none"
    document.getElementById('final-container').style.display = "none"
    document.getElementById('questions').style.display = "block"
    time = 60;
    scoreArea.innerHTML = '';
    startClock();
    loadQuestion(questionNumber)
    for (var i = 0; i< elements.length; i++) {
        elements[i].addEventListener("click", answerQuestion);
    }
} 

// function that starts the clock
function startClock() {
    document.getElementById("time").innerHTML = `${time} seconds remaining`;
    if (time <= 0) {
        gameOver();
    } else {
        time -= 1;
        runningTimer = setTimeout(startClock, 1000);
    }
}

// function for loading the questions
function loadQuestion (questionNumber) {
    console.log(quiz[questionNumber].question);
    console.log(quiz[questionNumber].choices);
    document.getElementById("question-text").innerHTML = quiz[questionNumber].question
    document.getElementById("option-01").innerHTML = quiz[questionNumber].choices[0]
    document.getElementById("option-02").innerHTML = quiz[questionNumber].choices[1]
    document.getElementById("option-03").innerHTML = quiz[questionNumber].choices[2]
    document.getElementById("option-04").innerHTML = quiz[questionNumber].choices[3]
    
}

function answerQuestion (event) {
    answered = event.target.innerHTML
    if(answered == quiz[questionNumber]["answer"]) {
        time += 10 
    } else {
        time -= 10
    }
    questionNumber += 1
    if(questionNumber <= 4 ) {
        loadQuestion(questionNumber)
    } else {
        // load input initials page 
        document.getElementById("questions").style.display = "none"
        document.getElementById("time").style.display = "none"
        document.getElementById("log").style.display = "block"
        document.getElementById("highScores").innerHTML = time
    }
}

// function for game over
function gameOver() {
    clearTimeout(runningTimer);
}

// function to submit high scores

// function to clear high scores

// function to display high scores
function displayScores() {
    clearInterval(runningTimer);
    document.getElementById("intro").style.display = "none"
    document.getElementById("finale").style.display = "block"
    var getScore = JSON.parse(localStorage.getItem("yourScores"));
    setScore(getScore)
    console.log(getScore)
};

// save.addEventListener("click", saveGame)
// highScorePage = document.querySelector(".highscores")

// var playAgainButton = document.getElementById('play-again-btn');
