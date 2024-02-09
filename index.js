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
