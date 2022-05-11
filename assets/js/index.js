var startButton = document.querySelector('#start-btn');
var startScreen = document.querySelector("#start-screen");
var question = document.querySelector('#question');

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    startButton.setAttribute("class", "hide");

    questoinAnswerEl.setAttribute("class", "show");
};