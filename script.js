

// ----use this as example for hiding the start btn and starting the next div------//
var startbtnEl = document.querySelector("#start-btn");
var qaEl = document.querySelector("#qa") 
var questionsEl = document.querySelector("#questions-asked");
var answersEl = document.getElementById("answers");
// var liEl = docuemnt.getElementById()

var qCount = 0;
console.log(questions);


// function startButton(event) {

//     qaEl.classList.remove("hide");
//     startbtnEl.classList.add("hide");
//     renderqa();
// };

startbtnEl.addEventListener("click", function(event){
  event.preventDefault();
  qaEl.classList.remove("hide");
  startbtnEl.classList.add("hide");
  renderqa();
});

function renderqa() {
  // Clear todoList element and update todoCountSpan
  questionsEl.innerHTML = "";
  answersEl.innerHTML = "";

  // var span = document.createElement("span");
  questionsEl.textContent = questions[qCount].title;

  // Render a new li for each todo
  for (var i = 0; i < questions[qCount].choices.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = "<button>" + questions[qCount].choices[i] + "</button>";
    answersEl.appendChild(li);


  }
qCount++;
}

answersEl.addEventListener("click", renderqa);


