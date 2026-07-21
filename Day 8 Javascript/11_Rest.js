// Definition:
// The Rest Parameter (...) collects multiple arguments
// into a single array.
// It is mainly used in functions when the number of
// arguments is unknown.

// Syntax

function functionName(...parameter) {
    // Code
}

// Example 1: Collect All Arguments

function showNumbers(...numbers) {
    console.log(numbers);
}

showNumbers(10, 20, 30, 40);

// Output
// [10, 20, 30, 40]

// Example 2: Sum of Numbers

function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30));
console.log(sum(5, 10, 15, 20));

// Output
// 60
// 50

// Example 3: Fixed and Rest Parameters

function student(name, ...marks) {
    console.log(name);
    console.log(marks);
}

student("Dharmik", 80, 90, 85);

// Output
// Dharmik
// [80, 90, 85]

// Example 4: Using reduce()

function add(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(add(1, 2, 3, 4, 5));

// Output
// 15

// Example 5: Rest with Arrow Function

const multiply = (...numbers) => {
    return numbers.reduce((result, num) => result * num, 1);
};

console.log(multiply(2, 3, 4));

// Output
// 24

// Summary
// (...args)          -> Collects all arguments into an array.
// Rest parameter must always be the LAST parameter.
// Used when the number of arguments is unknown.

// Example
// function demo(a, b, ...rest) { }   ✔ Correct
// function demo(...rest, a) { }      ✘ Incorrect