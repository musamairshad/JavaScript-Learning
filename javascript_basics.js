// ...JavaScript Learning...

// Data types.
// alert("Hello, World!");
// alert(2 + 3);
// alert(typeof(23));
// alert(typeof("Hello"));
// alert(typeof(true));

// Concatenation.
// prompt("What is your name?");
// var myName = "Usama";
// // alert(myName);
// var yourName = prompt("What is your name?");
// alert("My name is " + myName + ", welcome to my course " + yourName + "!");

// var gameLevel = 1;
// gameLevel = 2;
// gameLevel = 3;
// alert("Your level is currently: " + gameLevel);

// var a = 3;
// var b = 8;

// // Variable swaping.
// var c = a;
// a = b;
// b = c;
// alert("a is " + a + " & " + "b is " + b);


// Variable naming styles.
// var myName = "Usama";
// var yourName = "Ahmed";
// var my123 = 123;
// var userScoreFinal = 12; // CamelCase.

// alert("Hello" + " " + "World");
// alert("Hello " + " World");


// String Concatenation.
// var messege = "Hello";
// var name = prompt("What is your name?");
// alert(messege + " there, " + name);

// var name = "Usama";
// name.length;

/* var tweet = prompt("Compose your tweet: "); */
// var tweetCount = tweet.length;
// alert("You have written " + tweetLength + " characters and you have " + (140 - tweetLength) + " characters left.");

// var name = "Usama";
// name.slice(0, 1);
// name.slice(4, 5);
// name.slice(0, 3);
// name.slice(1, 5);

// var tweet = prompt("Compose your tweet: ");
// var tweetUnder140 = tweet.slice(0, 140);
// alert(tweetUnder140);
// alert(tweet.slice(0, 140));

// var name = "Usama";
// name = name.toUpperCase();
// name = name.toLowerCase();
// var name = prompt("Enter your name: ");
// name.toUpperCase();


// capitalized First Character of Name.
// 1st Method.
// var name = prompt("Enter your name: ");
// alert(name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase());

// 2nd Method.
// var name = prompt("Enter your name: ");
// var firstChar = name.slice(0, 1);
// var upperCaseFirstChar = firstChar.toUpperCase();
// var restOfName = name.slice(1, name.length);
// restOfName = restOfName.toLowerCase(); // Extra step and it is optional.
// var capitalizedName = upperCaseFirstChar + restOfName;
// alert("Hello, " + capatalizedName);

// var dogAge = prompt("Enter your dog's age: ");
// var humanAge = ((dogAge - 2) * 4) + 21;
// alert("The age of a dog if it was human is: " + humanAge);

// var x = 5;
// var y = 3;
// x += y;
// x = x + y
// x++;
// x = x + 1;
// x--;
// x = x - 1;


// function getMilk() {
//     console.log("Leave House.");
//     console.log("Move Right.");
//     console.log("Move Right.");
//     console.log("Move Up.");
//     console.log("Move Up.");
//     console.log("Move Up.");
//     console.log("Move Up.");
//     console.log("Move Right.");
//     console.log("Move Right.");
//     console.log("Buy Milk.");
//     console.log("Move left.");
//     console.log("Move left.");
//     console.log("Move Down.");
//     console.log("Move Down.");
//     console.log("Move Down.");
//     console.log("Move Down.");
//     console.log("Move left.");
//     console.log("Move left.");
//     console.log("Enter House.");
// }

// getMilk();


// ...Karel World Functions practice...
// function main(){
//     goInCircle();
//     goInCircle();
//  }
 
//  function goInCircle() {
//     move();
//     turnLeft();
//     move();
//     turnLeft();
//  }

// function main(){
//     bottomLeftToTopRight();
//  }
 
//  function bottomLeftToTopRight() {
//     moveFourTimes();
//     turnLeft();
//     moveFourTimes();
//  }
 
//  function moveFourTimes() {
//     move();
//     move();
//     move();
//     move();
//  }


// function main(){
//     putBeeper();
//     diagonalMoveAndBeeper();
//     diagonalMoveAndBeeper();
//     diagonalMoveAndBeeper();
//     diagonalMoveAndBeeper();
//  }
 
 
//  function diagonalMoveAndBeeper() {
//     move();
//     turnLeft();
//     move();
//     putBeeper();
//     turnRight();
//  }



// ...Chess Board movement of karel...
// function main(){
//     moveRightAndPutBeepers();
//     moveUpAndTurnLeft();
//     moveLeftAndPutBeepers();
//     moveUpAndTurnRight();
//     moveRightAndPutBeepers();
//     moveUpAndTurnLeft();
//     moveLeftAndPutBeepers();
//     moveUpAndTurnRight();
//     moveRightAndPutBeepers();
//  }
 
 
//  function moveRightAndPutBeepers() {
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//  }
 
//  function moveUpAndTurnLeft() {
//     turnLeft();
//     move();
//     turnLeft();
//  }
 
//  function moveLeftAndPutBeepers() {
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//  }
 
//  function moveUpAndTurnRight() {
//     turnRight();
//     move();
//     turnRight();
//  }


// function getMilk(bottles) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy " + bottles + " bottles of milk."); // bottles = 12
//     var cost = bottles * 1.5;
        //Do something with cost.
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }
  
//   getMilk(12);


// Function for the number of bottles the robot will buy based on the amount of money that we provide 
// to robot.
// function numberOfBottlesRobotBuy(money) {
//   var numberOfBottlesBought = money / 1.5;
//   console.log("The numbers of bottles the robot will buy is " + Math.floor(numberOfBottlesBought));
// }

// numberOfBottlesRobotBuy(5);



// function that tells us how many days, weeks and months we have left if we live until 90 years old.
// function lifeInWeeks(age) {
//         var yearsLeft = 90 - age;
//         var x = yearsLeft * 365;
//         var y = yearsLeft * 52;
//         var z = yearsLeft * 12;    
//         console.log("You have " + x + " days, " + y + " weeks, " + "and " + z + " months left.");
// }

// lifeInWeeks(56);


// Functions that takes input and returns the output.
// function getMilk(money, costPerBottle) {
//         console.log("Leave House.");
//         console.log("Move Right.");
//         console.log("Move Right.");
//         console.log("Move Up.");
//         console.log("Move Up.");
//         console.log("Move Up.");
//         console.log("Move Up.");
//         console.log("Move Right.");
//         console.log("Move Right.");
//         // console.log("The numbers of bottles the robot will buy is " + Math.floor(numberOfBottlesBought));
//         console.log("buy " + calcNoOfBottles(money, costPerBottle) + " bottles of milk.");
//         console.log("Buy Milk.");
//         console.log("Move left.");
//         console.log("Move left.");
//         console.log("Move Down.");
//         console.log("Move Down.");
//         console.log("Move Down.");
//         console.log("Move Down.");
//         console.log("Move left.");
//         console.log("Move left.");
//         console.log("Enter House.");
    
//         return calcChange(money, costPerBottle);
//         // var change = calcChange(money, 1.5);
//         // return change; // Remainder of the division.
//     }
    
//     // var change = getMilk(4);
//     // console.log(change);
    
//     function calcNoOfBottles(startingMoney, costPerBottle) {
//         var numberOfBottlesBought = Math.floor(startingMoney / costPerBottle);
    
//         return numberOfBottlesBought;
//     }
    
//     function calcChange(startingAmount, costPerBottle) {
//         var change = startingAmount % costPerBottle;
//         return change;
//     }
    
//     console.log("Hello master, here is your " + getMilk(10, 3) + " change.");


// BMI Calculator.
// function bmiCalculator(weight, height) {
//         // var calculatedBmi = weight / (height * height);
//         // var calculatedBmi = weight / height ** 2;
//         // var calculatedBmi = weight / Math.pow(height, 2);
//         return Math.round(calculatedBmi);
//     }
    
//     var bmi = bmiCalculator(65, 1.8);
//     console.log(bmi);


// function add(num1, num2) {
        // console.log(num1 + num2); // num1 & num2 are arguments. you can accept n number of arguments.
// }
        
// add(5, 10) // 5 & 10 are parameters.

// function addNumbers() {
//         let sum = 0;
//         for (let i = 0; i < arguments.length; i++) { 
        // arguments is a built-in object that stores the received parameters.
//             sum += arguments[i];
//         }
    
//         return sum;
//     }
    
//     function addNumbersV2(...args) { // spread operator
//         let sum = 0;
//         for (let i = 0; i < args.length; i++) {
//             sum += args[i];
//         }
    
//         return sum;
//     }
    
//     // let ans = addNumbers(1, 2, 3, 4, 5, 6);
//     // console.log(ans);
    
//     let ans2 = addNumbersV2(1, 2, 3, 4, 5);
//     console.log(ans2);



// Arrow Functions

// 1. Syntax

// const sayHello = () => {
//         console.log("Hello");
//     };
    
//     const add = (a, b) => {
//         console.log(a + b);
//     };
    
//     const addV2 = (a, b) => a + b; // One Liner
    
//     let sum = addV2(5, 2);
//     console.log(sum);
    
//     // add(2, 5);
    
//     // sayHello();
    
//     // 2. 'arguments' keyword
//     const addNumbers = () => {
//         console.log(arguments); // Error
//     };
    
//     const addNumbersV2 = (...numbers) => {
//         console.log(numbers);
//     }
    
//     // addNumbers(1, 2, 3, 4, 5);
//     addNumbersV2(1, 2, 3, 4, 5);


// 3. Hoisting

// sayHi();

// Function stored in memory before we call it in JavaScript.
// function sayHi() {
//     console.log("Hi!");
// }

// Hoisting works only in the case of normal functions and
// it does'nt works in the case of arrow functions.


// 4. this keyword

// const myObj = {
//     value: 10,
//     myFunc: function () {
//       console.log(this.value); // In this case this
        // keyword refers to the current object in which it
        // is being used.
//     },
// }

// myObj.myFunc();

// const myObj = {
//         value: 10,
//         myFunc: () => {
//           console.log(this); // In this case of arrow function
//         this keyword refers to window object (window of 
//         browser) we can say as arrow functions has global
//         scope.
//         },
//     }
    
//     myObj.myFunc();