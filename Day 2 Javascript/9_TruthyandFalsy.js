// Definition:
// In JavaScript, every value is either Truthy or Falsy when used
// in a condition.
//
// Truthy Values -> Behave like true.
// Falsy Values  -> Behave like false.

// Falsy Values (Only 8)

console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false (BigInt zero)
console.log(Boolean(""));         // false (Empty String)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Truthy Values

console.log(Boolean(true));       // true
console.log(Boolean(1));          // true
console.log(Boolean(-5));         // true
console.log(Boolean("Hello"));    // true
console.log(Boolean("0"));        // true
console.log(Boolean("false"));    // true
console.log(Boolean([]));         // true (Empty Array)
console.log(Boolean({}));         // true (Empty Object)

// Example

let name = "Dharmik";

if (name) {
    console.log("This is a Truthy value.");
} else {
    console.log("This is a Falsy value.");
}