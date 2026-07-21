// Definition:
// Default Parameters allow you to assign default values
// to function parameters. If no argument is passed,
// the default value is used.

// Syntax

function functionName(parameter = defaultValue) {
    // Code
}

// Example 1

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Dharmik"); // Hello Dharmik
greet();          // Hello Guest

// Example 2

function add(a, b = 10) {
    return a + b;
}

console.log(add(5, 20)); // 25
console.log(add(5));     // 15

// Example 3

function multiply(x = 2, y = 3) {
    return x * y;
}

console.log(multiply());      // 6
console.log(multiply(5));     // 15
console.log(multiply(5, 4));  // 20

// Example 4

const welcome = (name = "User") => {
    console.log("Welcome " + name);
};

welcome("Rahul"); // Welcome Rahul
welcome();        // Welcome User

// Summary
// ✔ Default parameters provide a value if no argument is passed.
// ✔ They make functions more flexible.
// ✔ They work with both regular functions and arrow functions.