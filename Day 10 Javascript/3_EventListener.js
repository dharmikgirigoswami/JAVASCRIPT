// Definition:
// An Event Listener is used to listen for an event
// (such as click, keypress, mouseover, etc.) on an HTML element.
// When the event occurs, a function (callback) is executed.

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<button id="btn">Click Me</button>

<input type="text" id="name">

</body>
</html>
*/

// Syntax

element.addEventListener("event", function () {
    // Code to execute
});

// ===============================
// Example 1: Click Event
// ===============================

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    console.log("Button Clicked");
});

// ===============================
// Example 2: Double Click Event
// ===============================

btn.addEventListener("dblclick", function () {
    console.log("Button Double Clicked");
});

// ===============================
// Example 3: Mouse Over Event
// ===============================

btn.addEventListener("mouseover", function () {
    console.log("Mouse Entered");
});

// ===============================
// Example 4: Key Press Event
// ===============================

let input = document.getElementById("name");

input.addEventListener("keydown", function () {
    console.log("Key Pressed");
});

// ===============================
// Example 5: Using Arrow Function
// ===============================

btn.addEventListener("click", () => {
    alert("Welcome to JavaScript!");
});

// ===============================
// Example 6: Event Object
// ===============================

btn.addEventListener("click", function (event) {
    console.log(event.type);
});

// Output
// click

// ===============================
// Summary
// ===============================

// addEventListener("click", callback)
// ✔ Executes when the element is clicked.

// addEventListener("dblclick", callback)
// ✔ Executes when the element is double-clicked.

// addEventListener("mouseover", callback)
// ✔ Executes when the mouse enters the element.

// addEventListener("keydown", callback)
// ✔ Executes when a key is pressed.

// event
// ✔ Contains information about the event.