// Definition:
// Operator Precedence is the order in which JavaScript evaluates
// operators in an expression. Operators with higher precedence
// are evaluated before operators with lower precedence.

// Example 1

let result1 = 10 + 5 * 2;
console.log(result1); // 20
// Multiplication (*) is performed before Addition (+)

// Example 2

let result2 = (10 + 5) * 2;
console.log(result2); // 30
// Parentheses () have the highest precedence

// Example 3

let result3 = 20 - 10 / 2;
console.log(result3); // 15
// Division (/) is performed before Subtraction (-)

// Common Operator Precedence (Highest to Lowest)
// ()  -> Parentheses
// **  -> Exponentiation
// *, /, % -> Multiplication, Division, Modulus
// +, - -> Addition, Subtraction
// >, <, >=, <= -> Comparison
// ==, !=, ===, !== -> Equality
// && -> Logical AND
// || -> Logical OR
// =, +=, -=, *=, /= -> Assignment