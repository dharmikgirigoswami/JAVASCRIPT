// Definition:
// Operators are special symbols used to perform operations
// on variables and values in JavaScript.

// 1. Arithmetic Operators

let a = 10;
let b = 5;

console.log(a + b);  // Addition       -> 15
console.log(a - b);  // Subtraction    -> 5
console.log(a * b);  // Multiplication -> 50
console.log(a / b);  // Division       -> 2
console.log(a % b);  // Modulus        -> 0
console.log(a ** b); // Exponentiation -> 100000

// 2. Assignment Operators

let x = 10;

x += 5;   // x = x + 5
x -= 2;   // x = x - 2
x *= 3;   // x = x * 3
x /= 2;   // x = x / 2
x %= 4;   // x = x % 4
x **= 2;  // x = x ** 2

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

// 5. Unary Operators

let num = 10;

console.log(+num); // Unary Plus
console.log(-num); // Unary Minus
num++;
console.log(num);  // Increment
num--;
console.log(num);  // Decrement

// 6. String Operator

let firstName = "Dharmik";
let lastName = "Goswami";

console.log(firstName + " " + lastName);

// 7. Ternary Operator

let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";

console.log(result);

// 8. typeof Operator

console.log(typeof age);       // number
console.log(typeof firstName); // string
console.log(typeof p);         // boolean