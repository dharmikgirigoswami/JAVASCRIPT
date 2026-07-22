// Definition:
// querySelector() is used to select the first HTML element
// that matches a specified CSS selector.
// It returns only the first matching element.

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<h1 id="title">JavaScript</h1>

<p class="text">Paragraph 1</p>
<p class="text">Paragraph 2</p>

</body>
</html>
*/

// Syntax

document.querySelector("selector");

// Example 1: Select by ID

let heading = document.querySelector("#title");

console.log(heading);

// Output
// <h1 id="title">JavaScript</h1>

// Example 2: Select by Class

let paragraph = document.querySelector(".text");

console.log(paragraph);

// Output
// <p class="text">Paragraph 1</p>

// Example 3: Select by Tag Name

let h1 = document.querySelector("h1");

console.log(h1);

// Output
// <h1 id="title">JavaScript</h1>

// Example 4: Change Text

heading.innerText = "Welcome to JavaScript";

// Example 5: Change CSS

paragraph.style.color = "blue";
paragraph.style.fontSize = "25px";

// Example 6: Change HTML

heading.innerHTML = "<i>DOM Example</i>";

// Summary
// document.querySelector("#id")     -> Select first element by ID.
// document.querySelector(".class")  -> Select first element by Class.
// document.querySelector("tag")     -> Select first element by Tag.
// ✔ Returns only the FIRST matching element.