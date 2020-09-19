var countdownEl = document.getElementById("timer");

var secondsLeft = 60
var timeDisplay = "Time: " + secondsLeft + " seconds"

function countDown() {
    setInterval(function () {
        countdownEl.textContent = "Time: " + secondsLeft + " seconds"
        secondsLeft--;

        if (secondsLeft <= 0) {
            clearInterval(secondsLeft = 0);
            endGame();
        }

    }, 1000);

    console.log("timer started");

    // if (secondsLeft <= 0) {
    //     console.log("end game");
    //     endGame();
    // };


}


countDown();


var question = document.getElementById("question")
console.log(question);
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")

var score = 0;
var quCounter = 0
var correctPoints = 10;


var availQu = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "1. strings",
        choice2: "2. booleans",
        choice3: "3. alerts",
        choice4: "4. numbers",
        answer: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within_____.",
        choice1: "1. quotes",
        choice2: "2. curly brackets",
        choice3: "3. parentheses",
        choice4: "4. square brackets",
        answer: "3. parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        choice1: "1. numbers and strings",
        choice2: "2. other arrays",
        choice3: "3. booleans",
        choice4: "4. all of the above",
        answer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choice1: "1. commas",
        choice2: "2. curly brackets",
        choice3: "3. quotes",
        choice4: "4. parentheses",
        answer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript",
        choice2: "2. terminal / bash",
        choice3: "3. for loops",
        choice4: "4. console.log",
        answer: "4. console.log"
    }
]


function startQuiz() {
    quCounter = 0;
    console.log(availQu);
    currentQu = availQu[quCounter];
    console.log(currentQu);
    question.innerText = currentQu.question;
    choice1.innerText = currentQu.choice1;
    choice2.innerText = currentQu.choice2;
    choice3.innerText = currentQu.choice3;
    choice4.innerText = currentQu.choice4;
    // if (secondsLeft <= 0) {
    //     console.log("end game");
    //     endGame();
    // };
};

document.getElementById("choice1").onclick = function () {
    if (currentQu.choice1 == currentQu.answer) {
        console.log("true")
        document.getElementById("rightorwrong").textContent = "Correct!"
        score += correctPoints
        console.log(score)
    }
    else {
        console.log("false")
        document.getElementById("rightorwrong").textContent = "Wrong!"
        secondsLeft -= 10
    }
    if (quCounter >= 4) {
        console.log("end game")
        endGame()
    }
    else {
        getNewQu()
    }
}

document.getElementById("choice2").onclick = function () {
    if (currentQu.choice2 == currentQu.answer) {
        console.log("true")
        document.getElementById("rightorwrong").textContent = "Correct!"
        score += correctPoints
        console.log(score)
    }
    else {
        console.log("false")
        document.getElementById("rightorwrong").textContent = "Wrong!"
        secondsLeft -= 10
    }
    if (quCounter >= 4) {
        console.log("end game")
        endGame()
    }
    else {
        getNewQu()
    }
}

document.getElementById("choice3").onclick = function () {
    if (currentQu.choice3 == currentQu.answer) {
        console.log("true")
        document.getElementById("rightorwrong").textContent = "Correct!"
        score += correctPoints
        console.log(score)
    }
    else {
        console.log("false")
        document.getElementById("rightorwrong").textContent = "Wrong!"
        secondsLeft -= 10
    }
    if (quCounter >= 4) {
        console.log("end game")
        endGame()
    }
    else {
        getNewQu()
    }
}

document.getElementById("choice4").onclick = function () {
    if (currentQu.choice4 == currentQu.answer) {
        console.log("true")
        document.getElementById("rightorwrong").textContent = "Correct!"
        score += correctPoints
        console.log(score)
    }
    else {
        console.log("false")
        document.getElementById("rightorwrong").textContent = "Wrong!"
        secondsLeft -= 10
    }
    if (quCounter >= 4) {
        console.log("end game")
        endGame()
    }
    else {
        getNewQu()
    }
}


function getNewQu() {
    quCounter++;
    currentQu = availQu[quCounter]
    console.log(currentQu)
    question.innerText = currentQu.question;
    choice1.innerText = currentQu.choice1;
    choice2.innerText = currentQu.choice2;
    choice3.innerText = currentQu.choice3;
    choice4.innerText = currentQu.choice4;
};

startQuiz()

function endGame() {
    document.getElementById("question").textContent = "All done!";
    document.getElementById("choice1").style.display = 'none';
    document.getElementById("choice2").style.display = 'none';
    document.getElementById("choice3").style.display = 'none';
    document.getElementById("choice4").style.display = 'none';

    var finalScore = document.createElement("p");
    var node = document.createTextNode("Your final score is " + score + ".");
    finalScore.appendChild(node);
    var finScoreEl = document.getElementById("question");
    finScoreEl.appendChild(finalScore);
    finalScore.setAttribute("id", "finalscore");

    var initials = document.createElement("p");
    var initialsNode = document.createTextNode("Enter Initials: ");
    initials.appendChild(initialsNode);
    var initialsEl = document.getElementById("question");
    initialsEl.appendChild(initials);
    initials.setAttribute("id", "initials");

    var inputBox = document.createElement("input");
    var inputEl = document.getElementById("question");
    inputEl.appendChild(inputBox);

    var submitButton = document.createElement("button");
    var submitBtnNode = document.createTextNode("Submit");
    submitBtnNode.id = 'submittext'
    submitButton.appendChild(submitBtnNode)
    var submitEl = document.getElementById("question");
    submitEl.appendChild(submitButton);
    submitButton.id = 'submitbutton';

    localStorage.setItem("highscore", score);
    localStorage.setItem("name", inputBox);

    document.getElementById("submitbutton").addEventListener("click", seeScores);
};




function seeScores() {
    document.getElementById("rightorwrong").style.display = 'none';
    var highscore = localStorage.getItem("highscore");
    // var nameObject = JSON.parse(localStorage.getItem("name"));

    // var name = localStorage.getItem("name");
    document.getElementById("question").textContent = "Highscores";

    var highscoreList = document.createElement("p");
    var hSListNode = document.createTextNode("highscore");
    highscoreList.appendChild(hSListNode);
    // highscoreList.setAttribute("id", "highscorelist");
    // document.getElementById("highscorelist").textContent = highscore
    console.log("here are the scores");

    // var highscores = JSON.parse(localStorage.getItem("history"))
    // if (highscores == null) {
    //     highscores = []
    // }
    // var currentRecord = {
    //     name: inputBox,
    //     score1: score
    // }
    // highscores.push(currentRecord)
    // var highScoreString = JSON.stringify(highscores)
    // localStorage.setItem("history", highScoreString)
};



    // renderLastRegistered();

    // function displayMessage(type, message) {
    //   msgDiv.textContent = message;
    //   msgDiv.setAttribute("class", type);
    // }

    // function renderLastRegistered() {
    //   var email = localStorage.getItem("email");
    //   var password = localStorage.getItem("password");

    //   if (!email || !password) {
    //     return;
    //   }

    //   userEmailSpan.textContent = email;
    //   userPasswordSpan.textContent = password;
    // }

    // signUpButton.addEventListener("click", function(event) {
    //   event.preventDefault();

    //   var email = document.querySelector("#email").value;
    //   var password = document.querySelector("#password").value;

    //   if (email === "") {
    //     displayMessage("error", "Email cannot be blank");
    //   } else if (password === "") {
    //     displayMessage("error", "Password cannot be blank");
    //   } else {
    //     displayMessage("success", "Registered successfully");

    //     localStorage.setItem("email", email);
    //     localStorage.setItem("password", password);
    //     renderLastRegistered();
    //   }
    // }); 


//     var firstNameInput = document.querySelector("#first-name");
// var lastNameInput = document.querySelector("#last-name");
// var emailInput = document.querySelector("#email");
// var passwordInput = document.querySelector("#password");
// var signUpButton = document.querySelector("#sign-up");
// var msgDiv = document.querySelector("#msg");
// var userFirstNameSpan = document.querySelector("#user-first-name");
// var userLastNameSpan = document.querySelector("#user-last-name");
// var userEmailSpan = document.querySelector("#user-email");
// var userPasswordSpan = document.querySelector("#user-password");

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

// signUpButton.addEventListener("click", function(event) {
//   event.preventDefault();

//   // create user object from submission
//   var user = {
//     firstName: firstNameInput.value.trim(),
//     lastName: lastNameInput.value.trim(),
//     email: emailInput.value.trim(),
//     password: passwordInput.value.trim()
//   };

//   console.log(user);

//   // validate the fields
//   if (user.firstName === "") {
//     displayMessage("error", "First name cannot be blank");
//   } else if (user.lastName === "") {
//     displayMessage("error", "Last name cannot be blank");
//   } else if (user.email === "") {
//     displayMessage("error", "Email cannot be blank");
//   } else if (user.password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");

//     // set new submission
//     localStorage.setItem("user", JSON.stringify(user));

//     // get most recent submission
//     var lastUser = JSON.parse(localStorage.getItem("user"));
//     userFirstNameSpan.textContent = lastUser.firstName;
//     userLastNameSpan.textContent = lastUser.lastName;
//     userEmailSpan.textContent = lastUser.email;
//     userPasswordSpan.textContent = lastUser.password;
//   }
// });
