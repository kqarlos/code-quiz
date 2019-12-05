var welcomePageEl = document.querySelector("#welcomePage");
var viewHScoresEl = document.querySelector("#viewHScores");
var timerEl = document.querySelector("#timer");
var startEl = document.querySelector("#start");

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

}

//displays high scores upon click
viewHScoresEl.addEventListener("click", function () {


});

//starts quiz upon click
startEl.addEventListener("click", function () {


});

//hides element
function hide(element) {
    element.style.display = "none";
}

//displays element
function show(element) {
    element.style.display = "block";

}


