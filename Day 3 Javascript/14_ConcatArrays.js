// Definition:
// concat() is an Array method used to combine two or more arrays
// into a new array. It does not change the original arrays.

// Syntax
// array1.concat(array2, array3, ...)

// Example 1

let fruits = ["Apple", "Banana"];
let vegetables = ["Carrot", "Potato"];

let result = fruits.concat(vegetables);

console.log(result);
// ["Apple", "Banana", "Carrot", "Potato"]

// Example 2 (Concatenating Three Arrays)

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let numbers = arr1.concat(arr2, arr3);

console.log(numbers);
// [1, 2, 3, 4, 5, 6]

// Original Arrays Remain Unchanged

console.log(fruits);      // ["Apple", "Banana"]
console.log(vegetables);  // ["Carrot", "Potato"]