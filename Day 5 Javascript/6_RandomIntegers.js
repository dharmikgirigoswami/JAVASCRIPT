// Definition:
// Random Integers are whole numbers generated randomly within
// a specified range.
// JavaScript uses Math.random() along with Math.floor() to generate them.

// Syntax
// Math.floor(Math.random() * range) + start;

// Example 1: Random Integer from 1 to 10

let random1 = Math.floor(Math.random() * 10) + 1;

console.log(random1);

// Example 2: Random Integer from 1 to 100

let random2 = Math.floor(Math.random() * 100) + 1;

console.log(random2);

// Example 3: Random Integer from 0 to 9

let random3 = Math.floor(Math.random() * 10);

console.log(random3);

// Example 4: Random Integer from 50 to 100

let random4 = Math.floor(Math.random() * 51) + 50;

console.log(random4);

// Formula for Random Integer in Any Range
// Math.floor(Math.random() * (max - min + 1)) + min

// Example 5: Random Integer from 20 to 30

let min = 20;
let max = 30;

let random5 = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(random5);