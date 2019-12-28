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

//starts and updates timer
function startTimer() {
    timerEl.textContent = timeGiven;
    interval = setInterval(function () {
        secondsElapsed++;
        timerEl.textContent = timeGiven - secondsElapsed;
        if (secondsElapsed >= timeGiven) {
            currentQ = questions.length;
            nextQuestion();
        }
    }, 1000);
}

//stops timer
function stopTimer() {
    clearInterval(interval);
}

//Clears current question and calls for display of next question
//Calls for input score display if last question
function nextQuestion() {
    currentQ++;
    if (currentQ < questions.length) {
        renderQuestion();
    } else {
        // console.log("final score: " + score);
        stopTimer();
        if ((timeGiven - secondsElapsed) > 0)
            score += (timeGiven - secondsElapsed);
        userScoreEl.textContent = score;
        hide(quizEl);
        show(inputScoreEl);
        timerEl.textContent = 0;
    }
}

//checks answer based on current question and updates the user score
function checkAnswer(answer) {
    // console.log("answer element: ");
    // console.log(answer);
    var answerIndex = answer.id - 1;
    // console.log("answer index: " + answerIndex);

    if (questions[currentQ].answer == questions[currentQ].choices[answerIndex]) {
        score += 5;
        // console.log("correct, score: " + score);
        displayMessage("Correct!");
    }
    else {
        secondsElapsed += 10;
        displayMessage("Wrong...");
        // console.log("incorrect, score:" + score);
    }
}

//displays a message for 2 seconds
function displayMessage(m) {
    var timeStart = 0;
    var timeStop = 2;
    var messageHr = document.createElement("hr");
    var messageEl = document.createElement("div");
    messageEl.textContent = m;
    document.querySelector(".jumbotron").appendChild(messageHr);
    document.querySelector(".jumbotron").appendChild(messageEl);
    var messageInterval = setInterval(function () {
        timeStart++;
        if (timeStart >= timeStop) {
            messageHr.remove();
            messageEl.remove();
            clearInterval(messageInterval)
        }
    }, 1000);

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
    secondsElapsed = 0;
    timerEl.textContent = 0;
}

//=================== Rendering ================================

//Renders current question
function renderQuestion() {
    questionEl.textContent = questions[currentQ].title;
    // console.log(answersEl);
    for (i = 0; i < answersEl.children.length; i++) {
        answersEl.children[i].children[0].textContent = (i + 1) + ": " + questions[currentQ].choices[i];
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
        var scoreItem = document.createElement("div");
        scoreItem.className += "row mb-3 p-2";
        console.log(scoreItem)
        scoreItem.setAttribute("style", "background-color:PaleTurquoise;");
        scoreItem.textContent = (i + 1) + ". " + highScores[i].username + " - " + highScores[i].userScore;
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
    stopTimer();
    reset();
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
    var initValue = initialsEl.value.trim();
    if (initValue) {
        var userScore = { username: initValue, userScore: score };
        initialsEl.value = '';
        if (localStorage.getItem("scores")) {
            highScores = JSON.parse(localStorage.getItem("scores"));
        }
        highScores.push(userScore)
        localStorage.setItem("scores", JSON.stringify(highScores));
        hide(inputScoreEl);
        renderHighScores();
        reset();
    }
});

//Goes back to Welcome page from High scores 
goBackBtnEl.addEventListener("click", function () {
    hide(highScoresEl);
    show(welcomeEl);
});

//Clears saved scores from local storage
clearScoresBtnEl.addEventListener("click", function () {
    highScores = [];
    localStorage.setItem("scores", JSON.stringify(highScores));
    renderHighScores();
});





