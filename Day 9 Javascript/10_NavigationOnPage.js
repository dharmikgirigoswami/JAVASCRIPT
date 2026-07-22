// Definition:
// DOM Navigation is used to move from one HTML element
// to another using parent, child, and sibling relationships.

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<div id="parent">

    <h1 id="heading">Heading</h1>

    <p id="para">Paragraph</p>

</div>

</body>
</html>
*/

// Select Elements

let parent = document.getElementById("parent");
let heading = document.getElementById("heading");
let para = document.getElementById("para");

// ===============================
// 1. parentElement
// ===============================
// Returns the parent element.

console.log(heading.parentElement);

// Output
// <div id="parent">

// ===============================
// 2. children
// ===============================
// Returns all child elements.

console.log(parent.children);

// Output
// HTMLCollection(2)

// ===============================
// 3. firstElementChild
// ===============================
// Returns the first child element.

console.log(parent.firstElementChild);

// Output
// <h1 id="heading">

// ===============================
// 4. lastElementChild
// ===============================
// Returns the last child element.

console.log(parent.lastElementChild);

// Output
// <p id="para">

// ===============================
// 5. nextElementSibling
// ===============================
// Returns the next sibling element.

console.log(heading.nextElementSibling);

// Output
// <p id="para">

// ===============================
// 6. previousElementSibling
// ===============================
// Returns the previous sibling element.

console.log(para.previousElementSibling);

// Output
// <h1 id="heading">

// ===============================
// Summary
// ===============================

// parentElement          -> Parent element
// children               -> All child elements
// firstElementChild      -> First child element
// lastElementChild       -> Last child element
// nextElementSibling     -> Next sibling element
// previousElementSibling -> Previous sibling element