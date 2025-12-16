// PART 2: String Practice (Q7–Q12)
// Q7.
// Take a string and print its length (without using .length).
let inputString = prompt("Enter a string:");
let length = 0;
for (let char of inputString) {
  length++;
}
console.log("The length of the string is: " + length);
// Q8.
// Take a string and count number of vowels.
let str = prompt("Enter a string to count vowels:");
let vowelCount = 0;
let vowels = "aeiouAEIOU";
for (let char of str) {
  if (vowels.indexOf(char) !== -1) {
    vowelCount++;
  }
}
console.log("Number of vowels in the string: " + vowelCount);

// Q9.
// Reverse a string using a for loop.
let originalString = prompt("Enter a string to reverse:");
let reversedString = "";    
for (let i = originalString.length - 1; i >= 0; i--) {
  reversedString += originalString[i];
}
console.log("Reversed string: " + reversedString);

// Q10.
// Check if a string is palindrome.
let palindromeString = prompt("Enter a string to check if it's a palindrome:");
let isPalindrome = true;
for (let i = 0; i < palindromeString.length / 2; i++) {
  if (palindromeString[i] !== palindromeString[palindromeString.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
if (isPalindrome) {
  console.log(palindromeString + " is a palindrome.");
} else {
  console.log(palindromeString + " is not a palindrome.");
}
// Q11.
// Convert a string to uppercase (using method).
let lowerCaseString = prompt("Enter a string to convert to uppercase:");
let upperCaseString = lowerCaseString.toUpperCase();
console.log("Uppercase string: " + upperCaseString);

// Q12.
// Count how many times letter "a" appears in a string.
let stringWithA = prompt("Enter a string to count occurrences of 'a':");
let countA = 0;
for (let char of stringWithA) {
  if (char === 'a' || char === 'A') {
    countA++;
  }
}
console.log("The letter 'a' appears " + countA + " times in the string.");


