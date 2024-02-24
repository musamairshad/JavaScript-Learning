// ...Intermediate JavaScript Learning...

// Dice roll numbers generator.
// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n);


// // Love Calculator.
// alert("Welcome to The Love Calculator: ");
// var firstPerson = prompt("Enter the name of 1st person: ");
// var secondPerson = prompt("Enter the name of 2nd person: ");

// var n = Math.random();
// n = n * 100;
// n = Math.floor(n) + 1;

// if(n > 70) {
//     alert("Your love score is " + n + " %" + " You love each other like Kanye loves Kanye.");
// }

// if (n > 30 && n <= 70) {
//     alert("The Love Score between " + firstPerson + " & " + secondPerson + " is " + n + " %");
// }

// if (n <= 30) {
//     alert("The Love Score between " + firstPerson + " & " + secondPerson + " is " + n + " %" + " You go together like oil and water.");
// }

// else {
//     alert("Your love score is " + n);
// }


// var a = 1;
// var b = "1";
// if (a === b) {
//     console.log("Yes.");
// } else {
//     console.log("No."); // This one executes.
// }


// var a = 1;
// var b = "1";
// if (a == b) {
//     console.log("Yes."); // This one executes.
// } else {
//     console.log("No.");
// }


// BMI Calculator.
// function bmiCalculator (weight, height) {
//     var bmi = weight / (height * height);
//     if(bmi < 18.5) {
//         return "Your BMI is " + bmi + ", so you are underweight.";
//     }
    
//     if(bmi >= 18.5 && bmi <= 24.9) {
//         return "Your BMI is " + bmi + ", so you have a normal weight.";
//     }
    
//     if(bmi > 24.9) {
//         return "Your BMI is " + bmi + ", so you are overweight.";
//     }
// }


// Leap Year Program.
// function isLeap(year) {
//     if (year % 4 == 0) {
//         if(year % 100 == 0) {
//             if(year % 400 == 0) {
//                     console.log("Leap year.")
//                 } else {
//                     console.log("Not leap year.");
//                 }
//             } else {
//                 console.log("Leap year.")
//             }
//         } else {
//             console.log("Not leap year.");
//         } 
// }


// var guestName = prompt("Enter the name of guest which you want to check in the array: ");
// var guestList = ["Usama", "Daniyal", "Bilal", "Ahmed", "Hassan"];
// if (guestList.includes(guestName)) {
//     alert("Welcome!");
// } else {
//     alert("Sorry, next time :)");
// }
// console.log(guestList[1]);
// console.log(guestList.includes("Daniyal"));


// FizzBuzz Problem.
// var output = [];
// var n = 1;

// function fizzBuzz() {
//     if (n % 3 == 0 && n % 5 == 0) {
//         output.push("FizzBuzz");
//     }
//      else if (n % 3 == 0) {
//         output.push("Fizz");
//     } else if (n % 5 == 0) {
//         output.push("Buzz");
//     } else {
//         output.push(n);
//     }
//     n += 1;
//     console.log(output);
// }

// fizzBuzz();


// function whosPaying(names) {
//     var n = Math.random();
//     n = n * names.length;
//     n = Math.floor(n);
//     var name = names[n];
//     return name + " is going to buy lunch today!";   
// }

// whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);

// While Loop.
// var i = 1;
// while (i <= 2) {
//     console.log(i);
//     i++;
// }

// function milkShake() {
//     var i = 99;
//     var word = "bottles";
//     while (i >= 0) {
//         var oneDown = i - 1;
//         if (i > 1) {
//             console.log(i + " " + word + " of Milkshake on the wall, " + i + " " + word + " of Milkshake.");
//             console.log("Take one down and pass it around, " + oneDown + " " + word + " of Milkshake on the wall.");
//         } else if (i == 1 && oneDown == 0) {
//             word = "bottle";
//             console.log(i + " " + word + " of Milkshake on the wall, " + i + " " + word + " of Milkshake.");
//             console.log("Take one down and pass it around, " + "no more bottles of Milkshake on the wall.");
//         } else {
//             oneDown = 99;
//             console.log("No more bottles of Milkshake on the wall, " + "no more bottles of Milkshake.");
//             console.log("Go to the store and buy some more, " + oneDown + " bottles of Milkshake on the wall.");
//         }
//         console.log("");
//         i--;
//     }
// }
