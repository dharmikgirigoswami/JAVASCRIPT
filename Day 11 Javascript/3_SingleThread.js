// Definition:
// JavaScript is a Single-Threaded language.
// It can execute only one task (one line of code)
// at a time using a single Call Stack.
// A new task starts only after the current task finishes.

// Example 1

console.log("Start");

console.log("Learning JavaScript");

console.log("End");

// Output
// Start
// Learning JavaScript
// End

// ======================================
// Example 2

function first() {
    console.log("First Function");
}

function second() {
    console.log("Second Function");
}

first();
second();

// Output
// First Function
// Second Function

// ======================================
// Example 3

function task1() {
    console.log("Task 1");
}

function task2() {
    console.log("Task 2");
}

task1();
task2();

console.log("Task 3");

// Output
// Task 1
// Task 2
// Task 3

// ======================================
// Example 4 (Single Thread with setTimeout)

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 2000);

console.log("End");

// Output
// Start
// End
// Timeout

// Explanation:
// JavaScript executes "Start" and "End" first.
// setTimeout() is handled by the browser/Web APIs.
// After 2 seconds, its callback is placed in the
// Callback Queue and executed when the Call Stack is empty.

// ======================================
// Summary
// ======================================

// ✔ JavaScript is Single-Threaded.
// ✔ Executes one task at a time.
// ✔ Uses one Call Stack.
// ✔ Tasks execute in order.
// ✔ Asynchronous functions (setTimeout, fetch, etc.)
//    allow non-blocking behavior using Web APIs,
//    the Callback Queue, and the Event Loop.