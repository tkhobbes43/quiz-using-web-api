var startButton = document.getElementById('start-btn');
var intro = document.getElementById("intro-container");
var questions = document.getElementById("question-container");
var final = document.getElementById("final-container");
var controls = document.getElementById("controls");
index = 0;
var questionNumber = 0;
var elements = document.getElementsByClassName("answer");


var time = document.getElementById("highscores").innerHTML

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

function startGame() {
    intro.setAttribute('hidden', true);
    document.getElementById('controls').style.display = "none"
    document.getElementById('final-container').style.display = "none"
    document.getElementById('questions').style.display = "block"
    time = 60;
    loadQuestion(questionNumber)
    for (var i = 0; i< elements.length; i++) {
        elements[i].addEventListener("click", answerQuestion);
    }
} 

function loadQuestion (questionNumber) {
    console.log(quiz[questionNumber].question);
    console.log(quiz[questionNumber].choices);
    document.getElementById("question-text").innerHTML = quiz[questionNumber].question
    document.getElementById("option-01").innerHTML = quiz[questionNumber].choices[0]
    document.getElementById("option-02").innerHTML = quiz[questionNumber].choices[1]
    document.getElementById("option-03").innerHTML = quiz[questionNumber].choices[2]
    document.getElementById("option-04").innerHTML = quiz[questionNumber].choices[3]
    
}

document.getElementById('start-btn').addEventListener("click", function() {
    var timer = setInterval(function function1 () {
        document.getElementById("time").innerHTML = time + " " + "seconds remaining";
        time -= 1;
        if (time <= 0) {
            clearInterval(time);
            document.getElementById("time").innerHTML = "Game Over"
            document.getElementById("questions").style.display = "none"
            document.querySelector(".container").style.display = "none"

        }
    }, 1000);
});

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
        document.getElementById("highScore").innerHTML = time
    }
}

var tryAgain = function () {
    location.hreft = "https://tkhobbes43.github.io/quiz-using-web-api/"
};

save.addEventListener("click", saveGame)
highScorePage = document.querySelector(".highschores")
playAgain.addEventListener("click", reload)
again.addEventListener("click", reload)

var playAgainButton = document.getElementById('play-again-btn');
