// Definition:
// The length property returns the total number of elements
// present in an array.

// Example

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.length); // 4

// Accessing the Last Element

console.log(fruits[fruits.length - 1]); // Orange

// Adding a New Element

fruits[fruits.length] = "Grapes";

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Grapes"]
console.log(fruits.length); // 5