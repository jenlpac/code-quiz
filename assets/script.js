// set variables for each element in use
var startPageEl = document.querySelector("#start-page");
var startQuizEl = document.querySelector("#start");
var mainPageEl = document.querySelector("main");
var timerEl = document.querySelector("#time");
var questionPageEl = document.querySelector("#questions");
var answerChoicesEl = document.querySelector("#choices");
var responseEl = document.querySelector("#response");

var finalScoreEl = document.querySelector("#final-score");
var listEl = document.querySelector("#high-score");

var timeStart = 75;
var timer = "";
highScoreCounter = 0;

var highScoreArr = [];

//need to save variables as:
//var highScoreInit = {
//    id:
//    name: (initials)
//    score:
//}

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
    // start timer
    timer = setInterval(function() {
        timerEl.textContent = timeStart;
        timeStart--;
        // end quiz if timer reaches 0
        if(timeStart === 0) {
            clearInterval(timer);
            timerEl.textContent = timeStart;
            endQuiz();
        }
    }, 1000);

    // remove start page
    console.log("The quiz has started");
    mainPageEl.removeChild(startPageEl);
    
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
    if (answer.textContent === questionsArray[count].correct) {
        response = "Correct!";
    }
    // if answer is wrong
    else {
        response = "Wrong!";
        timeStart = timeStart - 10;
    }

    count++;
    askQuestion();
};


// var saved to ask question
var question = document.createElement("h1");
question.className = "questions";
var count = 0;

var askQuestion = function() {
    // show question and answers on the page
    if(count <= 4) {
        question.textContent = questionsArray[count].q;
        questionPageEl.appendChild(question, answerChoicesEl);

        // add answer buttons
        answerChoicesEl.innerHTML = "<button class='btn'>" + questionsArray[count].a1
            + "</button><button class='btn'>" + questionsArray[count].a2
            + "</button><button class='btn'>" + questionsArray[count].a3
            + "</button><button class='btn'>" + questionsArray[count].a4
            + "</button>";
    
        if(count>=1) {
            // show right or wrong response from previous question
            console.log(response);
            responseEl.textContent = response;
        }
    }
    else {
        endQuiz();
    }
};

// create submit button for initials
var submitInitEl = document.createElement("button");
submitInitEl.textContent = "Submit";

var endQuiz = function() {
    // stop timer
    clearInterval(timer);
    timerEl.textContent = timeStart;
    // clear questions
    questionPageEl.removeChild(question);
    answerChoicesEl.innerHTML = "";
    // include response from final question
    responseEl.textContent = response;

    finalScoreEl.innerHTML = "<h2>All Done! Your final score is " + timeStart + ".</h2><br><br><div class='init-line'><label for='initials'>Enter Initials: </label><input type='text' name='initials' id='initials' required minlength='2' maxlength='2' /></div>";
    
    finalScoreEl.appendChild(submitInitEl);
}

var scoreListEl = document.createElement("li");
scoreListEl.classname = "score-list";
scoreListEl.textContent = "hello" + "" + "goodbye"

var saveHighScore = function() {
    var initialsInput = document.querySelector("input").value;
    
    // Save initials and score to an object
    var highScoreObj = {
        initials: initialsInput,
        score: timeStart
    }
    console.log(highScoreObj);
    console.log(highScoreObj.initials);

    highScoreObj.id = highScoreCounter;
    highScoreArr.push(highScoreObj);

    console.log(highScoreObj);

    localStorage.setItem("highScoreArr",JSON.stringify(highScoreArr));

    highScoreCounter++;

    highScorePage();
};

var goBack = document.createElement("button");
goBack.classname = "btn";
goBack.textContent = "Go Back";

var clearScore = document.createElement("button");
clearScore.classname = "btn";
clearScore.textContent = "Clear All Scores";

var highScorePage = function() {

    finalScoreEl.innerHTML = "<h2>High Scores</h2>";
    responseEl.textContent = "";
    listEl.appendChild(scoreListEl);
    responseEl.appendChild(goBack);
    responseEl.appendChild(clearScore);
}


// add event listeners
// startQuiz function when start quiz button is selected
startQuizEl.addEventListener("click", startQuiz);
// run answerSelection function when answer choice is selected
answerChoicesEl.addEventListener("click", answerSelection);
// submit initials
submitInitEl.addEventListener("click", saveHighScore);