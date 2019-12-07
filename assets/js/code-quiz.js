// Welcome Page Elements =====================================
var welcomeEl = document.querySelector("#welcome");
var startQuizBtnEl = document.querySelector("#startQuiz");

//Quiz Page Elements =========================================
var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");

//Input Score Page Elements ==================================
var inputScoreEl = document.querySelector("#inputScore");
var initialsEl = document.querySelector("#initials");
var submitInitialsBtnEl = document.querySelector("#submitInitials");
var userScoreEl = document.querySelector("#score");

//View High Scores Page Elements =============================
var highScoresEl = document.querySelector("#highScores");
var scoresEl = document.querySelector("#scores");
var goBackBtnEl = document.querySelector("#goBack");
var clearScoresBtnEl = document.querySelector("#clearScores");

//Universal vars =============================================
var viewHScoresBtnEl = document.querySelector("#viewHScores");
var timerEl = document.querySelector("#timer");
var score = 0;
var currentQ = 0;
var highScores = [];
var interval;
var timeGiven = 75;
var secondsElapsed = 0;

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
    timerEl.textContent = timeGiven;
    interval = setInterval(function () {
        secondsElapsed++;
        timerEl.textContent = timeGiven - secondsElapsed;
        if(secondsElapsed === timeGiven){
            stopTimer();
            currentQ = questions.length;
            nextQuestion();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    secondsElapsed = 0;
    timerEl.textContent = 0;
}

//Clears current question and calls for display of next question
//Calls for input score display if last question
function nextQuestion(targer) {
    currentQ++;
    if (currentQ < questions.length) {
        renderQuestion();
    } else {
        // console.log("final score: " + score);
        stopTimer();
        userScoreEl.textContent = score;
        hide(quizEl);
        show(inputScoreEl);
    }
}

//checks answer based on current question and updates the user score
function checkAnswer(answer) {
    // console.log("answer element: ");
    // console.log(answer);
    var answerIndex = answer.id - 1;
    // console.log("answer index: " + answerIndex);

    if (questions[currentQ].answer == questions[currentQ].choices[answerIndex]) {
        score++;
        // console.log("correct, score: " + score);
    }
    else {
        // console.log("incorrect, score:" + score);
    }
}

//hides element
function hide(element) {
    element.style.display = "none";
}

//displays element
function show(element) {
    element.style.display = "block";

}

//reset local variables
function reset() {
    score = 0;
    currentQ = 0;
    show(welcomeEl);
}

//=================== Rendering ================================

//Renders current question
function renderQuestion() {
    questionEl.textContent = questions[currentQ].title;
    // console.log(answersEl);
    for (i = 0; i < answersEl.children.length; i++) {
        answersEl.children[i].children[0].textContent = questions[currentQ].choices[i];
    }
}

//Renders high scores stored in local storage
function renderHighScores() {
    while (scoresEl.firstChild) {
        scoresEl.removeChild(scoresEl.firstChild);
    }
    show(highScoresEl);
    highScores = JSON.parse(localStorage.getItem("scores"));
    for (var i = 0; i < highScores.length; i++) {
        var scoreItem = document.createElement("li");
        scoreItem.textContent = highScores[i].username + ": " + highScores[i].userScore;
        scoresEl.appendChild(scoreItem);
    }
}


//=========================EVENTS================================

//displays high scores
viewHScoresBtnEl.addEventListener("click", function () {
    hide(welcomeEl);
    hide(quizEl);
    hide(inputScoreEl);
    renderHighScores();
});

//starts quiz from  Welcome page
startQuizBtnEl.addEventListener("click", function () {
    hide(welcomeEl);
    startTimer();
    renderQuestion();
    show(quizEl);
});

//Calls to check answer selected and calls to next question if button is clicked
answersEl.addEventListener("click", function (e) {
    // console.log(e.target);
    if (e.target.matches("button")) {
        checkAnswer(e.target);
        nextQuestion();
    }
});

//Creates a user score object to push to the local storage scores array calls to display high scores
//calls to render high scores
submitInitialsBtnEl.addEventListener("click", function () {
    var userScore = { username: initialsEl.value, userScore: score };
    if (localStorage.getItem("scores")) {
        highScores = JSON.parse(localStorage.getItem("scores"));
    }
    highScores.push(userScore)
    localStorage.setItem("scores", JSON.stringify(highScores));
    hide(inputScoreEl);
    renderHighScores();
});

//Goes back to Welcome page from High scores 
goBackBtnEl.addEventListener("click", function () {
    hide(highScoresEl);
    reset();
});

//Clears saved scores from local storage
clearScoresBtnEl.addEventListener("click", function () {
    highScores = [];
    localStorage.setItem("scores", JSON.stringify(highScores));
    renderHighScores();
});





