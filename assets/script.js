// set variables for each element in use
var startPageEl = document.querySelector("#start-page");
var startQuizEl = document.querySelector("#start");
var mainPageEl = document.querySelector("main");
var timerEl = document.querySelector("#time");
var questionPageEl = document.querySelector("#questions");


// create questions array


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
        console.log("The time has started at " + timeStart);
        timeStart--;
        if(timeStart === 0) {
            
            clearInterval(timer);
            timerEl.textContent = timeStart;
            
        }
    }, 1000);
    

    // begin iterating through questions array

    // include answer options

}



// add event listeners
// startQuiz function when start quiz button is selected
startQuizEl.addEventListener("click", startQuiz);