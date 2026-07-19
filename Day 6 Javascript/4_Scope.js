// Definition:
// Scope is the area where a variable can be accessed in a program.
// JavaScript mainly has three types of scope:
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope

// 1. Global Scope
// A variable declared outside all functions or blocks
// can be accessed from anywhere.

let name = "Dharmik";

function showName() {
    console.log(name);
}

showName();          // Dharmik
console.log(name);   // Dharmik

// 2. Function Scope
// Variables declared with var inside a function
// can only be accessed within that function.

function greet() {
    var message = "Hello!";
    console.log(message);
}

greet(); // Hello!

// console.log(message); // Error

// 3. Block Scope
// Variables declared with let or const inside a block
// can only be accessed inside that block.

if (true) {
    let age = 20;
    const city = "Surat";

    console.log(age);   // 20
    console.log(city);  // Surat
}

// console.log(age);  // Error
// console.log(city); // Error

// Example

let x = 10;

function demo() {
    let y = 20;
    console.log(x); // 10 (Global Variable)
    console.log(y); // 20 (Local Variable)
}

demo();

// console.log(y); // Error

// Summary
// Global Scope   -> Accessible everywhere
// Function Scope -> Accessible only inside a function
// Block Scope    -> Accessible only inside a block ({})