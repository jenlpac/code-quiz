// set variables for each element in use
var startPageEl = document.querySelector("#start-page");
var startQuizEl = document.querySelector("#start");
var mainPageEl = document.querySelector("main");
var timerEl = document.querySelector("#time");
var questionPageEl = document.querySelector("#questions");
var answerChoicesEl = document.querySelector("#choices");
var responseEl = document.querySelector("#response");




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


// create necessary elements
// start Quiz and timer
var startQuiz = function() {
    // remove start page
    console.log("The quiz has started");
    mainPageEl.removeChild(startPageEl);

    // start timer
    var timeStart = 75;
    var timer = setInterval(function() {
        timerEl.textContent = timeStart;
        // console.log("The time has started at " + timeStart);
        timeStart--;
        if(timeStart === 0) {
            
            clearInterval(timer);
            timerEl.textContent = timeStart;
            
        }
    }, 1000);

    askQuestion();
};

var question = document.createElement("h1");
question.className = "question";
var i = 0;

var askQuestion = function() {
    // show question and answers on the page

    question.textContent = questionsArray[i].q;
    questionPageEl.appendChild(question);

    // add answer buttons
    answerChoicesEl.innerHTML = "<button class='btn'>" + questionsArray[i].a1
        + "</button><button class='btn'>" + questionsArray[i].a2
        + "</button><button class='btn'>" + questionsArray[i].a3
        + "</button><button class='btn'>" + questionsArray[i].a4
        + "</button>";
    
    if(i>=1) {
        // show right or wrong response
        
        
        

    }
             
}


var answerSelection = function(event) {
    var answer = event.target;

    if (answer.textContent === questionsArray[i].correct) {

    }


    console.log("you answered")
    i++;
    askQuestion();
};





// add event listeners
// startQuiz function when start quiz button is selected
startQuizEl.addEventListener("click", startQuiz);
answerChoicesEl.addEventListener("click", answerSelection);