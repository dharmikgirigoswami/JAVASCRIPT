// Definition:
// A Function Expression is a function that is stored inside
// a variable. The function can be called using the variable name.

// Syntax

let variableName = function() {
    // Code to execute
};

// Example 1

let greet = function() {
    console.log("Hello JavaScript!");
};

greet();

// Example 2

let add = function(a, b) {
    return a + b;
};

console.log(add(10, 20)); // 30

// Example 3

let square = function(num) {
    return num * num;
};

console.log(square(5)); // 25

// Example 4

let isEven = function(num) {
    return num % 2 === 0;
};

console.log(isEven(8)); // true
console.log(isEven(7)); // false

// Output
// Hello JavaScript!
// 30
// 25
// true
// false