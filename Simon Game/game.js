var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);
}