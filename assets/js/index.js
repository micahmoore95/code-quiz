var startButton = document.querySelector('#start-btn');
var startScreen = document.querySelector("#start-screen");
var question1 = document.querySelector('#question-1');
var question2 = document.querySelector('#question-2');
var question3 = document.querySelector('#question-3');
var q1a1 = document.querySelector('#q1a1');
var q1a2 = document.querySelector('#q1a2');
var q1a3 = document.querySelector('#q1a3');
var q1a4 = document.querySelector('#q1a4');
var wrongText = document.querySelector('#wrong-text');
var rightText = document.querySelector('#right-text');

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    startButton.setAttribute("class", "hide");

    question1.setAttribute("class", "show");
};

function wrongAnswer() {
    wrongText.setAttribute("class", "show");
    setTimeout(function() {question1.setAttribute("class", "hide")},2000);
}

function rightAnswer(){
    rightText.setAttribute("class", "show");
    setTimeout(function() {question1.setAttribute("class", "hide")},2000);
}

q1a1.addEventListener('click', wrongAnswer)
q1a2.addEventListener('click', wrongAnswer)
q1a3.addEventListener('click', rightAnswer)
q1a4.addEventListener('click', wrongAnswer)
