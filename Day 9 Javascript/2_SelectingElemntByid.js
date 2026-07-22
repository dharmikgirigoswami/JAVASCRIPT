// Definition:
// getElementById() is used to select an HTML element
// using its unique id attribute.
// It returns a single element.

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<h1 id="heading">Hello JavaScript</h1>
<p id="para">Welcome to DOM</p>

</body>
</html>
*/

// Syntax

document.getElementById("idName");

// Example 1

let heading = document.getElementById("heading");

console.log(heading);

// Output
// <h1 id="heading">Hello JavaScript</h1>

// Example 2: Change Text

let para = document.getElementById("para");

para.innerText = "DOM is Easy";

// Output
// DOM is Easy

// Example 3: Change CSS

heading.style.color = "blue";
heading.style.fontSize = "40px";

// Example 4: Change HTML

heading.innerHTML = "<i>Welcome to JavaScript</i>";

// Example 5: Read Text

console.log(heading.innerText);

// Output
// Welcome to JavaScript

// Summary
// document.getElementById("id")
// ✔ Selects an element using its id.
// ✔ Returns one element.
// ✔ Used to change text, HTML, styles, and attributes.