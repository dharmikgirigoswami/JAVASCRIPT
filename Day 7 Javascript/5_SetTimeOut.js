// Definition:
// setTimeout() is a JavaScript function that executes
// a piece of code once after a specified delay.
// The delay is given in milliseconds (1000 ms = 1 second).

// Syntax

setTimeout(functionName, delay);

// OR

setTimeout(() => {
    // Code to execute
}, delay);

// Example 1

setTimeout(() => {
    console.log("Hello JavaScript!");
}, 2000);

// Output after 2 seconds
// Hello JavaScript!

// Example 2

function greet() {
    console.log("Welcome!");
}

setTimeout(greet, 3000);

// Output after 3 seconds
// Welcome!

// Example 3

setTimeout(() => {
    console.log("This message appears after 5 seconds.");
}, 5000);

// Example 4 (Using clearTimeout)

let timer = setTimeout(() => {
    console.log("This will not execute.");
}, 4000);

clearTimeout(timer);

// Summary
// setTimeout()   -> Executes code once after a delay.
// Delay is measured in milliseconds.
// clearTimeout() -> Cancels a scheduled timeout.