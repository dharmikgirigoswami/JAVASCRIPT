// Definition:
// The return statement is used to send a value back from a function.
// When return is executed, the function stops immediately and returns
// the specified value.

// Syntax

function functionName() {
    return value;
}

// Example 1

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result); // 30

// Example 2

function square(num) {
    return num * num;
}

console.log(square(5)); // 25

// Example 3

function greet(name) {
    return "Hello " + name;
}

let message = greet("Dharmik");

console.log(message); // Hello Dharmik

// Example 4

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(8)); // true
console.log(isEven(7)); // false

// Example 5

function multiply(x, y) {
    return x * y;
}

let answer = multiply(6, 5);

console.log(answer); // 30