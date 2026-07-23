// Definition:
// Mouse Pointer Events are DOM events that occur
// when the user interacts with an element using the mouse.
// They are commonly used to detect clicks, hovering,
// pressing, and releasing the mouse.

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<button id="btn">Click Me</button>

</body>
</html>
*/

// Select Element

let btn = document.getElementById("btn");

// ===============================
// 1. click
// ===============================
// Triggered when the element is clicked.

btn.addEventListener("click", function () {
    console.log("Button Clicked");
});

// ===============================
// 2. dblclick
// ===============================
// Triggered when the element is double-clicked.

btn.addEventListener("dblclick", function () {
    console.log("Button Double Clicked");
});

// ===============================
// 3. mousedown
// ===============================
// Triggered when the mouse button is pressed.

btn.addEventListener("mousedown", function () {
    console.log("Mouse Button Pressed");
});

// ===============================
// 4. mouseup
// ===============================
// Triggered when the mouse button is released.

btn.addEventListener("mouseup", function () {
    console.log("Mouse Button Released");
});

// ===============================
// 5. mouseover
// ===============================
// Triggered when the mouse enters the element.

btn.addEventListener("mouseover", function () {
    console.log("Mouse Entered");
});

// ===============================
// 6. mouseout
// ===============================
// Triggered when the mouse leaves the element.

btn.addEventListener("mouseout", function () {
    console.log("Mouse Left");
});

// ===============================
// 7. mousemove
// ===============================
// Triggered whenever the mouse moves over the element.

btn.addEventListener("mousemove", function () {
    console.log("Mouse Moving");
});

// ===============================
// 8. contextmenu
// ===============================
// Triggered when the right mouse button is clicked.

btn.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    console.log("Right Click Detected");
});

// ===============================
// Summary
// ===============================

// click        -> Single click
// dblclick     -> Double click
// mousedown    -> Mouse button pressed
// mouseup      -> Mouse button released
// mouseover    -> Mouse enters element
// mouseout     -> Mouse leaves element
// mousemove    -> Mouse moves over element
// contextmenu  -> Right-click event