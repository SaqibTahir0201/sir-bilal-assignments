function constructor(name, age, gender, qualification, city, country) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.qualification = qualification;
  this.city = city;
  this.country = country;
}

const person1 = new constructor("John Doe", 30, "male", "New York", "USA");
const person2 = new constructor(
  "Jane Smith",
  25,
  "female",
  "Los Angeles",
  "USA"
);
const person3 = new constructor(
  "Alice Johnson",
  35,
  "non-binary",
  "San Francisco",
  "USA"
);


// console.log(typeof person1, person2, person3);

let array = [person1, person2, person3];
array.forEach((element) => {
 console.log(element.name);
});
