// Definition:
// Operators are symbols used to perform operations on variables and values
// in JavaScript.

// 1. Arithmetic Operators

let a = 10;
let b = 5;

console.log(a + b);  // Addition       = 15
console.log(a - b);  // Subtraction    = 5
console.log(a * b);  // Multiplication = 50
console.log(a / b);  // Division       = 2
console.log(a % b);  // Modulus        = 0
console.log(a ** b); // Exponentiation = 100000
console.log(a++);    // Increment
console.log(b--);    // Decrement

// 2. Assignment Operators

let x = 10;
x += 5;   // x = x + 5
x -= 2;   // x = x - 2
x *= 3;   // x = x * 3
x /= 2;   // x = x / 2

// 3. Comparison Operators

console.log(a == b);   // Equal
console.log(a != b);   // Not Equal
console.log(a > b);    // Greater Than
console.log(a < b);    // Less Than
console.log(a >= b);   // Greater Than or Equal
console.log(a <= b);   // Less Than or Equal
console.log(a === b);  // Strict Equal
console.log(a !== b);  // Strict Not Equal

// 4. Logical Operators

let p = true;
let q = false;

console.log(p && q); // AND
console.log(p || q); // OR
console.log(!p);     // NOT

// 5. String Operator

let firstName = "Dharmik";
let lastName = "Goswami";

console.log(firstName + " " + lastName); // Concatenation