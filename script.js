var timer = 60;
var Score = 0;
var hitrn = 0;


function increaseScore (){
    Score += 10;
    document.querySelector("#scoreval").textContent = Score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector(".elem #hitval").textContent = hitrn.toString(); // Convert to string because `textContent` expects a string
}
function makeBubble(){
var clutter = "";
 
for(var i = 1; i<=112; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer() {
    var timerint = setInterval(function () {
      if (timer > 0) {
       timer--;
       document.querySelector("#timerval").textContent = timer;
    } else {
       clearInterval(timerint);
       document.querySelector("#pbtm").innerHTML =`<h1>Game Over</h1>`
       // Update the hit number here

    }
   }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click", function(event) {
  var clickednum = Number(event.target.textContent);
  if(clickednum === hitrn){
    increaseScore();
    makeBubble(); 
    getNewHit();
  }
});

runTimer();
makeBubble(); 
getNewHit();
