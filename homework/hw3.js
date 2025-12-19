// Q21.
// Create an object with name, age, city and print all values.
let person = {
    name: "John",
    age: 25,
    city: "New York"
}
console.log(person.name, person.age, person.city);



// Q22.
// Check if a property email exists in an object.
if ('email' in person) {
    console.log("Email exists in the object.");
} else {
    console.log("Email does not exist in the object.");
}
// Q23.
// Count number of keys in an object.
console.log("Number of keys:", Object.keys(person).length);

// Q24.
// Update object age if age is greater than 18.
let users = [
  { name: "A", age: 17 },
  { name: "B", age: 20 },
  { name: "C", age: 22 }
];

users.forEach(user => {
  if (user.age > 18) {
    user.age += 1;
  }
});

console.log(users);

// Q25.
// Loop through object and print key : value.
for (let key in person) {
    console.log(key + " : " + person[key]);
}