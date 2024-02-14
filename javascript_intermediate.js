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
function isLeap(year) {
    if (year % 4 == 0) {
        if(year % 100 == 0) {
            if(year % 400 == 0) {
                    console.log("Leap year.")
                } else {
                    console.log("Not leap year.");
                }
            } else {
                console.log("Leap year.")
            }
        } else {
            console.log("Not leap year.");
        } 
}

