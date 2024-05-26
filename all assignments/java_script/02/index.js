//! ASSIGNMENT 1 => pop() and push():

//? Create an array of fruits
var fruits = ["apple", "banana", "orange", "grape"];

//? Display all the fruits available initially
console.log("Available Fruits:", fruits);

//? Simulate a customer purchasing a fruit
var purchasedFruit = fruits.pop();
console.log("Purchased Fruit: ", purchasedFruit);

//? Display updated list of fruits
console.log("Remaining fruits after purchase", fruits);

//? Simulate adding new fruits to the stock
var newFruit = prompt("Enter a new fruit name:");
fruits.push(newFruit);
console.log("New fruit added. Updated Fruits:", fruits);

//! ASSIGNMENT 2 => shift() and unshift():

//? Extend the existing  scenario

console.log("last updated fruits", fruits);

//? New shipment of fruits arrives

var newFruitList = fruits.shift();
console.log("New Fruit list:", newFruitList, fruits);

//? newly arrived fruit

var newFruit = prompt("Name newly arrived fruit");
fruits.unshift(newFruit);
console.log("Newly arrived fruit:", newFruit, fruits);

//! ASSIGNMENT 3 => splice():

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

//? remove the numbers

var startNumber = prompt("Enter the starting index of the range to remove");
var endNumber = prompt("Enter the ending index of the range to remove");

//? Remove the specified range from the array
numbers.splice(startNumber, endNumber);
console.log("Updated Array:", numbers);

//! ASSIGNMENT 4 => slice():

//? Extend the existing  scenario
//? extracts a slice of numbers based on user input.
                   
var shrowNumber = prompt("Enter the starting index of the range to remove");
var akhirNumber = prompt("Enter the ending index of the range to remove");

numbers.slice(shrowNumber, akhirNumber);
console.log("New Updated Array:", shrowNumber, akhirNumber, numbers);

//! ASSIGNMENT 5 => length():

//? average of the numbers in the array using the length property.
//? Calculate the sum of all numbers in the array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (var i = 1; i <= 10; i++) {
  sum = sum + i;
  console.log(sum);

  //? now divide it by the length of the array to find the average.
  var average = sum / numbers.length;
}
console.log(average);


////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////

