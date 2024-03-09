// button clicked
for(let index=0; index<document.querySelectorAll("button").length; index++){
    var pressedButton = document.querySelectorAll("button")[index];

    pressedButton.addEventListener("click", function(){
        playMusic(this.classList[0]);
    });
}


// keyStrokes
document.addEventListener("keydown", function (e){
    playMusic(e.key);
});

// music player
function playMusic(pressedKey){
    switch (pressedKey) {
        case "w":
            animation("w");
            new Audio("./sounds/tom-1.mp3").play();
            break;
        
        case "a":
            animation("a");
            new Audio("./sounds/tom-2.mp3").play();
            break;
        
        case "s":
            animation("s");
            new Audio("./sounds/tom-3.mp3").play();
            break;
        
        case "d":
            animation("d");
            new Audio("./sounds/tom-4.mp3").play();
            break;
        
        case "j":
            animation("j");
            new Audio("./sounds/snare.mp3").play();
            break;
        
        case "k":
            animation("k");
            new Audio("./sounds/crash.mp3").play();
            break;
        
        case "l":
            animation("l");
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        
        default:
            console.log();
            break;
    }
}

// animation
function animation(getClassName){
    document.querySelector("."+getClassName).classList.toggle("pressed");
    setTimeout(function(){
        document.querySelector("."+getClassName).classList.toggle("pressed");
    },100);
}
