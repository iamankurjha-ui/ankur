 let num = [2,4,6,8,10]
// let newarr = num.map((e)=>{
//     return e*2
// })
// console.log(newarr);
//what is map function in javascript?
//The `map` function in JavaScript is a built-in array method that
//  creates a new array populated with the results of calling a provided
//  function on every element in the calling array. It does not modify the
//  original array but instead returns a new one.
//what is callback function?
//A callback function is a function that is passed as an argument
//  to another function and is executed after some operation has been completed.
//  It allows for asynchronous behavior and helps in handling events or operations
//  that take time to complete.
//what is higher order function?
//A higher-order function is a function that either takes one or more functions
//  as arguments or returns a function as its result. Higher-order functions
//  are commonly used for operations like mapping, filtering, and reducing arrays..

let newarr = num.filter((e)=>{
    return e%2==0
})
console.log(newarr);
//what is filter function in javascript?
//The `filter` function in JavaScript is a built-in array method that
//  creates a new array with all elements that pass the test implemented
//  by the provided function. It filters the elements of the original array
//  based on a specified condition and returns a new array containing only
//  those elements that meet the criteria.