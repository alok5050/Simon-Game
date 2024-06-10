var buttonColours = ["red","blue","green","yellow"];
gamePattern = [];
var level = 0;
var started = false;


$(document).keypress(function(){

    if(!started){

        $("#level-title").text("Level" + level);

        nextSequence();
        started = true;
    }
});


function nextSequence(){
    
    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);  // random number generator between 1 to 3.
    var randomChosenColour = buttonColours[randomNumber]; // random color generator
    gamePattern.push(randomChosenColour);

$( "#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);
};


userClickedPattern = [];  // empty array 


$(".btn").on("click", function() {

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);

    // console.log(userClickedPattern);
});


function playSound(name){
    
    var audio = new Audio("sounds/" + name + ".mp3");
    
    audio.play();
};


function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        
        $("#" + currentColour).removeClass("pressed");

    }, 100);

    }

    function checkAnswer(currentLevel){

        if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
               console.log("success");

            if(gamePattern.length === userClickedPattern.length)
                setTimeout(function(){

                    nextSequence();
            
                }, 1000);
        else{
            
           console.log("wrong");


                $("body").addClass("game-over");
    
                playSound("wrong");
            
                    setTimeout(function(){
            
                        $("body").removeClass("game-over");
            
                    }, 200);

                $("#level-title").text("Game Over, Press Any Key To Restart");

                 startOver();

            }
        }


    function startOver(){

        level = 0;
        gamePattern = [];
        started = false;
    }



    
  


    



