// document.getElementById ("startbutton").addEventListener ("click", nextQuestion);

// nextQuestion() {



// }


var question = document.getElementById("question")
console.log(question);
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")

// var choices = Array.from(document.getElementsByClassName("choice-text"));
// console.log(choices);

// var currentQu = {};
// var availableQu = [];

var score = 0;
var quCounter = 0


var availQu = [
    {
        question: "Question one",
        choice1: "an answer",
        choice2: "another answer",
        choice3: "yet another answer",
        choice4: "omg another answer",
        answer: "an answer"
    },
    {
        question: "Question two",
        choice1: "mama mia",
        choice2: "here we go again",
        choice3: "my my",
        choice4: "how did i let this happen",
        answer: "my my"
    },
    {
        question: "Question three",
        choice1: "hellooooo",
        choice2: "howdy partner",
        choice3: "yeeeeeeeee hawwwww",
        choice4: "water is peaceful",
        answer: "water is peaceful"
    }
]

var correctPoints = 10;

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
};

document.getElementById("choice1").onclick = function() {
    if (currentQu.choice1 == currentQu.answer) {
        console.log("true")
    }
    else {
        console.log("false")
    }
    getNewQu()
}

document.getElementById("choice2").onclick = function() {
    if (currentQu.choice2 == currentQu.answer) {
        console.log("true")
    }
    else {
        console.log("false")
    }
    getNewQu()
}

document.getElementById("choice3").onclick = function() {
    if (currentQu.choice3 == currentQu.answer) {
        console.log("true")
    }
    else {
        console.log("false")
    }
    getNewQu()
}

document.getElementById("choice4").onclick = function() {
    if (currentQu.choice4 == currentQu.answer) {
        console.log("true")
    }
    else {
        console.log("false")
    }
    getNewQu()
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


// var personIdx = 0;

// function renderPerson() {
//   var currentPerson = peoples[personIdx];
//   $("#person-name").text(currentPerson.name);
//   $("#person-age").text(currentPerson.age);
//   $("#person-phone").text(currentPerson.phone);
//   $("#person-occupation").text(currentPerson.occupation);
// }

// function renderNextPerson() {
//   if (personIdx == peoples.length - 1) {
//     alert("End of contacts list!");
//     return;
//   }
//   personIdx++;
//   count -= 10;
//   renderPerson();
// }