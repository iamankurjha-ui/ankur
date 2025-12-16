// PART 1: Basic & Prompt (Q1–Q6)
// Q1.
// Take a number from prompt and check if it is even or odd.
let num = prompt("Enter a number:");
if (num % 2 === 0) {
  console.log(num + " is even.");
} else {
  console.log(num + " is odd.");
}

// Q2.
// Take two numbers from prompt and print the greater number.
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
if (num1 > num2) {
  console.log(num1 + " is greater.");
} else if (num2 > num1) {
  console.log(num2 + " is greater.");
} else {
  console.log("Both numbers are equal.");
}
// Q3.
// Take a number and check if it is positive, negative, or zero.
let number = prompt("Enter a number:");
if (number > 0) {
  console.log(number + " is positive.");
} else if (number < 0) {
  console.log(number + " is negative.");
} else {
  console.log("The number is zero.");
}
// Q4.
// Take age from prompt and check if the user is eligible to vote (18+).
let age = prompt("Enter your age:");
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// Q5.
// Take a number and print its table (1–10) using a for loop.
let tableNum = prompt("Enter a number to print its table:");
for (let i = 1; i <= 10; i++) {
  console.log(tableNum + " x " + i + " = " + tableNum * i);
}
// Q6.
// Take a number and find the sum of numbers from 1 to that number.
let sumNum = prompt("Enter a number to find the sum from 1 to that number:");
let sum = 0;
for (let i = 1; i <= sumNum; i++) {
  sum += i;
}
