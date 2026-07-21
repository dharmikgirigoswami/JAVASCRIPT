// Definition:
// reduce() is used to reduce all elements of an array
// into a single value.
// It executes a callback function for each array element
// and returns one final result.

// Syntax

array.reduce(function(accumulator, currentValue) {
    // return updated accumulator;
}, initialValue);



let numbers = [10, 20, 30, 40];

let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);

// Output
// 100