// Definition:
// The Math object is a built-in JavaScript object that provides
// mathematical constants and methods.
// It does not need to be created using new.

// Math Constants

console.log(Math.PI);    // 3.141592653589793
console.log(Math.E);     // 2.718281828459045

// 1. Math.abs() - Returns the absolute (positive) value

console.log(Math.abs(-25)); // 25

// 2. Math.pow() - Returns the power of a number

console.log(Math.pow(2, 3)); // 8

// 3. Math.sqrt() - Returns the square root

console.log(Math.sqrt(64)); // 8

// 4. Math.cbrt() - Returns the cube root

console.log(Math.cbrt(27)); // 3

// 5. Math.max() - Returns the largest number

console.log(Math.max(10, 20, 30, 40)); // 40

// 6. Math.min() - Returns the smallest number

console.log(Math.min(10, 20, 30, 40)); // 10

// 7. Math.floor() - Rounds down to the nearest integer

console.log(Math.floor(4.9)); // 4

// 8. Math.ceil() - Rounds up to the nearest integer

console.log(Math.ceil(4.1)); // 5

// 9. Math.round() - Rounds to the nearest integer

console.log(Math.round(4.5)); // 5

// 10. Math.random() - Returns a random number between 0 and 1

console.log(Math.random());

// Example: Random number between 1 and 10

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

// Common Math Methods
// Math.PI
// Math.E
// Math.abs()
// Math.pow()
// Math.sqrt()
// Math.cbrt()
// Math.max()
// Math.min()
// Math.floor()
// Math.ceil()
// Math.round()
// Math.random()