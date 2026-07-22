// Definition:
// JavaScript can change the content of HTML elements
// using properties like innerText, innerHTML, and textContent.

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<h1 id="heading">Hello</h1>

<p id="para">Welcome</p>

</body>
</html>
*/

// ===============================
// 1. innerText
// ===============================
// Changes only the visible text.

let heading = document.getElementById("heading");

heading.innerText = "Welcome to JavaScript";

// Output
// Welcome to JavaScript

// ===============================
// 2. innerHTML
// ===============================
// Changes HTML content, including tags.

let para = document.getElementById("para");

para.innerHTML = "<b>Learning DOM</b>";

// Output
// Learning DOM (Bold)

// ===============================
// 3. textContent
// ===============================
// Changes all text, including hidden text.

heading.textContent = "DOM Tutorial";

// Output
// DOM Tutorial

// ===============================
// Summary
// ===============================

// innerText
// ✔ Changes only visible text.

// innerHTML
// ✔ Changes HTML content.
// ✔ Supports HTML tags.

// textContent
// ✔ Changes all text content.
// ✔ Does not interpret HTML tags.