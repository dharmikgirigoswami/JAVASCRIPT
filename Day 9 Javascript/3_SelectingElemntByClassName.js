// Definition:
// getElementsByClassName() is used to select all HTML
// elements that have the same class name.
// It returns an HTMLCollection (array-like object).

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<h2 class="heading">JavaScript</h2>
<h2 class="heading">DOM</h2>
<h2 class="heading">HTML</h2>

</body>
</html>
*/

// Syntax

document.getElementsByClassName("className");

// Example 1

let headings = document.getElementsByClassName("heading");

console.log(headings);

// Output
// HTMLCollection(3)

// Example 2: Access Individual Elements

console.log(headings[0].innerText);
console.log(headings[1].innerText);
console.log(headings[2].innerText);

// Output
// JavaScript
// DOM
// HTML

// Example 3: Change Text

headings[0].innerText = "Welcome to JavaScript";

// Example 4: Change CSS

headings[1].style.color = "blue";
headings[2].style.fontSize = "30px";

// Example 5: Loop Through All Elements

for (let i = 0; i < headings.length; i++) {
    headings[i].style.color = "red";
}

// Summary
// document.getElementsByClassName("className")
// ✔ Selects all elements with the given class name.
// ✔ Returns an HTMLCollection.
// ✔ Access elements using index.
// ✔ Use a loop to modify all selected elements.