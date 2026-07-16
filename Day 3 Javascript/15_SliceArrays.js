// Definition:
// slice() is an Array method used to extract a portion of an array
// and return it as a new array.
// It does not modify the original array.

// Syntax
// array.slice(startIndex, endIndex);

// Example Array

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Example 1

let result1 = fruits.slice(1, 4);

console.log(result1);
// ["Banana", "Mango", "Orange"]

// Example 2 (From Start Index to End)

let result2 = fruits.slice(2);

console.log(result2);
// ["Mango", "Orange", "Grapes"]

// Example 3 (Using Negative Index)

let result3 = fruits.slice(-2);

console.log(result3);
// ["Orange", "Grapes"]

// Original Array Remains Unchanged

console.log(fruits);
// ["Apple", "Banana", "Mango", "Orange", "Grapes"]