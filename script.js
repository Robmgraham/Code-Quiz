
//          COUNTDOWN TIMER
var startTimer =document.querySelector(".startButton");

startTimer.addEventListener("click", function(timeleft){

var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";alert("your score is" + score);// maybe add an alert with score
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1; 
}, 1000)});


var score = 0
function displayScore() {
  document.getElementById("score").textContent=score;
  }
  displayScore()
  

function answerValidation(event) {
 
  console.log(this)
}