// Definition:
// An Implicit Return Arrow Function is an arrow function
// that automatically returns the result of a single expression.
// The return keyword and curly braces {} are not required.

// Syntax

const functionName = (parameters) => expression;

// Example 1

const add = (a, b) => a + b;

console.log(add(10, 20)); // 30

// Example 2

const square = num => num * num;

console.log(square(5)); // 25

// Example 3

const isEven = num => num % 2 === 0;

console.log(isEven(8)); // true
console.log(isEven(7)); // false

// Example 4

const greet = name => "Hello " + name;

console.log(greet("Dharmik")); // Hello Dharmik

// Example 5

const multiply = (x, y) => x * y;

console.log(multiply(4, 5)); // 20

// Summary
// Explicit Return
const sum1 = (a, b) => {
    return a + b;
};

// Implicit Return
const sum2 = (a, b) => a + b;