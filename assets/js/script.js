//calling the ids to be used in the program
var timerEl = document.getElementById("timer");
var startDiv = document.getElementById("start");
var startEl = document.getElementById("start-btn");
var questionEl = document.getElementById("question");
var questionDiv = document.getElementById("question-div");
var answerEl = document.getElementById("answer");
var scoreEl = document.getElementById("view-scores");
var finalScoreEl = document.getElementById("final-score");
var initialsEl = document.getElementById("initials");
var gameEndEl = document.getElementById("game-over");
var highScoreBtnEl = document.getElementById("view-scores-btn");
var clearScoreBtnEl = document.getElementById("clear-scores-btn");
var submitScoreBtnEl = document.getElementById("submit-score-btn");
var displayInitEl = document.getElementById("display-initials");
var displayScoreEl = document.getElementById("display-score");
// var highScoresEl = document.getElementById("high-scores");
var highScoreLink = document.getElementById("view-scores-link");
var mainEl = document.getElementById("main-screen");
// var highScoreTabEl = document.getElementById("high-scores");

//Global variables to be used
var time = 61; //Time for the test set at 61 so when the timer appears it starts from 60
var answerSet = [];
var correct = 0;
var questionNumber = 1;
var timeCondition = false; //This is so that the -10 if statement in the setTime() function can only be ran once.

//Game div hidden at the beginning
gameEndEl.style.display = "none"; 
questionDiv.style.display = "none";
scoreEl.style.display = "none";


//Placing answers in objects.
var answer1 = ["var variable_name = Hi;", "var variable_name = 'Hi';", "var variable_name = ['Hi'];", "variable_name = 'Hi'"];
var answer2 = ["for(var i = 0; i < 30; i++) {}", "for(var i = 0, i < 30, i++) {}", "for(i = 0; i < 30; i++) {}", "for(i =0, i <30, i++) {}"];
var answer3 = ["groceryProducts[index];", "groceryProducts[i];", "groceryProducts[3];", "groceryProducts[2];"];
var answer4 = ["console.log(genre(music));", "console.log(music.genre);", "console.log(music(genre));", "console.log(genre.music);"];
var answer5 = ["Document Object Model", "Domain Object Methods", "Domain Object Model", "Document Object Methods"];
var answer6 = ["<button id= 'start-btn'></div>", "<div class = 'start-btn'></div>", "<button class= 'start-btn'></div>", "<div id = 'btn'></div>"];

//Function to display the answers in an ordered list
function displayQuestion() {
  //displaying the buttons in a random order (Not working!!!!)
  li1.textContent = answerSet[0];
  li2.textContent = answerSet[1];
  li3.textContent = answerSet[2];
  li4.textContent = answerSet[3];
  //appending ol to question div & appending li to ol
  answerEl.appendChild(li1);
  answerEl.appendChild(li2);
  answerEl.appendChild(li3);
  answerEl.appendChild(li4);
}

//Creating a list <li> to append in the question div
var li1 = document.createElement("button");
var li2 = document.createElement("button");
var li3 = document.createElement("button");
var li4 = document.createElement("button");

//Setting class to the lists to allow me to style it
li1.setAttribute("class", "answer-btn");
li2.setAttribute("class", "answer-btn");
li3.setAttribute("class", "answer-btn");
li4.setAttribute("class", "answer-btn");

//creating the timer function
function setTime() {
  var timerInterval = setInterval(function () {
    time--;
    timerEl.textContent = time + " :Seconds Remaining";
    if (time === 0) {
      clearInterval(timerInterval); //stops the execution of the code
      timerEl.textContent = "";
      gameOver();
    }

    if (questionNumber > 6) {
      clearInterval(timerInterval); //stops the execution of the code
      timerEl.textContent = "";
      gameOver();
    }

    //if incorrect is greater than 0 run -10 but the condition has to be true
    if (incorrect > 0 && timeCondition) {
      time = time - 10;
      timeCondition = false; //reseting the condition to false so it doesn't run again
    }
  }, 1000);

}

//making the timer activate when clicking start button
startEl.addEventListener("click", function () {
  setTime();
  generateQuestion();
  gameEndEl.style.display = "none";
  questionDiv.style.display = "block";
}, 1000);

//If any of these buttons are clicked and it matches the answer it returns correct else it returns incorrect
li1.addEventListener("click", function () {
  if (li1.textContent === "var variable_name = 'Hi';" || li1.textContent === "for(var i = 0; i < 30; i++) {}" || li1.textContent === "groceryProducts[2];" || li1.textContent === "console.log(music.genre);" || li1.textContent === "Document Object Model" || li1.textContent === "<button id= 'start-btn'></div>") {
    correct += 1;
    questionNumber++;
    generateQuestion();
  } else {
    questionNumber++;
    timeCondition = true; //this is to run the -10 seconds from the timer.
    generateQuestion();

  }

}, 1000);

li2.addEventListener("click", function () {
  if (li2.textContent === "for(var i = 0; i < 30; i++) {}" || li2.textContent === "groceryProducts[2];" || li2.textContent === "console.log(music.genre);" || li2.textContent === "Document Object Model" || li2.textContent === "<button id= 'start-btn'></div>") {
    correct += 1;
    questionNumber++;
    generateQuestion();
  } else {
    questionNumber++;
    timeCondition = true;
    generateQuestion();

  }
}, 1000);

li3.addEventListener("click", function () {
  if (li3.textContent === "var variable_name = 'Hi';" || li3.textContent === "for(var i = 0; i < 30; i++) {}" || li3.textContent === "groceryProducts[2];" || li3.textContent === "console.log(music.genre);" || li3.textContent === "Document Object Model" || li3.textContent === "<button id= 'start-btn'></div>") {
    correct += 1;
    questionNumber++;
    generateQuestion();
  } else {
    questionNumber++;
    timeCondition = true;
    generateQuestion();

  };
}, 1000);

li4.addEventListener("click", function () {
  if (li4.textContent === "var variable_name = 'Hi';" || li4.textContent === "for(var i = 0; i < 30; i++) {}" || li4.textContent === "groceryProducts[2];" || li4.textContent === "console.log(music.genre);" || li4.textContent === "Document Object Model" || li4.textContent === "<button id= 'start-btn'></div>") {
    correct += 1;
    questionNumber++;
    generateQuestion();
  } else {
    questionNumber++;
    timeCondition = true;
    generateQuestion();

  }
}, 1000);

//Function to ask questions
function generateQuestion() {
  if (questionNumber === 1) {
    questionEl.textContent = "1. What is the proper way to declare a string variable containing the message Hi? ________";
    //This randomizes the information in the array so that they do not appear in the same place.
    var shuffledAnswer = answer1.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);

    console.log(shuffledAnswer);
    answerSet = shuffledAnswer;

    displayQuestion();
  }

  if (questionNumber === 2) {
    questionEl.textContent = "2. Which one of these statements is properly declared?";
    answerSet = answer2.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    displayQuestion();
  }

  if (questionNumber === 3) {

    questionEl.textContent = "3. A list of grocery products have been declared in an array -\n var groceryProducts = ['Eggs', 'Milk', 'Cheese', 'Bacon'];\n Select the statement that would get Cheese from the array. _______________";
    answerSet = answer3.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    displayQuestion();

  }

  if (questionNumber === 4) {
    questionEl.textContent = "4. Console log the genre which belongs to the music object. _________";
    answerSet = answer4.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    displayQuestion();

  }

  if (questionNumber === 5) {
    questionEl.textContent = "5. What does DOM stand for? ________"
    answerSet = answer5.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    displayQuestion();


  }

  if (questionNumber === 6) {
    questionEl.textContent = "6. What div is this statement accessing document.getElementByID('start-btn');? _______"
    answerSet = answer6.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    displayQuestion();

  }

}


function gameOver() {
  //Start Button Disappears
  startDiv.style.display = "none"; 
  //Buttons to view & edit scores appear
  gameEndEl.style.display = "block"; 
  //All questions are no longer visible to interact with
  questionDiv.style.display = "none"; 
  scores();
}


function scores() {
  //Puts the amount you got correct into local storage
  localStorage.setItem("score", correct);
  finalScoreEl.textContent = "Your final Score is: " + correct;
}


submitScoreBtnEl.addEventListener("click", function (event) {
  event.preventDefault(); //stops the page from refreshing

  //retrieving value from input field initials
  var enteredInitials = document.querySelector("#initials").value;

  if (enteredInitials === "") {
    alert("Error Initials cannot be blank");
    return;
  } 
  var retrieveInitials = localStorage.getItem("initials");
  //separates the initials and the score with a dash
  var newInitials = enteredInitials + "-" + correct;

  if(retrieveInitials) {
    //separates each value to print with a comma
    newInitials += ", " + retrieveInitials;
  }

  //Save Initials to local storage to be used in view Highscore
  localStorage.setItem("initials", newInitials);
})

//This Displays the scores that were saved in local storage
highScoreBtnEl.addEventListener("click", function() {
  scoreEl.style.display = "block";
  var retrieveInitials1 = localStorage.getItem("initials");
  var retrieveScores1 = localStorage.getItem("score");

  displayInitEl.textContent = retrieveInitials1;
  displayScoreEl.textContent = retrieveScores1;
});

//Clears local high score
clearScoreBtnEl.addEventListener("click", function () {

  localStorage.clear();
  //Reloads page to remove text-content
  location.reload();
})

//This Displays the scores that were saved in local storage on another clickable event
highScoreLink.addEventListener("click", function () {
  scoreEl.style.display = "block";
  var retrieveInitials2 = localStorage.getItem("initials");
  var retrieveScores2 = localStorage.getItem("score");

  displayInitEl.textContent = retrieveInitials2;
  displayScoreEl.textContent = retrieveScores2;
})

mainEl.addEventListener("click", function() {
  location.reload();
})