// Definition:
// DOM Events are actions that occur in the browser,
// such as clicking a button, typing in an input,
// moving the mouse, or pressing a key.
// JavaScript can respond to these events using event listeners.

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

// ===============================
// 1. onclick Event
// ===============================

let btn = document.getElementById("btn");

btn.onclick = function () {
    alert("Button Clicked!");
};

// ===============================
// 2. addEventListener()
// ===============================
// Recommended way to handle events.

btn.addEventListener("click", function () {
    console.log("Button Clicked");
});

// ===============================
// 3. dblclick Event
// ===============================

btn.addEventListener("dblclick", function () {
    console.log("Button Double Clicked");
});

// ===============================
// 4. mouseover Event
// ===============================

btn.addEventListener("mouseover", function () {
    console.log("Mouse is over the button");
});

// ===============================
// 5. mouseout Event
// ===============================

btn.addEventListener("mouseout", function () {
    console.log("Mouse left the button");
});

// ===============================
// 6. keydown Event
// ===============================

let input = document.getElementById("name");

input.addEventListener("keydown", function () {
    console.log("Key Pressed");
});

// ===============================
// 7. keyup Event
// ===============================

input.addEventListener("keyup", function () {
    console.log("Key Released");
});

// ===============================
// 8. input Event
// ===============================

input.addEventListener("input", function () {
    console.log(input.value);
});

// ===============================
// 9. change Event
// ===============================

input.addEventListener("change", function () {
    console.log("Input Changed");
});

// ===============================
// Summary
// ===============================

// click            -> Single mouse click
// dblclick         -> Double mouse click
// mouseover        -> Mouse enters an element
// mouseout         -> Mouse leaves an element
// keydown          -> Key is pressed
// keyup            -> Key is released
// input            -> Value changes while typing
// change           -> Value changes after losing focus
// addEventListener() -> Preferred way to handle events