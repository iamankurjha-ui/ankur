// 1) Create an array of 5 numbers and use a for loop to print each number
// using an arrow function inside the loop.
// 1. Create the array
const numbers = [10, 20, 30, 40, 50];

// 2. Loop through the array
for (let i = 0; i < numbers.length; i++) {
    // 3. Define arrow function inside the loop
    const printNum = () => {
        console.log(numbers[i]);
    };

    // 4. Call the function immediately
    printNum();
}
// 2) Using an array of names, check inside a for loop:
// If the name length is greater than 5, print "Long Name",
// else print "Short Name".

const names = ["Alice", "Christopher", "Bob", "Amanda", "Joe"];

for (let i = 0; i < names.length; i++) {
    // Check if length is strictly greater than 5
    if (names[i].length > 5) {
        console.log(names[i] + ": Long Name");
    } else {
        console.log(names[i] + ": Short Name");
    }
}
// 3) Create an object student with properties: name, age, city.
// Use a for…in loop to print all keys and values.
const student = {
    name: "John Doe",
    age: 21,
    city: "New York"
};

// Iterate over the keys of the object
for (let key in student) {
    // Print the key and the corresponding value
    console.log(`Key: ${key}, Value: ${student[key]}`);
}
// 4) Make an array of 3 student objects.
// Use a normal for loop to print each student's name using an arrow function to
// format the text.
const students = [
    { name: "Rahul", age: 20 },
    { name: "Sara", age: 22 },
    { name: "Mike", age: 19 }
];

for (let i = 0; i < students.length; i++) {
    // Arrow function to format the output string
    const formatName = (studentName) => {
        return `Student Name: ${studentName.toUpperCase()}`;
    };

    // Call the function passing the current student's name
    console.log(formatName(students[i].name));
}
// 5) Write an arrow function isAdult(age) using if–else:  if age >= 18 → return true
//  else → return false
// Define the arrow function
const isAdult = (age) => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const ages = [12, 25, 17, 30, 15];

for (let i = 0; i < ages.length; i++) {
    const check = isAdult(ages[i]); // Call function
    console.log(`Age ${ages[i]} is adult? ${check}`);
}
// Now call this function inside a loop over an array of ages.
// 6) Create an array of numbers and use a for loop to find the largest number
// (without using Math.max).
const numList = [15, 82, 3, 99, 41];

// Assume the first number is the largest initially
let largest = numList[0];

for (let i = 1; i < numList.length; i++) {
    // Compare current number with the current largest
    if (numList[i] > largest) {
        largest = numList[i]; // Update largest if current is bigger
    }
}

console.log("The largest number is:", largest);
// 7) Given the object:
// const data = { a: 10, b: 20, c: 30 };
// Use object destructuring to extract a and c and print them.
const data = { a: 10, b: 20, c: 30 };

// Destructuring assignment
const { a, c } = data;

console.log("Value of a:", a);
console.log("Value of c:", c);
// 8) Create two objects and merge them into one using the spread operator …Print the merged object.
const obj1 = { item: "Laptop", price: 1000 };
const obj2 = { brand: "Dell", color: "Black" };

// Merge using spread operator (...)
const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);
// 9) Make an array of marks.
// Use a for loop to count how many marks are greater than 50 using simple
// if–else.
const marks = [45, 78, 88, 32, 55, 90];
let count = 0; // Initialize counter

for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 50) {
        count = count + 1; // Increment counter
    } else {
        // Do nothing if mark is 50 or less
    }
}

console.log("Number of marks greater than 50:", count);
// 10) Create an array of cities.
// Use a for loop and an arrow function inside it to print the city name along with
// its index (e.g., “0 → Delhi”).
const cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];

for (let i = 0; i < cities.length; i++) {
    // Arrow function capturing index (i) and value (cities[i])
    const printCity = () => {
        console.log(`${i} → ${cities[i]}`);
    };

    printCity();
}