// Definition:
// setInterval() is a JavaScript function that repeatedly
// executes a piece of code after a specified time interval.
// The interval is given in milliseconds (1000 ms = 1 second).

// Syntax

setInterval(functionName, delay);

// OR

setInterval(() => {
    // Code to execute
}, delay);

// Example 1

setInterval(() => {
    console.log("Hello JavaScript!");
}, 2000);

// Output
// Hello JavaScript!   (Every 2 seconds)

// Example 2

function greet() {
    console.log("Welcome!");
}

setInterval(greet, 3000);

// Output
// Welcome!   (Every 3 seconds)

// Example 3

let count = 1;

let timer = setInterval(() => {
    console.log("Count:", count);
    count++;
}, 1000);

// Output
// Count: 1
// Count: 2
// Count: 3
// ...

// Example 4 (Using clearInterval)

let intervalId = setInterval(() => {
    console.log("Running...");
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval Stopped");
}, 5000);

// Summary
// setInterval()    -> Repeats code after a fixed interval.
// Delay is measured in milliseconds.
// clearInterval()  -> Stops the interval.