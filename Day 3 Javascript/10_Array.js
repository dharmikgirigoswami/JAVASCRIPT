// Definition:
// An Array is a special data type in JavaScript used to store
// multiple values in a single variable.
// Array elements are stored using indexes, starting from 0.

// Creating an Array

let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Accessing Array Elements

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango
console.log(fruits[3]); // Orange

// Modifying an Element

fruits[1] = "Grapes";
console.log(fruits);

// Finding Array Length

console.log(fruits.length); // 4

// Checking Data Type

console.log(typeof fruits); // object
console.log(Array.isArray(fruits)); // true

// Array with Different Data Types

let data = ["Dharmik", 20, true, 95.5];

console.log(data);

// Output
// Apple
// Banana
// Mango
// Orange
// ["Apple", "Grapes", "Mango", "Orange"]
// 4
// object
// true
// ["Dharmik", 20, true, 95.5]