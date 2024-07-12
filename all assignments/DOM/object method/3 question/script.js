// $ QUESTION 1
var object = {
  id: 1,
  title: "Fjallraven Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image:
    "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600",
  rating: [2, 4, 1, 0, 5, 3],
  //   calculateRating,
};
object.calculateRating = function () {
  let sum = 0;
  for (let i = 0; i < this.rating.length; i++) {
    sum += this.rating[i];
  }
  return sum / this.rating.length;
};
let title = document.getElementById("title");
let price = document.getElementById("price");
let description = document.getElementById("description");
let category = document.getElementById("category");
let image = document.getElementById("img");
let rating = document.getElementById("rating");

title.innerText = object.title;
price.innerText = `$${object.price}`;
description.innerText = object.description;
category.innerText = object.category;
rating.innerText = object.calculateRating();
image.src = object.image;

// $ QUESTION 2
let employee = {
  id: 101,
  name: "John Doe",
  position: "Software Engineer",
  department: "IT",
  daysOff: ["Monday", "Friday"],

  isTodayOff: function () {
    let today = new Date();
    let dayOfWeek = today.toLocaleString("en-US", { weekday: "long" });
    console.log(dayOfWeek);
    return this.daysOff.includes(dayOfWeek);
  },
};

console.log("isTodayOff =>", employee.isTodayOff()); // This will return true if today is a day off for the employee, otherwise false.

// $ QUESTION 3

let employee2 = {
  id: 102,
  name: "Jane Smith",
  position: "Project Manager",
  department: "Management",
  experience: 5, // years of experience
  performance: 4.5, // performance rating out of 5
  isIncrementEligible: function () {
    if (this.experience >= 3 && this.performance >= 4) return true;
  },
};

console.log("isIncrementEligible =>", employee2.isIncrementEligible());
