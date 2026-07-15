// Definition:
// Template Literals are a way to create strings using backticks (` `).
// They allow you to insert variables or expressions directly into a string
// using ${ } (string interpolation).

// Example

let name = "Dharmik";
let age = 20;

let message = `My name is ${name} and I am ${age} years old.`;

console.log(message);

// Using Expressions

let a = 10;
let b = 5;

console.log(`Sum = ${a + b}`);

// Multi-line String

let text = `Hello,
Welcome to JavaScript.
Have a nice day!`;

console.log(text);

// Output:
// My name is Dharmik and I am 20 years old.
// Sum = 15
// Hello,
// Welcome to JavaScript.
// Have a nice day!