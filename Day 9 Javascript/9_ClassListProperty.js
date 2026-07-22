// Definition:
// The classList property is used to add, remove,
// toggle, or check CSS classes of an HTML element.

// HTML

/*
<!DOCTYPE html>
<html>
<head>
<style>
.red {
    color: red;
}

.big {
    font-size: 40px;
}
</style>
</head>

<body>

<h1 id="heading">Hello JavaScript</h1>

</body>
</html>
*/

// Select Element

let heading = document.getElementById("heading");

// ===============================
// 1. classList.add()
// ===============================
// Adds a CSS class.

heading.classList.add("red");

// Output
// <h1 class="red">

// ===============================
// 2. classList.remove()
// ===============================
// Removes a CSS class.

heading.classList.remove("red");

// ===============================
// 3. classList.toggle()
// ===============================
// Adds the class if it does not exist,
// otherwise removes it.

heading.classList.toggle("big");

// ===============================
// 4. classList.contains()
// ===============================
// Checks whether a class exists.

console.log(heading.classList.contains("big"));

// Output
// true or false

// ===============================
// 5. classList.replace()
// ===============================
// Replaces one class with another.

heading.classList.replace("big", "red");

// ===============================
// 6. Add Multiple Classes
// ===============================

heading.classList.add("red", "big");

// ===============================
// 7. Remove Multiple Classes
// ===============================

heading.classList.remove("red", "big");

// ===============================
// Summary
// ===============================

// classList.add("class")        -> Adds a class.
// classList.remove("class")     -> Removes a class.
// classList.toggle("class")     -> Adds/Removes a class.
// classList.contains("class")   -> Checks if a class exists.
// classList.replace("old","new")-> Replaces a class.
// classList.add("a","b")        -> Adds multiple classes.
// classList.remove("a","b")     -> Removes multiple classes.