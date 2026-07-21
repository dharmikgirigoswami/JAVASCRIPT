// Definition:
// every() checks whether all elements in an array
// satisfy a given condition.
// It returns true if every element passes the test,
// otherwise it returns false.

// Syntax

array.every(function(element) {
    // return true or false;
});

// Example 1

let numbers = [2, 4, 6, 8];

let result = numbers.every(num => num % 2 === 0);

console.log(result);

// Output
// true

// Example 2

let marks = [80, 75, 90, 35];

let pass = marks.every(mark => mark >= 40);

console.log(pass);

// Output
// false

// Example 3

let ages = [18, 20, 25, 30];

let adult = ages.every(age => age >= 18);

console.log(adult);

// Output
// true



// Definition:
// some() checks whether at least one element
// in an array satisfies a given condition.
// It returns true if any one element passes the test,
// otherwise it returns false.

// Syntax

array.some(function(element) {
    // return true or false;
});

// Example 1

let numbers = [1, 3, 5, 8];

let even = numbers.some(num => num % 2 === 0);

console.log(even);

// Output
// true

// Example 2

let marks = [20, 30, 35, 45];

let pass = marks.some(mark => mark >= 40);

console.log(pass);

// Output
// true

// Example 3

let ages = [10, 12, 15];

let adult = ages.some(age => age >= 18);

console.log(adult);

// Output
// false
