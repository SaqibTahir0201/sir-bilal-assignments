//? Question 1: Write a function in JavaScript called roundNumber() that takes a number as input and returns the number rounded to the nearest integer.
function roundAndDisplay() {
  const inputNumber = parseFloat(document.getElementById("inputNumber").value);
  const roundedNumber = Math.round(inputNumber);
  document.getElementById(
    "round_number_result"
  ).innerText = `The rounded number is: ${roundedNumber}`;
}

//? Question 2: Create a function called generateRandomInRange(min, max) that generates a random integer between min and max (inclusive) in JavaScript.
//# Hint: You can use Math.random() to generate a random number between 0 and 1, then scale and shift it to fit within the specified range.
function generateRandomNumber() {
  var random = Math.random(random).toFixed(1);
  random_result.innerText = "Random=> " + random * 10;
}
//? Write a JavaScript function called convertToNumber(str) that takes a string as input and converts it into a number. Ensure the function returns NaN if the string cannot be converted into a valid number.
//# Hint: Look into the parseInt() and parseFloat() functions in JavaScript. Make sure to handle cases where the string is not a valid number.
function convertToNumber() {
  const inputStr = document.getElementById("inputStr").value;
  const number = convertStringToNumber(inputStr);
  document.getElementById(
    "convert_number_result"
  ).innerText = `The converted number is: ${number}`;
}

function convertStringToNumber(str) {
  const number = parseFloat(str);
  if (isNaN(number)) {
    return NaN;
  }
  return number;
}
//? Implement a JavaScript function called truncateDecimal(num, decimals) that truncates a number num to a specified number of decimals.
//# Hint: You may want to multiply the input number by a power of 10, truncate the decimal part, and then divide it back to the original power of 10 to achieve the desired truncation