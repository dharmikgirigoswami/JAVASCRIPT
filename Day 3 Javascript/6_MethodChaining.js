// Definition:
// Method Chaining is the process of calling multiple methods
// one after another on the same object in a single statement.
// The output of one method becomes the input for the next method.

// Example 1

let text = "   hello javascript   ";

let result = text.trim().toUpperCase();

console.log(result); // HELLO JAVASCRIPT

// Example 2

let message = "Welcome to JavaScript";

console.log(message.toLowerCase().includes("javascript")); // true

// Example 3

let name = "   Dharmik Goswami   ";

console.log(name.trim().toUpperCase().replace("DHARMIK", "MR."));
// MR. GOSWAMI

// Common Method Chaining Examples
// trim().toUpperCase()
// trim().toLowerCase()
// trim().replace()
// toUpperCase().includes()
// slice().toUpperCase()