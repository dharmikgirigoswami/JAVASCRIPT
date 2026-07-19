// Definition:
// Lexical Scope means an inner function can access the variables
// of its outer (parent) function because of where it is defined
// in the source code.

// Example 1

function outer() {
    let message = "Hello JavaScript";

    function inner() {
        console.log(message);
    }

    inner();
}

outer(); // Hello JavaScript

// Example 2

let name = "Dharmik";

function first() {
    let age = 20;

    function second() {
        console.log(name); // Global Variable
        console.log(age);  // Outer Function Variable
    }

    second();
}

first();

// Example 3

function parent() {
    let city = "Surat";

    function child() {
        console.log(city);
    }

    child();
}

parent(); // Surat

// Summary
// ✔ Inner function can access its own variables.
// ✔ Inner function can access outer function variables.
// ✔ Inner function can access global variables.
// ✘ Outer function cannot access inner function variables.