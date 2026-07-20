// Definition:
// try...catch is used for error handling in JavaScript.
// The code that may cause an error is placed inside the try block.
// If an error occurs, the catch block handles the error
// without stopping the program.

// Syntax

try {
    // Code that may produce an error
}
catch(error) {
    // Code to handle the error
}

// Example 1

try {
    console.log(a); // 'a' is not defined
}
catch(error) {
    console.log("An error occurred.");
}

console.log("Program Continues");

// Output
// An error occurred.
// Program Continues

// Example 2

try {
    let num = 10;
    console.log(num.toUpperCase()); // Error
}
catch(error) {
    console.log("Invalid Operation");
}

console.log("End of Program");

// Output
// Invalid Operation
// End of Program

// Example 3

try {
    console.log("Inside Try Block");
}
catch(error) {
    console.log("This will not execute");
}

console.log("No Error Found");

// Output
// Inside Try Block
// No Error Found

// Example 4 (Printing the Error)

try {
    console.log(x); // x is not defined
}
catch(error) {
    console.log(error);
}

// Summary
// try   -> Contains code that may produce an error.
// catch -> Executes only if an error occurs.
// error -> Stores information about the error.