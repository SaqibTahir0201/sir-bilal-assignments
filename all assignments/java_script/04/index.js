//! Assignment 1 => Variables and Math Expressions:

//? first we declare two variables
let num1 = 10;
let num2 = 20;

//? now we first (sum)
let sum = num1 + num2;
console.log("sum:" + sum);

//? now we subtract
let sub = num1 - num2;
console.log("sub:" + sub);

//? now we multiply
let mul = num1 * num2;
console.log("mul:" + mul);

//? now we divide
let div = num1 / num2;
console.log("div:" + div);

//! Assignment 2 => Conditionals:
//? i use prompt here to get input from the user....otherwise it getting boring
let age = prompt("What is your age?");
if (age >= 18) {
  console.log("You are an adult and old enough to vote!");
} else {
  console.log("You are not old enough to vote yet!");
}

//! Assignment 3 => Array Initialization and Manipulation:

//? An empty array named fruits.

let fruits = [];

//? Use a loop to add the following five fruits to the fruits array: "apple", "banana", "orange", "grape", "kiwi".

for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    fruits.push("apple");
    console.log(fruits);
  } else if (i == 2) {
    fruits.push("banana");
    console.log(fruits);
  } else if (i == 3) {
    fruits.push("orange");
    console.log(fruits);
  } else if (i == 4) {
    fruits.push("grape");
    console.log(fruits);
  } else if (i == 5) {
    fruits.push("kiwi");
    console.log(fruits);
    //todo
    //? pehle console.log(fruits[i]) kerne per sahi a rha tha
  }
}

//! Assignment 4 => Looping through Arrays:
//? sir nai 4 dia the likn us sai array mai issue a rha tha
const newFruits = ["apple", "banana", "orange", "grape", "kiwi"];

for (let i = 0; i < fruits.length; i++) {
  //todo
  //? ager console.log(newFruits [i]) <= YAI i NA LGAE TO araay mai sub show honge her dfa
  console.log(newFruits[i]);
}

//! Assignment 5 => Pattern Printing with Nested Loops:

let n = 5;

for (let i = 1; i <= n; i++) {
  let pattern = "";

  for (let j = 0; j < i; j++) {
    pattern += "* ";
  }

  console.log(pattern);
}

//! Assignment 6 => Mathematical Operations with Loops:

//? calculate and print the sum of the first 10 natural numbers using a loop.

let plus = 0;
for (let i = 1; i <= 10; i++) {
  plus += i;
  console.log(plus);
}

//! Assignment 7 => Array Manipulation with Loop:

let colors = [];

for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    colors.push("red");
    console.log(colors);
  } else if (i == 2) {
    colors.push("green");
    console.log(colors);
  } else if (i == 3) {
    colors.push("blue");
    console.log(colors);
  } else if (i == 4) {
    colors.push("yellow");
    console.log(colors);
  } else if (i == 5) {
    colors.push("orange");
    console.log(colors);
  }
}

//! Assignment 8 => Accessing Array Elements:

let Colors = [];

for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    Colors.push("red");
    console.log(i + " - " + Colors);
  } else if (i == 2) {
    Colors.push("green");
    console.log(i + " - " + Colors);
  } else if (i == 3) {
    Colors.push("blue");
    console.log(i + " - " + Colors);
  } else if (i == 4) {
    Colors.push("yellow");
    console.log(i + " - " + Colors);
  } else if (i == 5) {
    Colors.push("orange");
    console.log(i + " - " + Colors);
  }
}

//! Assignment 9 => Reversing Array Elements:

let revColor = ['red' , 'green' , 'blue' , 'yellow' , 'orange'];

for (let i = 5; i > revColor.length; i--) {
  if (i == 5) {
    revColor.pop();
    console.log(i + "-" + revColor);
  } else if (i == 4) {
    revColor.pop();
    console.log(i + "-" + revColor);
  } else if (i == 3) {
    revColor.pop();
    console.log(i + "-" + revColor);
  } else if (i == 2) {
    revColor.pop();
    console.log(i + "-" + revColor);
  } else if (i == 1) {
    revColor.pop();
    console.log(i + "-" + revColor);
  }
}


