// Definition:
// Event Listeners can be added to multiple HTML elements
// by selecting all elements and looping through them.

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<button class="btn">Button 1</button>
<button class="btn">Button 2</button>
<button class="btn">Button 3</button>

</body>
</html>
*/

// ===============================
// 1. Select All Elements
// ===============================

let buttons = document.querySelectorAll(".btn");

// ===============================
// 2. Add Event Listener to Each Element
// ===============================

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Button Clicked");
    });
});

// Output
// Clicking any button prints:
// Button Clicked

// ===============================
// 3. Print Button Text
// ===============================

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log(button.innerText);
    });
});

// Output
// Button 1
// Button 2
// Button 3

// ===============================
// 4. Change Button Color
// ===============================

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.style.backgroundColor = "blue";
        button.style.color = "white";
    });
});

// ===============================
// 5. Using Arrow Function
// ===============================

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        console.log("Mouse Over:", button.innerText);
    });
});

// ===============================
// Summary
// ===============================

// querySelectorAll(".class")
// ✔ Selects all matching elements.

// forEach()
// ✔ Loops through all selected elements.

// addEventListener()
// ✔ Adds an event listener to each element.

// Common Events
// click
// dblclick
// mouseover
// mouseout
// keydown
// keyup