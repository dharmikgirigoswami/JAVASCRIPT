// Definition:
// DOM (Document Object Model) is a programming interface
// for HTML documents. It allows JavaScript to access,
// modify, create, and delete HTML elements dynamically.

// HTML Example

/*
<!DOCTYPE html>
<html>
<body>

<h1 id="title">Hello World</h1>

</body>
</html>
*/

// JavaScript

let heading = document.getElementById("title");

console.log(heading);

// Output
// <h1 id="title">Hello World</h1>

// Change Text

heading.innerText = "Welcome to JavaScript";

// Change CSS

heading.style.color = "blue";

// Summary
// document                 -> Represents the entire HTML document.
// getElementById()         -> Selects an element by id.
// innerText               -> Changes the text of an element.
// style.property          -> Changes the CSS of an element.