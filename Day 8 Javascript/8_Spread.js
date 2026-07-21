// Definition:
// The Spread Operator (...) is used to expand or spread
// the elements of an array, object, or string.
// It is commonly used to copy, merge, and pass multiple values.

// Syntax

// Array
let newArray = [...array];

// Object
let newObject = { ...object };

// Example 1: Copy an Array

let arr1 = [1, 2, 3];

let arr2 = [...arr1];

console.log(arr2);

// Output
// [1, 2, 3]

// Example 2: Merge Arrays

let arr3 = [1, 2];
let arr4 = [3, 4];

let arr5 = [...arr3, ...arr4];

console.log(arr5);

// Output
// [1, 2, 3, 4]

// Example 3: Add New Elements

let numbers = [20, 30];

let newNumbers = [10, ...numbers, 40];

console.log(newNumbers);

// Output
// [10, 20, 30, 40]

// Example 4: Copy an Object

let student = {
    name: "Dharmik",
    age: 20
};

let studentCopy = { ...student };

console.log(studentCopy);

// Output
// { name: "Dharmik", age: 20 }

// Example 5: Merge Objects

let person = {
    name: "Rahul"
};

let details = {
    age: 21,
    city: "Surat"
};

let user = {
    ...person,
    ...details
};

console.log(user);

// Output
// { name: "Rahul", age: 21, city: "Surat" }

// Example 6: Spread a String

let word = "Java";

let letters = [...word];

console.log(letters);

// Output
// ["J", "a", "v", "a"]

// Example 7: Function Arguments

function add(a, b, c) {
    return a + b + c;
}

let values = [10, 20, 30];

console.log(add(...values));

// Output
// 60

// Summary
// ...array      -> Copy or merge arrays
// ...object     -> Copy or merge objects
// ...string     -> Convert string into characters
// ...arguments  -> Pass array values as function arguments