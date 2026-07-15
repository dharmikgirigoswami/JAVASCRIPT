// Definition:
// Conditional Statements are used to make decisions in JavaScript.
// They execute different blocks of code based on whether a condition
// is true or false.

// 1. if Statement

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

// 2. if...else Statement

let marks = 35;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 3. if...else if...else Statement

let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}



// 5. Ternary Operator

let isAdult = (age >= 18) ? "Adult" : "Minor";
console.log(isAdult);