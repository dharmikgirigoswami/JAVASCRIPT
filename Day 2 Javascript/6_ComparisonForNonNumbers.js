// Definition:
// In JavaScript, non-number values such as strings, booleans, null,
// and undefined can also be compared using comparison operators.

// String Comparison (Lexicographical/Alphabetical)

console.log("apple" < "banana");   // true
console.log("cat" > "bat");        // true
console.log("Hello" == "Hello");   // true

// Boolean Comparison

console.log(true == 1);    // true
console.log(false == 0);   // true
console.log(true === 1);   // false (different data types)

// null and undefined

console.log(null == undefined);   // true
console.log(null === undefined);  // false

// String and Number Comparison

console.log("10" > 5);     // true
console.log("5" == 5);     // true
console.log("5" === 5);    // false (string vs number)

// Recommended: Use Strict Comparison

console.log(10 === 10);    // true
console.log("10" === 10);  // false

// Common Comparison Operators
// ==   Equal (checks value only)
// ===  Strict Equal (checks value and type)
// !=   Not Equal
// !==  Strict Not Equal
// >    Greater Than
// <    Less Than
// >=   Greater Than or Equal
// <=   Less Than or Equal