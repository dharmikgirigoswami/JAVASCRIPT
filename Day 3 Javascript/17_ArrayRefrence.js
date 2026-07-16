// Definition:
// Arrays are reference types in JavaScript.
// When one array is assigned to another variable,
// both variables refer to the same array in memory.
// Therefore, changing one array also changes the other.

// Example

let arr1 = ["Apple", "Banana", "Mango"];

// arr2 references the same array as arr1
let arr2 = arr1;

console.log(arr1); // ["Apple", "Banana", "Mango"]
console.log(arr2); // ["Apple", "Banana", "Mango"]

// Modify arr2
arr2.push("Orange");

console.log(arr1); // ["Apple", "Banana", "Mango", "Orange"]
console.log(arr2); // ["Apple", "Banana", "Mango", "Orange"]

// Comparison

console.log(arr1 === arr2); // true

// Creating a Copy of an Array

let arr3 = [...arr1]; // Spread Operator

arr3.push("Grapes");

console.log(arr1); // ["Apple", "Banana", "Mango", "Orange"]
console.log(arr3); // ["Apple", "Banana", "Mango", "Orange", "Grapes"]

console.log(arr1 === arr3); // false