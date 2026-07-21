// Definition:
// map() creates a new array by applying a function
// to every element of the original array.
// It does not modify the original array.

// Syntax

array.map(function(element) {
    // return new value;
});

// Example 1

let numbers = [1, 2, 3, 4, 5];

let square = numbers.map(function(num) {
    return num * num;
});

console.log(square);

// Output
// [1, 4, 9, 16, 25]

// Example 2 (Arrow Function)

let cube = numbers.map(num => num * num * num);

console.log(cube);

// Output
// [1, 8, 27, 64, 125]




// Definition:
// filter() creates a new array containing only
// the elements that satisfy a given condition.
// It does not modify the original array.

// Syntax

array.filter(function(element) {
    // return true or false;
});

// Example 1

let numbers = [1, 2, 3, 4, 5, 6];

let even = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(even);

// Output
// [2, 4, 6]

// Example 2 (Arrow Function)

let odd = numbers.filter(num => num % 2 !== 0);

console.log(odd);

// Output
// [1, 3, 5]

// Example 3

let marks = [35, 80, 90, 25, 60];

let pass = marks.filter(mark => mark >= 40);

console.log(pass);

// Output
// [80, 90, 60]