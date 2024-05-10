var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);
    var selectedButton = $("#" + randomChosenColor);
    selectedButton.fadeOut(100).fadeIn(100);
    var sound = new Audio("sounds/" + randomChosenColor + ".mp3");
    sound.play();
}

$(".btn").on("click", function (e) {
    var userChosenColor = e["target"]["id"];
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
});
