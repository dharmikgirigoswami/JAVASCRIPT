// Definition:
// NaN stands for "Not a Number".
// It is a special value in JavaScript that represents an invalid number.

// Examples

let a = 10 / "Hello";   // Invalid mathematical operation
let b = Number("ABC");  // Cannot convert text to a number

console.log(a); // NaN
console.log(b); // NaN

// Checking if a value is NaN
console.log(Number.isNaN(a)); // true
console.log(Number.isNaN(b)); // true