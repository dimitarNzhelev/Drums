//Detecting button pressed
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  
document.querySelectorAll("button")[i].addEventListener("click", 
function () {
    button = this.innerHTML;
    makesound(button);    
    buttonAnimation(button);
        }
    );
}

//Detecting key press
document.addEventListener("keydown", function (event) {

    makesound(event.key);
    buttonAnimation(event.key);    
}
);

//Make Sound
function makesound(button) {
    switch (button) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
 
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
           
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
               
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
           
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        default: console.log(button);
    }
}

function buttonAnimation(key) {

   var activebutton =  document.querySelector("."+key);
   activebutton.classList.add("pressed");
   
   setTimeout(function(){
    activebutton.classList.remove("pressed");
   },100);
}