









//----use this as example for hiding the start btn and starting the next div------//
var startbtnEl = document.querySelector("#start-btn"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}


//-----use this function as an example for dynamically moving through the question and answers--//
function addPersonToList(event) { //creat my own function 
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");//target my list
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";//make this the [] of possible answers
  people.push({ name: name });
  peopleListEl.append(li);
}
//I am going to need a for loop to grab my + questions[questionindex] choices[i],
// questions++