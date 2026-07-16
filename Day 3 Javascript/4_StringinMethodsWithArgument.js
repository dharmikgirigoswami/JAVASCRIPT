// Definition:
// String methods with arguments are built-in JavaScript methods that
// require one or more values (arguments) inside parentheses to perform
// operations on strings.

let text = "Hello JavaScript";
let text2 = "Java Java Java";
let name = "Dharmik";
let courses = "HTML,CSS,JavaScript";

// 1. indexOf(value)
console.log(text.indexOf("Java")); // 6

// 2. includes(value)
console.log(text.includes("Script")); // true

// 3. startsWith(value)
console.log(text.startsWith("Hello")); // true

// 4. endsWith(value)
console.log(text.endsWith("Script")); // true

// 5. slice(start, end)
console.log(text.slice(6, 16)); // JavaScript

// 6. substring(start, end)
console.log(text.substring(6, 16)); // JavaScript

// 7. replace(oldValue, newValue)
console.log(text.replace("Java", "Type")); // Hello TypeScript

// 8. replaceAll(oldValue, newValue)
console.log(text2.replaceAll("Java", "JS")); // JS JS JS

// 9. repeat(count)
console.log("Hi ".repeat(3)); // Hi Hi Hi

// 10. charAt(index)
console.log(name.charAt(2)); // a

// 11. at(index)
console.log(name.at(-1)); // k

// 12. concat(string)
console.log(name.concat(" Goswami")); // Dharmik Goswami

// 13. split(separator)
console.log(courses.split(",")); // ["HTML", "CSS", "JavaScript"]

// 14. search(value)
console.log(text.search("Java")); // 6

// 15. match(value)
console.log(text.match("Java")); // ["Java"]

// Common String Methods with Arguments
// indexOf(value)
// includes(value)
// startsWith(value)
// endsWith(value)
// slice(start, end)
// substring(start, end)
// replace(oldValue, newValue)
// replaceAll(oldValue, newValue)
// repeat(count)
// charAt(index)
// at(index)
// concat(string)
// split(separator)
// search(value)
// match(value)