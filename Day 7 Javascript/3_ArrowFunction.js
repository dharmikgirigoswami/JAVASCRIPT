// Definition:
// An Arrow Function is a shorter way to write a function in JavaScript.
// It uses the => (arrow) operator and is commonly used for simple functions.

// Syntax

const functionName = (parameters) => {
    // Code to execute
};

// Example 1

const greet = () => {
    console.log("Hello JavaScript!");
};

greet();

// Example 2

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20)); // 30

// Example 3 (Single Parameter)

const square = num => {
    return num * num;
};

console.log(square(5)); // 25

// Example 4 (Implicit Return)

const multiply = (x, y) => x * y;

console.log(multiply(4, 5)); // 20

// Example 5

const isEven = num => num % 2 === 0;

console.log(isEven(8)); // true
console.log(isEven(7)); // false

// Summary
// function add(a, b) {
//     return a + b;
// }

// const add = (a, b) => {
//     return a + b;
// }

// OR (Implicit Return)

// const add = (a, b) => a + b;