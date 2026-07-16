// Definition:
// indexOf() is a JavaScript string method that returns the index
// (position) of the first occurrence of a specified character or substring.
// If the value is not found, it returns -1.

// Syntax
// string.indexOf(searchValue);

// Example 1

let text = "Hello JavaScript";

console.log(text.indexOf("Java")); // 6

// Example 2

let name = "Dharmik";

console.log(name.indexOf("a")); // 2

// Example 3 (Value Not Found)

let language = "JavaScript";

console.log(language.indexOf("Python")); // -1

// Example 4 (Finding a Character)

let word = "Programming";

console.log(word.indexOf("g")); // 3