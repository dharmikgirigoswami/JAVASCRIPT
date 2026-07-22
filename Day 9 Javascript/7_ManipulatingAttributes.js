// Definition:
// Manipulating Attributes means adding, changing,
// reading, or removing HTML element attributes
// using JavaScript.

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<img id="image" src="cat.jpg" alt="Cat">

</body>
</html>
*/

// ===============================
// 1. getAttribute()
// ===============================
// Returns the value of an attribute.

let image = document.getElementById("image");

console.log(image.getAttribute("src"));

// Output
// cat.jpg

// ===============================
// 2. setAttribute()
// ===============================
// Sets or changes an attribute.

image.setAttribute("src", "dog.jpg");

console.log(image.getAttribute("src"));

// Output
// dog.jpg

// ===============================
// 3. removeAttribute()
// ===============================
// Removes an attribute.

image.removeAttribute("alt");

// ===============================
// 4. hasAttribute()
// ===============================
// Checks whether an attribute exists.

console.log(image.hasAttribute("src")); // true
console.log(image.hasAttribute("alt")); // false

// ===============================
// 5. Direct Attribute Access
// ===============================

image.src = "bird.jpg";
image.alt = "Bird Image";

console.log(image.src);
console.log(image.alt);

// ===============================
// Summary
// ===============================

// getAttribute("name")
// ✔ Gets the value of an attribute.

// setAttribute("name", "value")
// ✔ Adds or updates an attribute.

// removeAttribute("name")
// ✔ Removes an attribute.

// hasAttribute("name")
// ✔ Checks if an attribute exists.

// element.attribute = value
// ✔ Directly changes an attribute.