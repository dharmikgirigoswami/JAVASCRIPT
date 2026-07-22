// Definition:
// JavaScript can create new HTML elements and add them
// to a web page dynamically using DOM methods.

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<div id="container">
    <h2>Student List</h2>
</div>

</body>
</html>
*/

// Select Parent Element

let container = document.getElementById("container");

// ===============================
// 1. createElement()
// ===============================
// Creates a new HTML element.

let heading = document.createElement("h1");

// ===============================
// 2. Add Content
// ===============================

heading.innerText = "Welcome to JavaScript";

// ===============================
// 3. appendChild()
// ===============================
// Adds the new element at the end.

container.appendChild(heading);

// Output
// <h1>Welcome to JavaScript</h1>

// ===============================
// 4. append()
// ===============================
// Adds one or more elements/text.

let para = document.createElement("p");
para.innerText = "This is a paragraph.";

container.append(para);

// ===============================
// 5. prepend()
// ===============================
// Adds the element at the beginning.

let title = document.createElement("h3");
title.innerText = "DOM Example";

container.prepend(title);

// ===============================
// 6. insertBefore()
// ===============================
// Inserts an element before another element.

let newPara = document.createElement("p");
newPara.innerText = "Inserted Paragraph";

container.insertBefore(newPara, heading);

// ===============================
// Summary
// ===============================

// document.createElement("tag")
// ✔ Creates a new HTML element.

// element.appendChild(newElement)
// ✔ Adds an element at the end.

// element.append(newElement)
// ✔ Adds one or more elements/text.

// element.prepend(newElement)
// ✔ Adds an element at the beginning.

// parent.insertBefore(newElement, referenceElement)
// ✔ Inserts an element before another element.