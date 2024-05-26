//@ CH 14 & 16 ARRAYS

//! ASSIGNMENT => 3

//?  Declare and initialize a strings array.

let strArray = ["Hello", "World"];
console.log(strArray);







//! ASSIGNMENT => 4
//? Declare and initialize a numbers array.

let numArray = [5, 3, -2];
console.log(numArray);

//! ASSIGNMENT => 5
//? Declare and initialize a numbers array.

let bolArray = [true, false, true];
console.log(bolArray);

//! ASSIGNMENT => 6
//? Declare and initialize a mixed array.

let mixArray = ["apple", 10, "banana", false, 7];
console.log(mixArray);

//! ASSIGNMENT => 7
//? Declare and Initialize an array and store available education qualifications

let eduQualification = [
    "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M.Phil",
  "PhD",
];


// document.write("<h1>""degrees[0")
document.write(`<ul className="ul">

<li>${degrees[o]}</li>
<li>${degrees[1]}</li>
<li>${degrees[2]}</li>
<li>${degrees[3]}</li>
<li>${degrees[4]}</li>
<li>${degrees[5]}</li>
<li>${degrees[6]}</li>
<li>${degrees[7]}</li>

</ul>`)


console.log(eduQualification);

//! ASSIGNMENT => 8
//?  display the scores & percentages of students

let studentName = ["michel", "john", "tony"];

let studentScore = [320, 230, 480];

for (let i = 0; i < studentName.length; i++) {
    let percentage = (studentScore[i] / 500) * 100;

    console.log(
        `Student ${studentName[i]} scored ${studentScore[i]} marks, which is ${percentage}%`
        );
    }
    
    
//! ASSIGNMENT => 9
//?  Initialize an array with color names.

let colors = ["green", "yellow", "brown", "purple"];

//? A. Ask the user what color he/she wants to add to the beginning

colors.unshift(prompt("give any color name"));

console.log("new updated list : ", colors);

//? B. Ask the user what color he/she wants to add to the end

colors.push(prompt("give another color name"));

console.log("updated list after adding:", colors);

//? C. Add two more color to the beginning of the array.

colors.splice(0, 0, "red", "blue");
console.log("list after adding two colors", colors);

//? D. Delete the first color in the array.

colors.shift();

console.log("list after removing 1st color", colors);

//? E. Delete the last color in the array.

colors.pop();

console.log("list after removing last color", colors);

//? F. Ask the user at which index he/she wants to add a color & color name.

let indexAdd = prompt("Enter the index at which you want to add a color:");

let colorAdd = prompt("Enter the color name");

colors.splice(indexAdd, 0, colorAdd);

console.log("List after inserting a new color:", colors);

//? G. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.

let indexRem = prompt("Enter the index at which you want to remove a color:");

let countRem = prompt("How many colors do you want to remove");

colors.splice(indexRem, countRem);

console.log("List after removing color:", colors);

//* ASSIGNMENT => 10 nhi hua
//! ASSIGNMENT => 11

//? Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

let cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
let selectedCities = [];

for (let i = 0; i < 3; i++) {
  selectedCities.push(cities[i]);
  console.log(selectedCities);
}

//! ASSIGNMENT => 12

let arr = ["this", "is", "my", "cat"];

let str = arr.join(" ");

console.log(str);

//! ASSIGNMENT => 13

let fifo = [""];

fifo.unshift("keyboard");
fifo.unshift("mouse");
fifo.unshift("printer");
fifo.unshift("monitor");

console.log("1st value: ", fifo[0]);
console.log("2nd value: ", fifo[1]);
console.log("3rd value: ", fifo[2]);
console.log("4th value: ", fifo[3]);

//! ASSIGNMENT => 14

let lifo = [""];

lifo.push("keyboard");
lifo.push("mouse");
lifo.push("printer");
lifo.push("monitor");

console.log("1st value", lifo[1]);
console.log("2nd value: ", lifo[2]);
console.log("3rd value: ", lifo[3]);
console.log("4th value: ", lifo[4]);

//* 13 14 show opposite result

//! ASSIGNMENT => 15

//? Write a program to store phone manufacturers

let phonesManufactures = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write("<select>");

for (let i = 0; i < phonesManufactures.length; i++){

  document.write(`<option> ${phonesManufactures[i]} </option>`);
}

document.write("</select>");

