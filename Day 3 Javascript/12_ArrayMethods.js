// Definition:
// Array Methods are built-in JavaScript methods used to add, remove,
// search, modify, and manipulate elements in an array.

// Example Array

let fruits = ["Apple", "Banana", "Mango"];

// 1. push() - Adds an element to the end
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// 2. pop() - Removes the last element
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Mango"]

// 3. unshift() - Adds an element to the beginning
fruits.unshift("Grapes");
console.log(fruits); // ["Grapes", "Apple", "Banana", "Mango"]

// 4. shift() - Removes the first element
fruits.shift();
console.log(fruits); // ["Apple", "Banana", "Mango"]

// 5. indexOf() - Returns the index of an element
console.log(fruits.indexOf("Banana")); // 1

// 6. includes() - Checks if an element exists
console.log(fruits.includes("Mango")); // true

// 7. slice() - Returns a portion of the array
console.log(fruits.slice(1, 3)); // ["Banana", "Mango"]

// 8. splice() - Adds or removes elements
fruits.splice(1, 1, "Orange");
console.log(fruits); // ["Apple", "Orange", "Mango"]

// 9. concat() - Combines arrays
let moreFruits = ["Kiwi", "Pineapple"];
console.log(fruits.concat(moreFruits));
// ["Apple", "Orange", "Mango", "Kiwi", "Pineapple"]

// 10. reverse() - Reverses the array
console.log(fruits.reverse());

// 11. sort() - Sorts the array alphabetically
console.log(fruits.sort());

// 12. join() - Converts array into a string
console.log(fruits.join(", ")); // Apple, Mango, Orange

// Common Array Methods
// push()
// pop()
// unshift()
// shift()
// indexOf()
// includes()
// slice()
// splice()
// concat()
// reverse()
// sort()
// join()