// Definition:
// getElementsByTagName() is used to select all HTML
// elements with the same tag name.
// It returns an HTMLCollection (array-like object).

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>

</body>
</html>
*/

// Syntax

document.getElementsByTagName("tagName");

// Example 1

let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

// Output
// HTMLCollection(3)

// Example 2: Access Individual Elements

console.log(paragraphs[0].innerText);
console.log(paragraphs[1].innerText);
console.log(paragraphs[2].innerText);

// Output
// Paragraph 1
// Paragraph 2
// Paragraph 3

// Example 3: Change Text

paragraphs[0].innerText = "Welcome to JavaScript";

// Example 4: Change CSS

paragraphs[1].style.color = "blue";
paragraphs[2].style.fontSize = "30px";

// Example 5: Loop Through All Elements

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Summary
// document.getElementsByTagName("tagName")
// ✔ Selects all elements with the given tag name.
// ✔ Returns an HTMLCollection.
// ✔ Access elements using index.
// ✔ Use a loop to modify all selected elements.