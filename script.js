

// ----use this as example for hiding the start btn and starting the next div------//
var startbtnEl = document.querySelector("#start-btn");
var qaEl = document.querySelector("#qa") 
var questionsEl = document.querySelector("#questions-asked");
var answersEl = document.getElementById("answers");

var qCount = 0;
console.log(questions);

var totalSeconds = 60;
var secondsElapsed = 0;
var interval;
var timeLeft;

var tremaningEl = document.getElementById("tremaining")

  // // ------------set and calculate time ---------------------------

  function startTime () {
    interval = setInterval( function() {
        secondsElapsed++;
        renderTimeLeft();
    }, 1000);
  };
  function calcTimeLeft () {
    var timeLeft;
      timeLeft = totalSeconds - secondsElapsed;
      return timeLeft;
  }
  function stopTimer() {
      secondsElapsed = 0;
      clearInterval(interval);
  }   
  function renderTimeLeft() {
    tremaningEl.textContent = calcTimeLeft();
    if (secondsElapsed >= totalSeconds) {
      alert("Times up!");
      stopTimer(); 
    //   endGame(); //define this too!!
      }
  }   

  //-------start timer and trigger Q&A, timer calculation and render----//
startbtnEl.addEventListener("click", function(event){
  event.preventDefault();
  qaEl.classList.remove("hide");
  startbtnEl.classList.add("hide");
  renderqa();
  startTime();
  renderTimeLeft();
});

function renderqa() {
  questionsEl.innerHTML = "";
  answersEl.innerHTML = "";

  questionsEl.textContent = questions[qCount].title;

  for (var i = 0; i < questions[qCount].choices.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = "<button class='btn-primary btn-lg mb-2'>" + questions[qCount].choices[i] + "</button>";
    answersEl.appendChild(li);
    

  }
  qCount++;
}

 // li.addEventListener("click", function(event) {

  //   if (event.target.innerHTML !==questions[qCount].answer) {
  //     event.stopPropagation();
  //     console.log("No");
  //   } else if  (event.target.innerHTML === questions[qCount].answer) {
  //       event.stopPropagation();
  //     console.log("you goooo ddawg");
  //   };
  //   });

//------create funciton to grab user input-----//
var userForm = document.querySelector("#user-form");
var userInput = document.querySelector("#user-input");
var user = [];

//------store user imput-----//

function storeUser() {
  // Stringify and set "user" key in localStorage to todos array
  localStorage.setItem("user", JSON.stringify(user));
}

// When form is submitted...
userForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var userText = userInput.value.trim();
  userText.push(user);

  storeUser();
});

//--store the answers clicked -------------------------//

// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});

  //-----event listeners-------//
  answersEl.addEventListener("click", renderqa);