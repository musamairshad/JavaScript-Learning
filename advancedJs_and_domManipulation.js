// ...Advanced JavaScript & DOM Manipulation Learning...

// document.querySelector("button").addEventListener("click", handleClick());
// document.querySelector("button").addEventListener("click", handleClick);
// document.querySelector("button").addEventListener("click", function() {
//     alert("I got clicked.");
// });

// var noOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i < noOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("I got clicked.");
//         this.style.color = "white";
//         var buttonInnerHTML = this.innerHTML;
//         switch (buttonInnerHTML) {
//          case "w":
//              var tom1 = new Audio("sounds/tom-1.mp3");
//              tom1.play();
//              break;
//          case "a":
//              var tom2 = new Audio("sounds/tom-2.mp3");
//              tom2.play();
//              break;
//          case "s":
//              var tom3 = new Audio("sounds/tom-3.mp3");
//              tom3.play();
//              break;
//          case "d":
//              var tom4 = new Audio("sounds/tom-4.mp3");
//              tom4.play();
//              break;
//          case "j":
//              var snare = new Audio("sounds/snare.mp3");
//              snare.play();
//              break;
//          case "k":
//              var crash = new Audio("sounds/crash.mp3");
//              crash.play();
//              break;
//          case "l":
//              var kick = new Audio("sounds/kick-bass.mp3");
//              kick.play();
//              break;
//          default:
//              console.log(buttonInnerHTML);
//              break;
//      }

//     })
// }

// function handleClick() {
//     alert("I got clicked.");
// }


// function add(num1, num2) {
//     return num1 + num2;
// }

// function sub(num1, num2) {
//     return num1 - num2;
// }

// function mul(num1, num2) {
//     return num1 * num2;
// }

// function div(num1, num2) {
//     return num1 / num2;
// }


// Higher order function.
// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }

// calculator(2, 3, mul);
// calculator(10, 5, div);
// calculator(2, 3, add);