// Definition:
// The Call Stack is a data structure that keeps track
// of function calls in JavaScript.
// It follows the LIFO (Last In, First Out) principle.
// The last function added to the stack is the first one removed.

// Example 1

function one() {
    console.log("Function One");
}

function two() {
    one();
    console.log("Function Two");
}

function three() {
    two();
    console.log("Function Three");
}

three();

// Output
// Function One
// Function Two
// Function Three

// Call Stack Execution
// 1. Global Execution
// 2. three()
// 3. two()
// 4. one()
// 5. one() finishes and is removed.
// 6. two() finishes and is removed.
// 7. three() finishes and is removed.

// ======================================
// Example 2
// ======================================

function greet() {
    console.log("Hello");
}

function welcome() {
    greet();
    console.log("Welcome");
}

welcome();

// Output
// Hello
// Welcome

// ======================================
// Example 3
// ======================================

function add(a, b) {
    return a + b;
}

function calculate() {
    let result = add(10, 20);
    console.log(result);
}

calculate();

// Output
// 30

// ======================================
// Example 4 (Stack Overflow)
// ======================================

function loop() {
    loop();
}

// loop();

// Output
// RangeError: Maximum call stack size exceeded

// ======================================
// Summary
// ======================================

// ✔ Call Stack manages function execution.
// ✔ It follows LIFO (Last In, First Out).
// ✔ Functions are pushed onto the stack when called.
// ✔ Functions are popped from the stack after execution.
// ✔ Infinite recursion causes "Maximum call stack size exceeded".