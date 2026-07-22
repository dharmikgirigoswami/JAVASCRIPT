// Definition:
// JavaScript can remove HTML elements from a web page
// using DOM methods like remove(), removeChild(), and replaceChild().

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<div id="container">
    <h2 id="heading">JavaScript DOM</h2>
    <p id="para">This is a paragraph.</p>
</div>

</body>
</html>
*/

// Select Elements

let container = document.getElementById("container");
let heading = document.getElementById("heading");
let para = document.getElementById("para");

// ===============================
// 1. remove()
// ===============================
// Removes the selected element.

heading.remove();

// Output
// <h2>JavaScript DOM</h2> is removed.

// ===============================
// 2. removeChild()
// ===============================
// Removes a child element from its parent.

container.removeChild(para);

// Output
// <p>This is a paragraph.</p> is removed.

// ===============================
// 3. replaceChild()
// ===============================
// Replaces one child element with another.

let newHeading = document.createElement("h3");
newHeading.innerText = "New Heading";

container.appendChild(heading);

container.replaceChild(newHeading, heading);

// Output
// <h2>JavaScript DOM</h2>
// is replaced with
// <h3>New Heading</h3>

// ===============================
// Summary
// ===============================

// element.remove()
// ✔ Removes the selected element.

// parent.removeChild(child)
// ✔ Removes a child element from its parent.

// parent.replaceChild(newElement, oldElement)
// ✔ Replaces an existing element with a new one.