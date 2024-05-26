// $ practice questions
//? • Write a loop to print numbers from 1 to 10.
/*
for (let i = 1; i <= 10; i++) {
    console.log(i);   
}
//? • Write a loop to print even numbers from 1 to 20.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//? • Write a loop to print odd numbers from 1 to 15.


for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0){
        console.log(i);
    }
}
//? • Write a loop to calculate and print the factorial of a number (let's say 5).


let factorial = 5;
for (let i = 5; i > 0; i--) {
    factorial *= i;
}

//?• Write a loop to print the multiplication table of a number (let's say 7) up to 10.


for (let i = 1; i <= 10; i++) {
console.log(7 * i);

}
//? • Write a loop to print the Fibonacci series up to the 10th term. (The Fibonacci sequence is a type series where each number is the sum of the two that precede it. It starts from 0 and 1 usually. The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.-10)

let fibonacci = 0;

for (let i = 1; i <= 10; i++) {
    fibonacci = fibonacci + i;
    console.log(fibonacci);
}

//? • Write a loop to find and print the sum of digits of a number (let's say 123).


let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
    console.log(sum);
}


*/
//? Write a loop to print the reverse of a string (let's say "hello").

let str = "hello"

for (let i = str.length -1; i >= 0; i--) {
    console.log(str[i]);
}

//? • Write a loop to print the square of numbers from 1 to 10.

for (let i = 0; i < 10; i++) {
    
    console.log(i * i);
    
}
