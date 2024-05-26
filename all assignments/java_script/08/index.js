// //$ ARRAYS AND LOOPS:

// //! QUESTION => 3
// //? Write a program to print numeric counting from 1 to 10.

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }


// //! QUESTION => 4
// //? Write a program to print multiplication table of any number

// var multiply = prompt("enter any number for it's multiplication");

// for (var i = 1; i <= 15; i++) {
//   console.log(multiply * i);
// }

// //* AGAIN
// var multiply = prompt("again enter any number for it's multiplication");

// for (var i = 1; i <= 15; i++) {
//   var number = multiply * i;

//   console.log(number);
// }

// //! QUESTION => 5

// //? Write a program to print items

// var items = ["apple", "banana", "mango","orange", "strawberry"]

// for (var i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// //! QUESTION => 6

// //? Generate the following
//$  A => Counting

// var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);

// }

//$  B => Reverse Counting

// var numbers = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 9; i >= 0; i--) {
//   console.log(numbers[i]);

// }

//$  C => Even

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//$  D => Odd

// for (let i = 0; i < 20; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }

// }

//$  E Series

// for (let i = 0; i < 20; i++) {
//   var number = i + "k";

//   console.log(number);
// }

// //! QUESTION => 7

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter your item").toLowerCase();
// var condition = false;

// for (var i = 0; i < bakery.length; i++) {
//   if (userInput === bakery[i]) {
//     console.log("user item found in index number" + " " + i);
//     condition = true;
//     break;
//   }
// }
// if (condition == false) {
//   console.log("not found");
// }



// //! QUESTION => 10

//? Write a program to print multiples of 5 ranging 1 to 100.

// for (let i = 5; i < 100; i++) {
  
//   if (i % 5 === 0) {
//     console.log(i);
//   }
  
// }
