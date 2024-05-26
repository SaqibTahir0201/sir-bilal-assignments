//$ STRING METHODS
//! QUESTION => 1
// ?Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
/*
let firstName = prompt("enter your first name")
 let lastName = prompt("enter your last name")
 console.log(firstName + " " + lastName);
 alert(firstName + " " + lastName)
 
 //! QUESTION => 2
 ?Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
 
let phoneModel = prompt("enter your phone model")
console.log(phoneModel + "... " + "and the length is =>" + phoneModel.length );

 //! QUESTION => 3
 ?Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
 

let country = "pakistan"
console.log(country.indexOf("n"));

//! QUESTION => 4

// ? Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

let word = "hello world"
console.log(word.lastIndexOf("l"));

//! QUESTION => 5
// ? Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your
let country = "pakistan";
console.log(country[3]);

//! QUESTION => 6
//? Repeat Q1 using string concat() method.
let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

const both = arr.concat(arr2);

console.log(both);
//[1, 2, 3, 4, 5, 6, 7, 8]


//! QUESTION => 7
// ? Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

let cityName = "hyderabad";

console.log(cityName.replace("hyder","islam"));
//! QUESTION => 8
// ? Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

let message = "Ali and Sami are best friends. They play cricket and football together.";

console.log(message.replaceAll("and","&"));


//! QUESTION => 9
// ? Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

let number = "472";
console.log(number + " is a " + typeof number);

number = parseInt("472");
console.log(number + " is a " + typeof number);



//! QUESTION => 10
// ? Write a program that takes user input. Convert and show the input in capital letters.

let userInput = prompt("enter your favorite fruit name");
console.log(userInput.toUpperCase());


//! QUESTION => 11
// ? Write a program that takes user input. Convert and show the input in title case.

let userInput = prompt("enter your favorite fruit name");
console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1));


//! QUESTION => 12
// ? Write a program that converts the variable num to string.
// @ nhi hua
debugger
let num = 35.36 ;
console.log(typeof num.toString());
console.log(num[2].replace(" ") + num.slice(0,1) + num.slice(3));


//! QUESTION => 13

// ? Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

//$ Note:
//* ASCII code of ! is 33
//* ASCII code of , is 44
//* ASCII code of . is 46
//* ASCII code of @ is 64

let userName = prompt("enter your username");

for (let i = 0; i < userName.length; i++) {
  if (/[!@.," "]/.test(userName)) {
    console.log("enter a valid username.");
    userName = prompt("enter a valid username");
}
}

console.log(userName);

//! QUESTION => 14

// ? Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("what do you want to order");

for (let i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput.toLowerCase()) {
    console.log(`${A[i]} is found in the list in the index of ${A[i].indexOf(userInput)}`);
    break;
  } else {
    console.log(userInput + " is not found in the list.");
    break;
  }
}



//! QUESTION => 15

// ? Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long
// @ nhi hua

//! QUESTION => 16

// ? Write a program to convert the following string to an array using string split method
let university = "University of Karachi";

console.log(university.split(""));


//! QUESTION => 17

// ? Write a program to display the last character of a user input.

let userInput = prompt("enter your favorite fruit name");
console.log(userInput.charAt(userInput.length - 1));
*/
//! QUESTION => 17

// ? Write a program to count number of occurrences of word “the” in given string.

let animal = "The quick brown fox jumps over the lazy dog";
let count = 0;
for (let i = 0; i < animal.length; i++) {
  if (animal.includes("the")) {
    count++;
}
}
console.log(count);
