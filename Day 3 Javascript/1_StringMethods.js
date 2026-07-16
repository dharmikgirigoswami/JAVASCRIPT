// Definition:
// String Methods are built-in JavaScript functions used to perform
// operations on strings such as changing case, finding text,
// extracting characters, and replacing text.

// Example String

let text = "Hello JavaScript";

// 1. length
console.log(text.length); // 16

// 2. toUpperCase()
console.log(text.toUpperCase()); // HELLO JAVASCRIPT

// 3. toLowerCase()
console.log(text.toLowerCase()); // hello javascript

// 4. trim()
let str = "   Hello   ";
console.log(str.trim()); // Hello

// 5. indexOf()
console.log(text.indexOf("Java")); // 6

// 6. includes()
console.log(text.includes("Java")); // true

// 7. startsWith()
console.log(text.startsWith("Hello")); // true

// 8. endsWith()
console.log(text.endsWith("Script")); // true

// 9. slice()
console.log(text.slice(6, 16)); // JavaScript

// 10. replace()
console.log(text.replace("Java", "Type")); // Hello TypeScript

// 11. repeat()
console.log("Hi ".repeat(3)); // Hi Hi Hi

// 12. charAt()
console.log(text.charAt(1)); // e

// 13. concat()
console.log("Hello".concat(" ", "World")); // Hello World

// 14. split()
console.log(text.split(" ")); // ["Hello", "JavaScript"]