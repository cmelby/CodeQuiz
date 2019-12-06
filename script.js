

// ----use this as example for hiding the start btn and starting the next div------//
var startbtnEl = document.querySelector("#start-btn");
var qaEl = document.querySelector("#qa") 
var questionsEl = document.querySelector("#questions-asked");
var answersEl = document.getElementById("answers");

var qCount = 0;
console.log(questions);


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
    li.innerHTML = "<button class=btn-primary btn-lg>" + questions[qCount].choices[i] + "</button>";
    answersEl.appendChild(li);
    

  }
  

  qCount++;

}


answersEl.addEventListener("click", renderqa);

 // li.addEventListener("click", function(event) {

  //   if (event.target.innerHTML !==questions[qCount].answer) {
  //     event.stopPropagation();
  //     console.log("No");
  //   } else if  (event.target.innerHTML === questions[qCount].answer) {
  //       event.stopPropagation();
  //     console.log("you goooo ddawg");
  //   };
  //   });

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