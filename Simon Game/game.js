var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    var selectedButton = $("#" + randomChosenColor);
    selectedButton.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var s = new Audio("sounds/" + randomChosenColor + ".mp3");
    s.play();
}