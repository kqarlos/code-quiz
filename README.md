# Code Quiz



## Getting Started

This application is compatible with the most commonly used web browsers.

## Site Picture

1. ### Welcome 

![Site](assets/images/site-pic.png)

2. ### Quiz

![Site](assets/images/site-pic.png)

3. ### Input Score 

![Site](assets/images/site-pic.png)


4. ### High Scores 

![Site](assets/images/site-pic.png)



## Code Snippets

1. ### Submit Score: This event listener is tied to the _submitInitials_ button once it's clicked. It shows most of the manipulation that happens in the local storage. First it creates a new object with the user's initials and their score. Then it retrieves the array of user objects from the local storage if there is one. Then it pushes the created object to the array and saves it to the local storage. All objects saved to the local storage consist of a _username_, a _userScore_, and their respective values.

```javascript

submitInitialsBtnEl.addEventListener("click", function () {
    var userScore = { username: initialsEl.value, userScore: score };
    initialsEl.value = '';
    if (localStorage.getItem("scores")) {
        highScores = JSON.parse(localStorage.getItem("scores"));
    }
    highScores.push(userScore)
    localStorage.setItem("scores", JSON.stringify(highScores));
    hide(inputScoreEl);
    renderHighScores();
});

```

2. ### Timer: This shows the time manipulation that starts as soon as the quiz starts. The _startTimer()_ function starts and updates the timer on the screen every 1000 milliseconds. It also checks every iteration if the time is up so the timer and the quiz can be stopped. The _stopTimer()_ function is called once the time is up or once the user is done with the last question of the quiz.

```javascript

function startTimer() {
    timerEl.textContent = timeGiven;
    interval = setInterval(function () {
        secondsElapsed++;
        timerEl.textContent = timeGiven - secondsElapsed;
        if (secondsElapsed === timeGiven) {
            currentQ = questions.length;
            nextQuestion();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}
    
```
```javascript

function stopTimer() {
    clearInterval(interval);
}

```

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)

## Deployed Link

* [See Live Site](https://kqarlos.github.io/code-quiz)

## Authors

 * **Carlos Toledo** 

 ## Links

- [Link to Code Quiz Site](https://github.com/kqarlos/code-quiz)
- [Link to Github](https://www.github.com/kqarlos)
- [Link to LinkedIn](https://www.linkedin.com/in/carlos-toledo415/)


## Acknowledgments

* [W3 Schools](https://www.w3schools.com/)
* [Bootstrap components](https://getbootstrap.com/docs/4.4/components/navbar/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)