// Definition:
// A Higher-Order Function (HOF) is a function that either
// 1. Takes one or more functions as arguments, or
// 2. Returns a function as its result.

// Example 1: Function as an Argument

function greet() {
    console.log("Hello!");
}

function execute(func) {
    func();
}

execute(greet); // Hello!

// Example 2: Function with Parameters

function add(a, b) {
    console.log(a + b);
}

function calculate(operation, x, y) {
    operation(x, y);
}

calculate(add, 10, 20); // 30

// Example 3: Function Returning Another Function

function multiplyBy(num) {
    return function(value) {
        return value * num;
    };
}

let double = multiplyBy(2);

console.log(double(5)); // 10

// Example 4: Higher-Order Function with Arrow Function

function repeat(task, n) {
    for (let i = 1; i <= n; i++) {
        task();
    }
}

repeat(() => {
    console.log("JavaScript");
}, 3);

// Output
// JavaScript
// JavaScript
// JavaScript

// Summary
// ✔ Takes another function as an argument.
// ✔ Returns another function.
// ✔ Makes code reusable and flexible.