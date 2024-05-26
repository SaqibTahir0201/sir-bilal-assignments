//! ASSIGNMENT 1 => Basic For Loop:

for (var i = 1; i <= 5; i++) {
  console.log(i);
}

//! ASSIGNMENT 2 => Summation with For Loop:

var sum = 0;
for (var i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

//! ASSIGNMENT 3 => Reverse Counting with For Loop:

for (var i = 10; i >= 1; i--) {
  console.log(i);
}

//! ASSIGNMENT 4 => Multiplication Table with For Loop:

var multiply = 0;
for (var i = 1; i <= 10; i++) {
  multiply = 5 * i;
  console.log(multiply);
  // console.log(multiply * i);
}

//! ASSIGNMENT 6 => Pattern Printing with For Loop::
var n = 10;
var print = "";
for (var i = 1; i <= n; i++) {
 var start = print += "*";
 console.log(start);
  // console.log((print += "*"));
}
//***************************/
//***************************/

var star = "**********";
for (var i = 10; i >= 1; i--) {
  console.log(star);
  star = star.slice(1);
}




/*for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= i; j++) {
    console.log(j);
  }
  console.log("\n");
} */
