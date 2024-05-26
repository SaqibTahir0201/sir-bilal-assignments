// //? Q. Write a program that takes an array of numbers as input. Double each even number in the array and remove all odd numbers. Return the modified array.

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < number.length; i++) {
//   if (number[i] % 2 === 0) {
//     console.log(number[i] * 2);
//   }
// }

// //?Q.Write a program to take password as an input from
// //# user. The password must qualify these requirements:
// //# a. It should contain alphabets and numbers
// //# b. It should not start with a number
// //# c. It must at least 6 characters long
// //# If the password does not meet above requirements,
// //# prompt the user to enter a valid password.
// //# For character codes of a-z, A-Z & 0

// const passwordRequirements = {
//   containsLowerCase: false,
//   containsUpperCase: false,
//   containsNumber: false,
//   isLongEnough: false,
// };

// let password = "";

// while (!passwordRequirements.isLongEnough) {
//   password = prompt("Enter your password: ");

//   if (password.length >= 6) {
//     passwordRequirements.isLongEnough = true;
//   } else {
//     alert("Password must be at least 6 characters long.");
//   }
//   if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//     alert("Password must not start with a number.");
//   }
// }

// for (let i = 0; i < password.length; i++) {
//   const charCode = password.charCodeAt(i);

//   if (
//     (charCode >= 97 && charCode <= 122) || // a-z
//     (charCode >= 65 && charCode <= 90) || // A-Z
//     (charCode >= 48 && charCode <= 57) // 0-9
//   ) {
//     if (
//       !passwordRequirements.containsLowerCase &&
//       charCode >= 97 &&
//       charCode <= 122
//     ) {
//       passwordRequirements.containsLowerCase = true;
//     }

//     if (
//       !passwordRequirements.containsUpperCase &&
//       charCode >= 65 &&
//       charCode <= 90
//     ) {
//       passwordRequirements.containsUpperCase = true;
//     }

//     if (
//       !passwordRequirements.containsNumber &&
//       charCode >= 48 &&
//       charCode <= 57
//     ) {
//       passwordRequirements.containsNumber = true;
//     }
//   }
// }

// if (
//   !passwordRequirements.containsLowerCase ||
//   !passwordRequirements.containsUpperCase ||
//   !passwordRequirements.containsNumber
// ) {
//   alert(
//     "Password must contain at least one lowercase letter, one uppercase letter, and one number."
//   );
// } else {
//   alert("Your password meets the requirements.");
// }

// //? Q.Write a program that takes two arrays of numbers as input and returns a new array containing only the elements that are present in both arrays. Use nested for loops to compare each element of the first array with each element of the second array.

let firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let secondArray = [2, 4, 6, 8, 10];
let commonElement = [];
for (let i = 0; i < firstArray.length; i++) {
  for (let j = 0; j < secondArray.length; j++) {
    if (firstArray[i] === secondArray[i]) {
      commonElement.push(firstArray[i]);
    }
  }
}
console.log(commonElement);
