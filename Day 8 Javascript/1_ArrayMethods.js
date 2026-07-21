// Definition:
// Array Methods are built-in JavaScript functions used
// to add, remove, search, modify, and iterate over array elements.

// Example Array

let fruits = ["Apple", "Banana", "Mango"];

// 1. push() - Adds element at the end

fruits.push("Orange");
console.log(fruits);

// 2. pop() - Removes the last element

fruits.pop();
console.log(fruits);

// 3. unshift() - Adds element at the beginning

fruits.unshift("Grapes");
console.log(fruits);

// 4. shift() - Removes the first element

fruits.shift();
console.log(fruits);

// 5. concat() - Combines two arrays

let arr1 = [1, 2];
let arr2 = [3, 4];

console.log(arr1.concat(arr2));

// 6. slice() - Returns a portion of an array

console.log(fruits.slice(0, 2));

// 7. splice() - Adds or removes elements

fruits.splice(1, 1, "Kiwi");
console.log(fruits);

// 8. indexOf() - Returns the index of an element

console.log(fruits.indexOf("Kiwi"));

// 9. includes() - Checks if an element exists

console.log(fruits.includes("Apple"));

// 10. reverse() - Reverses the array

console.log(fruits.reverse());

// 11. sort() - Sorts the array

console.log(fruits.sort());

// 12. join() - Converts array into a string

console.log(fruits.join(" - "));

// 13. forEach() - Executes a function for each element

fruits.forEach(function(item) {
    console.log(item);
});

// 14. map() - Creates a new array

let numbers = [1, 2, 3, 4];

let squares = numbers.map(num => num * num);

console.log(squares);

// 15. filter() - Filters elements based on a condition

let even = numbers.filter(num => num % 2 === 0);

console.log(even);

// 16. reduce() - Reduces the array to a single value

let sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);

// Summary
// push()      -> Add at end
// pop()       -> Remove from end
// unshift()   -> Add at beginning
// shift()     -> Remove from beginning
// concat()    -> Merge arrays
// slice()     -> Copy part of an array
// splice()    -> Add/Remove elements
// indexOf()   -> Find index
// includes()  -> Check existence
// reverse()   -> Reverse array
// sort()      -> Sort array
// join()      -> Convert to string
// forEach()   -> Iterate through array
// map()       -> Create new array
// filter()    -> Filter elements
// reduce()    -> Reduce to one value