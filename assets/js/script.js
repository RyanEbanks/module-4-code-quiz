
/*
1. Start Button
2. Timer 
3. Questions (choose between A-D)
4. More Questions (choose between A-D)
5. More Questions (choose between A-D)
6. Bonus (Add like 6 sets of questions and make it add a random 3).
7. Incorrect Questions subtracts time from the clock.
8. When All questions are answered game over
9. When timer reaches 0 game over
10. Save Initials and score
11. View HighScore button
*/

//calling the ids to be used in the program
var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start-btn");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");

var time = 60;

  

  //Creating a list <li> to append in the question div
  var li1 = document.createElement("li");
  var li2 = document.createElement("li");
  var li3 = document.createElement("li");
  var li4 = document.createElement("li");

//creating the timer function
function setTime() {
    var timerInterval = setInterval(function() {
        time --;
        timerEl.textContent = time + " :Seconds Remaining";
        if(time === 0) {
            clearInterval(timerInterval); //stops the execution of the code
            //end the game here
        }
    }, 1000);
}

//making the timer activate when clicking start button
startEl.addEventListener("click", function() {
    setTime();
    GenerateQuestion();
}, 1000);

//Function to ask questions
function GenerateQuestion() {
questionNumber = 3;

if(questionNumber === 1) {

    //generating question
  questionEl.textContent = "What is the proper way to declare a string variable containing the message Hi? ________";

  //Placing answers in objects.
  var answers = ["var variable_name = Hi;",
  "var variable_name = 'Hi';", 
  "var variable_name = ['Hi'];", 
  "variable_name = 'Hi';"];

} if(questionNumber === 2) {
    questionEl.textContent = "Which one of these statements is properly declared?";

    var answers = ["for(var i = 0; i < 30; i++) {}",
    "for(var i = 0, i < 30, i++) {}",
    "for(i = 0; i < 30; i++) {}",
    "for(i =0, i <30, i++) {}"];

} if(questionNumber === 3) {
    questionEl.textContent = "A list of grocery products have been declared in an array -\n var groceryProducts = ['Eggs', 'Milk', 'Cheese', 'Bacon'];\n Select the statement that would get Cheese from the array. _______________"

    var answers = ["groceryProducts[index];",
                    "groceryProducts[i];",
                    "groceryProducts[3];",
                    "groceryProducts[2];"];

} if(questionNumber === 4) {
    questionEl.textContent = "Console log the genre which belongs to the music object. _________";

    var answers = ["console.log(genre(music));",
                    "console.log(music.genre);",
                    "console.log(music(genre));",
                    "console.log(genre.music);"];

  } if(questionNumber === 5) {
    questionEl.textContent = "What does DOM stand for? ________"

    var answers = ["Document Object Model",
                    "Domain Object Methods",
                    "Domain Object Model",
                    "Document Object Methods"];

  } if(questionNumber === 6) {
    questionEl.textContent = "What div is this statement accessing document.getElementByID('start-btn');? _______"

    var answers = ["<button id= 'start-btn'></div>",
                    "<div class = 'start-btn'></div>",
                    "<button class= 'start-btn'></div>",
                    "<div id = 'btn'></div>"];

  } else {
    //game over
    return ;
}

li1.textContent = answers[0];  
li2.textContent = answers[1];  
li3.textContent = answers[2];  
li4.textContent = answers[3];  

//appending ol to question div & appending li to ol
answerEl.appendChild(li1);
answerEl.appendChild(li2);
answerEl.appendChild(li3);
answerEl.appendChild(li4);
}

//make sure to get them to append










