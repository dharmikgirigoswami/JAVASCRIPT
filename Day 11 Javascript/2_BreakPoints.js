// Definition:
// A Breakpoint is a debugging point where JavaScript
// execution pauses, allowing you to inspect variables,
// the call stack, and program flow.
// It helps find and fix errors in your code.

// Example 1

let a = 10;
let b = 20;

// Set a breakpoint on the next line in your browser or VS Code.
let sum = a + b;

console.log(sum);

// Output
// 30

// ======================================
// Example 2

function add(x, y) {
    let result = x + y; // Set breakpoint here
    return result;
}

console.log(add(5, 10));

// Output
// 15

// ======================================
// Example 3 (Using debugger Keyword)

let num = 100;

debugger; // Execution pauses here if DevTools are open.

console.log(num);

// ======================================
// Example 4

function greet(name) {
    debugger; // Pause before the next statement
    console.log("Hello " + name);
}

greet("Dharmik");

// Output
// Hello Dharmik

// ======================================
// Summary
// ======================================

// Breakpoint
// ✔ Pauses JavaScript execution.
// ✔ Used to inspect variables and program flow.
// ✔ Can be added in VS Code or Browser DevTools.
// ✔ debugger; creates a breakpoint directly in the code.