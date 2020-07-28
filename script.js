
//          COUNTDOWN TIMER
var startTimer = document.querySelector(".startButton");
var timeleft = 0;
startTimer.addEventListener("click", function () {

   timeleft = 60;
  var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished"; alert("your score is" + score);// maybe add an alert with score
    } else {
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
    console.log(timeleft);
  }, 1000);
  
});



var score = 0;


function displayScore() {
  document.getElementById("score").textContent = score;
  document.querySelector(".container").addEventListener("click", function (event) {
    event.stopPropagation();
    var right = event.target.getAttribute("class");
    if (right === "correct") {
      score++;
      displayScore();
    }
    if (right === "wrong") {
      timeleft -= 5 ;console.log(timeleft);
    }
  });
 
}
displayScore();
 


  // (document.getElementsByClassName("container")).addEventListener("click", function (event) {
  //   event.stopPropagation();
  //   var right = event.target.getAttribute("class");
  //   if (right === "correct") {
  //     score++;
  //     displayScore();
  //   }
  //   if (right === "wrong") {
  //     timeleft -= 5;
  //   }
  // });
