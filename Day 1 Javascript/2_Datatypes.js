// Definition:
// Data types define the kind of value a variable can store in JavaScript.
// They tell JavaScript whether the value is text, number, boolean, etc.

// Primitive Data Types

let name = "Dharmik";          // String
let age = 20;                  // Number
let isStudent = true;          // Boolean
let salary = null;             // Null
let city;                      // Undefined
let id = Symbol("id");         // Symbol
let bigNumber = 12345678901234567890n; // BigInt

// Non-Primitive Data Type

let student = {
    name: "Dharmik",
    age: 20
}; // Object

// Displaying values
console.log(name);
console.log(age);
console.log(isStudent);
console.log(salary);
console.log(city);
console.log(id);
console.log(bigNumber);
console.log(student);