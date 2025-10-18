var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

   var  audio = new Audio("tom-1.mp3");
   audio.play();




  });

}
let newBtn = document.createElement("button");
document.querySelector(".wdrum").prepend(newBtn);
newBtn.addEventListener("click", function() {
    var audio = new Audio("tom-1.mp3");
    audio.play();

}
);

let newCtn = document.createElement("button");
document.querySelector(".adrum").prepend(newBtn);
newBtn.addEventListener("click", function() {
    var audio = new Audio("tom-2.mp3");
    audio.play();

}
);




