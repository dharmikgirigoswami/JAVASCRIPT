// Definition:
// sort() is an Array method used to sort the elements of an array.
// By default, it sorts elements as strings in ascending (alphabetical) order.
// It modifies the original array.

// Syntax
// array.sort();

// Example 1 (Sorting Strings)

let fruits = ["Mango", "Apple", "Orange", "Banana"];

fruits.sort();

console.log(fruits);
// ["Apple", "Banana", "Mango", "Orange"]

// Example 2 (Sorting Numbers - Ascending)

let numbers = [40, 10, 100, 25, 5];

numbers.sort((a, b) => a - b);

console.log(numbers);
// [5, 10, 25, 40, 100]

// Example 3 (Sorting Numbers - Descending)

numbers.sort((a, b) => b - a);

console.log(numbers);
// [100, 40, 25, 10, 5]

// Original Array is Modified

console.log(numbers);
// [100, 40, 25, 10, 5]