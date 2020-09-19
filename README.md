# week4-homework

The Coding Quiz allows a user to answer a series of multiple choice questions about coding and then see their final score.


Link to deployed application:
https://grahamelphick.github.io/week3-homework/


Screenshots of deployed application:
<img src="./screenshots.homepage.png" alt="quiz homepage">
<img src="./screenshots.quiz.png" alt="quiz question page">
<img src="./screenshots.finalscore.png" alt="quiz final score page">


To begin, the player presses the start button. This loads the first question and starts the countdown (60 seconds).

If the player selects the correct answer, they recieve 10 points. If they select the incorrect answer, they are penalised 10 seconds. After selecting either the correct or incorrect answer, the player is notified of the result and presented with a new question.

When all questions have been answered or the timer reaches 0 (whichever comes first), the user is presented with their final score, an input box in which to type their initials and a submit button.

Clicking the submit button will take the player to the highscores page, which is stored in localStorage.