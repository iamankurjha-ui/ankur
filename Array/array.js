// Create an array of 4 fruits, e.g. [&quot;apple&quot;,&quot;banana&quot;,&quot;mango&quot;,&quot;grapes&quot;]. Use
// console.log to print the array and also log its .length.
let fruits = ["apple", "banana", "mango", "grapes"];
console.log(fruits);
console.log(fruits.length); // Output: 4

// push() and pop()
// Use push() to add one fruit at the end and console.log the array; then use
// pop() to remove the last item and console.log the array after removal.
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "mango", "grapes", "orange"]
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "mango", "grapes"]
//unshift() and shift()
// Use unshift() to add a fruit to the start of the array and console.log; then use
// shift() to remove the first element and console.log the result.
fruits.unshift("kiwi");
console.log(fruits); // Output: ["kiwi", "apple", "banana", "mango", "grapes"]
fruits.shift();
console.log(fruits); // Output: ["apple", "banana", "mango", "grapes"]
// concat() to merge arrays
// Create two small arrays of colors and use concat() to merge them into one
// array; console.log the merged array.
let colors1 = ["red", "blue"];
let colors2 = ["green", "yellow"];
let mergedColors = colors1.concat(colors2);
// Starting with an array, perform push, pop, unshift, shift in that sequence and
// console.log the array after each operation to show how it changes.
console.log(mergedColors); // Output: ["red", "blue", "green", "yellow"]
mergedColors.push("purple");
console.log(mergedColors); // Output: ["red", "blue", "green", "yellow", "purple"]
mergedColors.pop();
console.log(mergedColors); // Output: ["red", "blue", "green", "yellow"]
mergedColors.unshift("orange");
console.log(mergedColors); // Output: ["orange", "red", "blue", "green", "yellow"]  
mergedColors.shift();
console.log(mergedColors); // Output: ["red", "blue", "green", "yellow"]        