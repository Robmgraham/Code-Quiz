
//          COUNTDOWN TIMER
var startTimer = document.querySelector(".startButton");
var timeleft = 0;
startTimer.addEventListener("click", function () {
  timeleft = 60;
  var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished";
    } else {
      document.getElementById("countdown").innerHTML = timeleft + "seconds remaining";
    }
    timeleft -= 1;
    console.log(timeleft);
  }, 1000);

});



var Q1 = document.querySelector(".startButton")
Q1.addEventListener("click", function () {
  document.body.children[3].childNodes[3].style.display = "block"; //first question appears
  document.body.children[4].style.display = "block"; //next button appears



  var Q2 = document.querySelector(".nextButton")
  Q2.addEventListener("click", function () {
    document.body.children[3].children[1].style.display = "block";  // second question appears
    document.body.children[3].childNodes[3].style.display = "none"; // first question dissapears
    document.body.children[4].style.display = "none"; //next button dissapears
    document.body.children[5].style.display = "block"; //finish button appears

  });

  //what does the finish button do.
  var fin = (document.body.children[5]);
  fin.addEventListener("cick", function () {
    document.body.children[5].style.display = "none"; //finish button dissapears
    document.body.children[3].children[1].style.display = "none"; // second question dissapears
  
  });


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
      timeleft -= 30; console.log(timeleft);
    }

  });

}
displayScore();
