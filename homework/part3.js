// PART 3: Array Practice (Q13–Q20)
// Q13.
// Create an array of numbers and print all elements using for
// loop.
let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Q14.
// Find the sum of array elements.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of array elements:", sum);
// Q15.
// Find the largest number in an array.
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest number in the array:", largest);

// Q16.
// Count even numbers in an array.
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    }
}
console.log("Even numbers in the array:", evenCount);

// Q17.
// Reverse an array without using reverse().
let reversedArray = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    reversedArray.push(numbers[i]);
}   
// Q18.
// Check if a number exists in an array.
let targetNumber = 30;
let exists = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === targetNumber) {
        exists = true;
        break;
    }
}
console.log("Number exists in the array:", exists);

// Q19.
// Remove duplicate values from an array (simple logic).
let arrayWithDuplicates = [10, 20, 30, 20, 40, 10, 50];
let uniqueArray = [];   
for (let i = 0; i < arrayWithDuplicates.length; i++) {
    if (!uniqueArray.includes(arrayWithDuplicates[i])) {
        uniqueArray.push(arrayWithDuplicates[i]);
    }
}
console.log("Unique array:", uniqueArray);

// Q20.
// Create an array of strings and print strings with length > 4.
let stringArray = ["apple", "bat", "carrot", "dog", "elephant"];
for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > 4) {
        console.log(stringArray[i]);
    }
}