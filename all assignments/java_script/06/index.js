/*
//@ CH 12 - 13
//! ASSIGNMENT => 1
//@ Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.
//? TAKE INPUT FROM USER
let ch = prompt("Enter a character: (number or string) ");
//? check the input is number or not
if (ch >= 0) {
  alert("the value you given is a number");
  console.log("number");
}
//? check the input is uppercase string
else if (ch == String(ch)) {
  alert("value is string");

  if (ch == ch.toUpperCase() && ch != ch.toLowerCase()) {
    alert("value is capital string");
  } else {
    alert("value is lower string");
  }
}

*/

//! ASSIGNMENT => 2

//@ Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
//? take input form a user

alert("give me 2 integers (numbers) , i can tell you which one is greater");
let integer1 = +prompt(" Please enter an integer 1");
let integer2 = Number(prompt(" Please enter an integer 2"));

//* it show wrong ans ... reason don't know

if (integer1 > integer2) {
  //   alert();
  console.log("1st is greater");
} else {
  // alert("the  value you given is greater");
  console.log("2nd is greater");
}

//////////////////////

alert("again 2 numbers");

let int_1 = prompt("1st number");
let int_2 = prompt("2nd number");

if (int_1 = int_2) {
  console.log(int_1, "is greater");
  alert(int_1);
} else if (int_1 < int_2) {
  console.log(int_2, "is greater");
  alert(int_2);
} else if (int_1 = int_2) {
  alert("both values are same");
}

/*
//! ASSIGNMENT => 3

//@ Write a program that takes input a number from user & state whether the number is positive, negative or zero.

//? take input from user

let number = prompt(
  "Enter any number: i'll tell you  whether its positive or negative "
);

if (number > 0) {
  console.log(number + " is a positive number");
  alert("your number is positive");
} else if (number == 0) {
  console.log(number + " is  zero");
  alert("your number is zero");
} else if (number < 0) {
  console.log(number + " is a Negative number");
  alert("your number is negative");
}

//! ASSIGNMENT => 4

//@ Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

let vowel = ["a", "e", "i", "o", "u"];
let vowelStr = prompt(
  "give me any character , i'll tell you  whether it is a vowel or not"
);

if (vowel.includes(vowelStr)) {
  console.log(vowelStr + " is a vowel");
  alert("it's a vowel");
} else {
  console.log(vowelStr + " is not vowel");
  alert("it's not a vowel");
}

//! ASSIGNMENT => 5

//@ password

let realPassword = "sqb";

let password = prompt("please enter your password:");

if (!password) {
  prompt("write your password ");

  if (password === realPassword) {
    alert("password is correct");
  } else {
    alert("incorrect password");
  }
} else if (password === realPassword) {
  alert("password is correct");
} else if (password != realPassword) {
  alert("incorrect password");
}

//! ASSIGNMENT => 6

var greeting;
var hour = prompt("what time is it");
if (hour < 18) {
  greeting = "Good day";
  alert(greeting);
} else {
  greeting = "Good evening";
  alert(greeting);
}

//! ASSIGNMENT => 7

let time = prompt(
  "Enter the time in 24-hour clock format (e.g. 1900 for 7pm):"
);

if (time >= 0000 && time < 1200) {
  console.log("morning");
  alert("it's morning time");
} else if (time >= 1200 && time < 1700) {
  console.log("afternoon");
  alert("it's afternoon time");
} else if (time >= 1700 && time < 2100) {
  console.log("evening");
  alert("it's evening time");
} else if (time >= 2100 && time < 2359) {
  console.log("night");
  alert("it's night time");
} else {
  console.log("invalid");
  alert("it's invalid format");
}

*/
