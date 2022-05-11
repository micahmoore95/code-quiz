var startButton = document.querySelector('#start-btn');
var startScreen = document.querySelector("#start-screen");
var questionAnswerEl = document.querySelector('#question-answer');

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    startButton.setAttribute("class", "hide");

    questionAnswerEl.setAttribute("class", "show");
};