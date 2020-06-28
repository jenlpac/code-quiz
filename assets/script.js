// set variables for each element in use
var startPageEl = document.querySelector("#start-page");
var startQuizEl = document.querySelector("#start");
var mainPageEl = document.querySelector("main");
var timerEl = document.querySelector("#time");
var questionPageEl = document.querySelector("#questions");
var answerChoicesEl = document.querySelector("#choices");
var responseEl = document.querySelector("#response");
var finalScoreEl = document.querySelector("#final-score");
var timeStart = 75;
var timer = "";

// create questions array
var questionsArray = [
    {
        q: "Commonly used data types do NOT include:",
        a1: "1. strings",
        a2: "2. booleans",
        a3: "3. alerts",
        a4: "4. numbers", 
        correct: "3. alerts"
    },
    {
        q: "The condition in an if/else statement is enclosed with _____.",
        a1: "1. quotes",
        a2: "2. curly brackets",
        a3: "3. parenthesis",
        a4: "4. square brackets",
        correct: "3. parenthesis"
    },
    {
        q: "Arrays in JavaScript can be used to store _____.",
        a1: "1. numbers and strings",
        a2: "2. other arrays",
        a3: "3. booleans",
        a4: "4. all of the above",
        correct: "4. all of the above"
    },
    {
        q: "String values must be enclosed within _____ when being assigned to variables.",
        a1: "1. commas",
        a2: "2. curly brackets",
        a3: "3. quotes",
        a4: "4. parenthesis",
        correct: "3. quotes"
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a1: "1. JavaScript",
        a2: "2. terminal/bash",
        a3: "3. for loops",
        a4: "4. console.log",
        correct: "4. console.log"
    }
]


// start Quiz and timer
var startQuiz = function() {
    // remove start page
    console.log("The quiz has started");
    mainPageEl.removeChild(startPageEl);

    // start timer
    timer = setInterval(function() {
        timerEl.textContent = timeStart;
        timeStart--;
        // end quiz if timer reaches 0
        if(timeStart === 0) {
            clearInterval(timer);
            timerEl.textContent = timeStart;
            highScore();
        }
    }, 1000);
    // start questions
    askQuestion();
};

// var for response
var response = "";

var answerSelection = function(event) {
    // create event.target variable
    var answer = event.target;
    console.log(answer);

    // if answer is correct
    if (answer.textContent === questionsArray[i].correct) {
        response = "Correct!";
    }
    // if answer is wrong
    else {
        response = "Wrong!";
        timeStart = timeStart - 10;
        console.log("The time is now " + timeStart);
    }

    i++;
    askQuestion();
};


// var saved to ask question
var question = document.createElement("h1");
question.className = "question";
var i = 0;

var askQuestion = function() {
    // show question and answers on the page
    if(i <= 4) {
        question.textContent = questionsArray[i].q;
        questionPageEl.appendChild(question, answerChoicesEl);

        // add answer buttons
        answerChoicesEl.innerHTML = "<button class='btn'>" + questionsArray[i].a1
            + "</button><button class='btn'>" + questionsArray[i].a2
            + "</button><button class='btn'>" + questionsArray[i].a3
            + "</button><button class='btn'>" + questionsArray[i].a4
            + "</button>";
    
        if(i>=1) {
            // show right or wrong response from previous question
            console.log(response);
            responseEl.textContent = response;
        }
    }
    else {
        highScore();
    }
};



//var endQuiz = document.createElement("h1");

var highScore = function() {
    console.log("Quiz is over!");
    clearInterval(timer);

    questionPageEl.removeChild(question);
    answerChoicesEl.innerHTML = "";
    responseEl.textContent = "";

    //mainPageEl.removeChild(question);
    

    finalScoreEl.innerHTML = "<h3>All Done! Your final score is:  " + timeStart + ".</h3><label for='initials'>Enter Initials: </label><input type='text' name='initials'>";

    //finalScoreEl.innerHTML = "<label for='initials'>Enter Initials: </label><input type='text' name='initials'>";
}


// add event listeners
// startQuiz function when start quiz button is selected
startQuizEl.addEventListener("click", startQuiz);
// run answerSelection function when answer choice is selected
answerChoicesEl.addEventListener("click", answerSelection);