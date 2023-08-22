var timer = 40;
var newHit;
var score = 0;

function makeBubble() {
   var clutter = "";
   var mediaQuery = window.matchMedia('(max-width: 600px)')

   if (mediaQuery.matches) {
      console.log("300")
      for (var i = 1; i < 41; i++) {
         var rn = Math.floor(Math.random() * 10)
         clutter += `<div class="bubble">${rn}</div>`
      }
      document.querySelector(".pbtm").innerHTML = clutter

   }
   else {
      console.log("700")
      for (var i = 1; i < 161; i++) {
         var rn = Math.floor(Math.random() * 10)
         clutter += `<div class="bubble">${rn}</div>`
      }
      document.querySelector(".pbtm").innerHTML = clutter

   }

// document.querySelector(".pbtm").innerHTML = clutter

   //Math.random() gives random number between 0 & 1 viz in decimal
   //Multiplying 10 with the Math.random() function gives a whole number followed by decimmal eg. 1.263, 5.123, 9.2134
   //Using floor function to Math.random()*10, it will give a random single digit number
}

function runTimer() {
   var timerint = setInterval(function () {
      if (timer > 0) {
         timer--;
         document.querySelector(".timerval").textContent = timer;
      }
      else {
         clearInterval(timerint);
         document.querySelector(".pbtm").innerHTML = `<h1 class="over">Game Over</h1>`;
      }
   }, 1000);
}

function getNewHit() {
   newHit = Math.floor(Math.random() * 10);
   document.querySelector(".hitval").textContent = newHit;
}

function increaseScore() {
   score += 10;
   document.querySelector(".scoreval").textContent = score;
}

document.querySelector(".pbtm").addEventListener("click", function (dets) {
   var clickedNumber = (Number(dets.target.textContent));
   if (clickedNumber === newHit) {
      increaseScore();
      getNewHit();
      makeBubble();
   }
})

var box1 = document.querySelector(".box1");
var icon = document.querySelector(".icon");
var bg = document.querySelector(".bg-image");

box1.addEventListener("click", function() {
   console.log("working")
   document.body.classList.toggle("dark-theme");
   if(document.body.classList.contains("dark-theme"))
   {
      icon.src="half-moon.png";
      bg.style.backgroundImage = "url('pink.jpg')";

   }
   else{
      icon.src="cloud.png";
      bg.style.backgroundImage = "url('night.png')";
   }

})

getNewHit();
runTimer();
makeBubble();
