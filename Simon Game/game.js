var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").on("click", function () {
    // var userChosenColour = $("#" + randomChosenColor).attr("id");
    // OR
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});

function nextSequence() {
    var randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    var selectedButton = $("#" + randomChosenColor);
    selectedButton.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var selectedButtonSound = new Audio("sounds/" + randomChosenColor + ".mp3");
    selectedButtonSound.play();
}