var welcomeEl = document.querySelector("#welcome");
var quizEl = document.querySelector("#quiz");
var inputScoreEl = document.querySelector("#inputScore");
var viewHScoresEl = document.querySelector("#viewHScores");
var timerEl = document.querySelector("#timer");
var startEl = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");


var currentQ = 0;

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
];

//starts and updates timer
function startTimer() {

}

//Cleats current question and displays next question
function nextQuestion() {
    currentQ++;
    if (currentQ < questions.length) {
        populateQA();
    } else {
        currentQ = 0;
        hide(quizEl);
        inputScore();
    }
}

//displays high scores upon click
viewHScoresEl.addEventListener("click", function () {


});

//starts quiz upon click
startEl.addEventListener("click", function () {
    hide(welcomeEl);
    populateQA();
    show(quizEl);
});

answersEl.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.matches("button")) {
        nextQuestion();
    }
});

//hides element
function hide(element) {
    element.style.display = "none";
}

//displays element
function show(element) {
    element.style.display = "block";

}

function populateQA() {
    questionEl.textContent = questions[currentQ].title;
    console.log(answersEl);
    for (i = 0; i < answersEl.children.length; i++) {
        answersEl.children[i].children[0].textContent = questions[currentQ].choices[i];
    }
}

//
function inputScore() {
    show(inputScoreEl);
}


