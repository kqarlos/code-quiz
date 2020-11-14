# Code Quiz

![Languages](https://img.shields.io/github/languages/count/kqarlos/code-quiz)
![Top Language](https://img.shields.io/github/languages/top/kqarlos/code-quiz)
![Code Size](https://img.shields.io/github/languages/code-size/kqarlos/code-quiz)
![Repo Size](https://img.shields.io/github/repo-size/kqarlos/code-quiz)
![Total Lines](https://img.shields.io/tokei/lines/github/kqarlos/code-quiz)
![Last Commit](https://img.shields.io/github/last-commit/kqarlos/code-quiz)
[![HitCount](http://hits.dwyl.com/kqarlos/code-quiz.svg)](http://hits.dwyl.com/kqarlos/code-quiz)
![Followers](https://img.shields.io/github/followers/kqarlos?style=social)

## Description

This application will test your knowledge of javascript, css and html! Answer the questions under the time alloted. Each correct question will give you 5 points. Every incorrect question will substract 10 seconds from the timer. At the end, any extra time will be added to the final score. At the end you can save your final score and add to the list of high scores.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Screenshots](#screenshots)
    * [Snippets](#snippets)
* [Credits](#credits)
* [License](#license)

## Installation

This application is compatible with the most commonly used web browsers.

* [See Live Site](https://kqarlos.github.io/code-quiz)

## Usage

### Screenshots

1. Welcome 

![Welcome](assets/images/welcome.png)

2. Quiz

![Quiz](assets/images/questions.png)

3. Input Score 

![Input](assets/images/input.png)


4. High Scores 

![HighScores](assets/images/highscores.png)



### Snippets

1. Submit Score: This event listener is tied to the _submitInitials_ button. Once clicked, it shows most of the manipulation that happens in the local storage. First it trims the value of the input and checks if it's empty. Then, it creates a new object with the user's initials and their score. Then, it retrieves the array of user objects from the local storage if there is one. Then, it pushes the created object to the array and saves it to the local storage. All objects saved to the local storage consist of a _username_, a _userScore_, and their respective values.

```javascript

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

```

2. Timer: This shows the time manipulation that starts as soon as the quiz starts. The _startTimer()_ function starts and updates the timer on the screen every 1000 milliseconds. It also checks every iteration if the time is up so the timer and the quiz can be stopped. The _stopTimer()_ function is called once the time is up or once the user is done with the last question of the quiz.

```javascript

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

function stopTimer() {
    clearInterval(interval);
}
    
```
## Credits

### Author

- Carlos Toledo: [portfolio](https://professional-portfolio2020.herokuapp.com/)
- Github: [kqarlos](https://www.github.com/kqarlos)
- LinkedIn: [carlos-toledo415](https://www.linkedin.com/in/carlos-toledo415/)


### Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

## License

![GitHub](https://img.shields.io/github/license/kqarlos/code-quiz)