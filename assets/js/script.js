const startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started');
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer() {

}

function startTimer() {

}

function viewHighscores () {
    
}

const questions = [
    {
        question: 'Which HTML element do we put the Javascript in?',
        answer: [
            { text: '<script>', correct: true },
            { text: '<js>', correct: false },
            { text: '<javascript>', correct: false },
            { text: '<scripting>', correct: false },
        ]

        }
    }


]