//todo ______________//
//? --QUESTION 1--//
//! ---ALERT---//
//todo _____________//

// alert("error");//

//todo ______________//
//? --QUESTION 2--//
//! ---Variables for Strings---//
//todo _____________//

var favoriteFruit = "apple";
console.log(favoriteFruit);

//todo ______________//
//? --QUESTION 3--//
//! ---Variables for Numbers(+)---//
//todo _____________//

var num1 = 14;
var num2 = 30;
num1++;
var addNum1WithNum2 = num1 + num2;
console.log(addNum1WithNum2);

//! ---Variables for Numbers(-)---//

var num1 = 16;
var num2 = 30;
num1--;
var subtractNum1WithNum2 = num1 - num2;
console.log(subtractNum1WithNum2);

//! ---Variables for Numbers(*)---//

var num1 = 10;
var num2 = 20;
var multiplyNum1WithNum2 = num1 * num2;
console.log(multiplyNum1WithNum2);
//! ---Variables for Numbers(**)---//

var num1 = 10;
var num2 = 20;
var multiplyNum1WithNum2 = num1 ** num2;
console.log(multiplyNum1WithNum2);

//! ---Variables for Numbers(/)---//

var num1 = 10;
var num2 = 20;
var divideNum1WithNum2 = num1 / num2;
console.log(divideNum1WithNum2);

//todo ______________//
//? --QUESTION 4--//
//! ---Variable Names Legal and Illegal---//
//todo _____________//

//* legal variables--//
//? there are only 3 legal styles to write variables //

var $myFavoriteJavascript = "";
var _my_favorite_javascript = "";
var myFavoriteJavascript = "";

//* illegal variables--//

// var -myFavoriteJavascript = "";  //
// var 1myFavoriteJavascript = "";  //
// var my Favorite Javascript = ""; //

//todo ______________//
//? --QUESTION 5--//
//! ---Math Expressions: Familiar Operators---//
//todo _____________//

var num1 = 5;
var num2 = 10;
var num3 = 15;
//* first we divide Num1 With Num2  //

var num4 = num1 / num2;
console.log(num4);

//* now we multiply Num3 With Num4 //

var num5 = num3 * num4;
console.log(num5);

//* now we subtract Num5 With 2.5 //

var num6 = num5 - 2.5;
console.log(num6);

//* Now we add Num6 with 5 //

num6 += 5;
console.log(num7);

//todo ______________//
//? --QUESTION 6--//
//! ---Math Expressions: Unfamiliar Operators---//
//todo _____________//

var num1 = 5;
var num2 = 10;
var num3 = num1 % num2;
console.log(num3);

//todo ______________//
//? --QUESTION 7--//
//! ---Concatenating Text Strings---//
//todo _____________//

var myName = "Saqib";
var fatherName = "Tahir";
// var fullName = "name + fatherName"
var fullName = myName + " " + fatherName;
console.log(fullName);

//todo ______________//
//? --QUESTION 8--//
//! ---Prompts---//
//todo _____________//

var userAge = prompt("Enter your age");
console.log(userAge);
//todo ______________//
//? --QUESTION 9--//
//! ---if statements---//
//todo _____________//

var number = prompt("give me any number");
var message = "";
if (number % 2 == 0) {
  message = "Number is even";
  alert("Number is even");
  console.log("even");
} else {
  message = "Number is odd";
  alert("Number is odd");
  console.log("odd");
}

//todo ______________//
//? --QUESTION 10--//
//! ---if..else and else if statements:---//
//todo _____________//

// var categories =("child teen adult old")

var age = prompt("Enter your age");
if (age <= 12) {
  alert("You are a child");
  console.log("child");
} else if (age >= 13 && age <= 18) {
  alert("You are a teen");
  console.log("teen");
} else if (age >= 19 && age <= 45) {
  alert("You are an adult");
  console.log("adult");
  var married = prompt("are you sure ? 0 or 1");
  if (married == 1) {
    alert("you are married wow 😲");
    console.log("married");
  } else {
    alert("you are not married");
    console.log("not married");
  }
} else if (age >= 46 && age <= 99) {
  alert("You are an old person");
  console.log("old person");
} else if (age > 100) {
  alert("error. please wait...");
  console.log("error");
} else {
  console.log("");
}

/////////////////////////////////////
//todo ______________//
//? --QUESTION 11--//
//! ---Nested if...else Statements---//
//todo _____________//

var age = prompt("Enter your age");

if (age < 12) {
  alert("ticket price is $5");
  console.log("$5");
} else if (age >= 12 && age <= 18) {
  var student = prompt("are you a student 0 or 1");

  if (student == 1) {
    alert("ticket price is $8");
    console.log("$8");
  } else {
    alert("ticket price is $10");
    console.log("$10");
  }
} else if (age >= 19) {
  alert("ticket price is $12");
  console.log("$12");
}
