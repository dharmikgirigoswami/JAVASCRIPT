// Definition:
// DOM provides many events that allow JavaScript to
// respond to user actions such as focusing, scrolling,
// resizing, loading pages, copying text, and more.

// HTML

/*
<input type="text" id="name">

<button id="btn">Click Me</button>
*/

let input = document.getElementById("name");
let btn = document.getElementById("btn");

// ===============================
// 1. focus
// ===============================
// Triggered when an input gets focus.

input.addEventListener("focus", function () {
    console.log("Input Focused");
});

// ===============================
// 2. blur
// ===============================
// Triggered when an input loses focus.

input.addEventListener("blur", function () {
    console.log("Input Lost Focus");
});

// ===============================
// 3. input
// ===============================
// Triggered whenever the input value changes.

input.addEventListener("input", function () {
    console.log(input.value);
});

// ===============================
// 4. change
// ===============================
// Triggered after the value changes and the input loses focus.

input.addEventListener("change", function () {
    console.log("Value Changed");
});

// ===============================
// 5. submit
// ===============================
// Triggered when a form is submitted.

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form Submitted");
});

// ===============================
// 6. scroll
// ===============================
// Triggered when the page is scrolled.

window.addEventListener("scroll", function () {
    console.log("Page Scrolled");
});

// ===============================
// 7. resize
// ===============================
// Triggered when the browser window is resized.

window.addEventListener("resize", function () {
    console.log("Window Resized");
});

// ===============================
// 8. load
// ===============================
// Triggered after the page is fully loaded.

window.addEventListener("load", function () {
    console.log("Page Loaded");
});

// ===============================
// 9. copy
// ===============================
// Triggered when text is copied.

document.addEventListener("copy", function () {
    console.log("Text Copied");
});

// ===============================
// 10. cut
// ===============================
// Triggered when text is cut.

document.addEventListener("cut", function () {
    console.log("Text Cut");
});

// ===============================
// 11. paste
// ===============================
// Triggered when text is pasted.

document.addEventListener("paste", function () {
    console.log("Text Pasted");
});

// ===============================
// 12. contextmenu
// ===============================
// Triggered on right-click.

btn.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    console.log("Right Click");
});

// ===============================
// Summary
// ===============================

// click        -> Mouse click
// dblclick     -> Double click
// mousedown    -> Mouse button pressed
// mouseup      -> Mouse button released
// mouseover    -> Mouse enters element
// mouseout     -> Mouse leaves element
// mousemove    -> Mouse moves
// keydown      -> Key pressed
// keyup        -> Key released
// focus        -> Input gets focus
// blur         -> Input loses focus
// input        -> Value changes while typing
// change       -> Value changes after losing focus
// submit       -> Form submitted
// scroll       -> Page scrolled
// resize       -> Window resized
// load         -> Page loaded
// copy         -> Text copied
// cut          -> Text cut
// paste        -> Text pasted
// contextmenu  -> Right mouse click