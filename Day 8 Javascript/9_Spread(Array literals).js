// Definition:
// The Spread Operator (...) in Array Literals is used
// to expand the elements of one array into another array.
// It is commonly used to copy arrays, merge arrays,
// and insert elements.

// Syntax

let newArray = [...oldArray];

// Example 1: Copy an Array

let arr1 = [1, 2, 3];

let arr2 = [...arr1];

console.log(arr2);

// Output
// [1, 2, 3]

// Example 2: Merge Two Arrays

let arr3 = [1, 2];
let arr4 = [3, 4];

let mergedArray = [...arr3, ...arr4];

console.log(mergedArray);

// Output
// [1, 2, 3, 4]

// Example 3: Add Elements at the Beginning

let numbers = [20, 30];

let newNumbers = [10, ...numbers];

console.log(newNumbers);

// Output
// [10, 20, 30]

// Example 4: Add Elements at the End

let marks = [80, 90];

let updatedMarks = [...marks, 100];

console.log(updatedMarks);

// Output
// [80, 90, 100]

// Example 5: Add Elements in the Middle

let colors = ["Red", "Blue"];

let newColors = ["Black", ...colors, "White"];

console.log(newColors);

// Output
// ["Black", "Red", "Blue", "White"]

// Example 6: Copy Without Affecting Original Array

let fruits = ["Apple", "Banana"];

let copiedFruits = [...fruits];

copiedFruits.push("Mango");

console.log(fruits);

// Output
// ["Apple", "Banana"]

console.log(copiedFruits);

// Output
// ["Apple", "Banana", "Mango"]

// Summary
// [...array]            -> Copy an array
// [...arr1, ...arr2]    -> Merge arrays
// [value, ...array]     -> Add elements at the beginning
// [...array, value]     -> Add elements at the end
// [value, ...array, value] -> Add elements anywhere