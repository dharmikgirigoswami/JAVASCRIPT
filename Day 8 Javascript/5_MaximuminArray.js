// Definition:
// reduce() can be used to find the largest (maximum)
// element in an array by comparing each element.

// Example 1

let numbers = [10, 25, 5, 40, 18];

let max = numbers.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
});

console.log(max);

// Output
// 40