// Definition:
// Keyboard Events are DOM events that occur when
// the user presses or releases a key on the keyboard.
// They are mainly used with input fields and forms.

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<input type="text" id="name" placeholder="Type here">

</body>
</html>
*/

// Select Element

let input = document.getElementById("name");

// ===============================
// 1. keydown
// ===============================
// Triggered when a key is pressed.

input.addEventListener("keydown", function(event) {
    console.log("Key Down:", event.key);
});

// ===============================
// 2. keyup
// ===============================
// Triggered when a key is released.

input.addEventListener("keyup", function(event) {
    console.log("Key Up:", event.key);
});

// ===============================
// 3. keypress (Deprecated)
// ===============================
// Triggered when a printable key is pressed.
// (Not recommended in modern JavaScript.)

input.addEventListener("keypress", function(event) {
    console.log("Key Press:", event.key);
});

// ===============================
// 4. Display Typed Character
// ===============================

input.addEventListener("keydown", function(event) {
    console.log(event.key);
});

// Output
// a
// b
// 1
// Enter
// Shift

// ===============================
// 5. Detect Enter Key
// ===============================

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("Enter Key Pressed");
    }
});

// ===============================
// 6. Detect Space Key
// ===============================

input.addEventListener("keydown", function(event) {
    if (event.key === " ") {
        console.log("Space Key Pressed");
    }
});

// ===============================
// 7. Detect Arrow Keys
// ===============================

input.addEventListener("keydown", function(event) {
    console.log(event.key);
});

// Output
// ArrowUp
// ArrowDown
// ArrowLeft
// ArrowRight

// ===============================
// Summary
// ===============================

// keydown     -> Fires when a key is pressed.
// keyup       -> Fires when a key is released.
// keypress    -> Deprecated (avoid using it).
// event.key   -> Returns the key that was pressed.
// Common Keys -> Enter, Space, ArrowUp, ArrowDown,
//                ArrowLeft, ArrowRight, Shift, Ctrl, Alt.