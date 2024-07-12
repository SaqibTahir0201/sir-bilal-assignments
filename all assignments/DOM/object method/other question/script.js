// // $    QUESTION 1
// var itemsArray = [
//   { name: "juice", price: "50", quantity: "3" },
//   { name: "cookie", price: "30", quantity: "9" },
//   { name: "shirt", price: "880", quantity: "1" },
//   { name: "pen", price: "100", quantity: "2" },
// ];

// var totalPriceOfAllItems = 0;

// for (var i = 0; i < itemsArray.length; i++) {
//   var item = itemsArray[i];
//   item.totalPrice = parseInt(item.price) * parseInt(item.quantity);
//   console.log("per item price =>", item.totalPrice);
//   totalPriceOfAllItems += item.totalPrice;
// }

// console.log(itemsArray);

// console.log("Total price of all items:", totalPriceOfAllItems);

// // $    QUESTION 2

// let infoArray = {
//   name: "saqib",
//   email: "sqbmaaz@getMaxListeners.com",
//   password: "tutrakh",
//   age: 23,
//   gender: "male",
//   city: "karachi",
//   country: "pakistan",
// };

// if (!infoArray.hasOwnProperty("name"))
//   console.log("name property doesn't exist in  this object");
// if (!infoArray.hasOwnProperty("email"))
//   console.log("email property doesn't exist in  this object");
// if (!infoArray.hasOwnProperty("password"))
//   console.log("password property doesn't exist in  this object");
// if (!infoArray.hasOwnProperty("age"))
//   console.log("Age property doesn't exist in  this object");
// if (!infoArray.hasOwnProperty("gender"))
//   console.log("gender property doesn't exist in  this object");
// if (!infoArray.hasOwnProperty("city"))
//   console.log("city property doesn't exist in  this object");
// if (!infoArray.hasOwnProperty("country"))
//   console.log("country property doesn't exist in  this object");

// $    QUESTION 3

function constructor(name, age, gender, qualification, city, country) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.qualification = qualification;
  this.city = city;
  this.country = country;
}

const person1 = new constructor("John Doe", 30, "male", "New York", "USA");
const person2 = new constructor("Jane Smith", 25, "female", "Los Angeles", "USA");
const person3 = new constructor("Alice Johnson",35,"non-binary","San Francisco","USA"
);

console.log(person1);
console.log(person2);
console.log(person3);