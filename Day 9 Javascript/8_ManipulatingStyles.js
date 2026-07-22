// Definition:
// JavaScript can be used to change the CSS styles
// of HTML elements using the style property.

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<h1 id="heading">Hello JavaScript</h1>

</body>
</html>
*/

// ===============================
// 1. Change Text Color
// ===============================

let heading = document.getElementById("heading");

heading.style.color = "blue";

// ===============================
// 2. Change Background Color
// ===============================

heading.style.backgroundColor = "yellow";

// ===============================
// 3. Change Font Size
// ===============================

heading.style.fontSize = "40px";

// ===============================
// 4. Change Font Family
// ===============================

heading.style.fontFamily = "Arial";

// ===============================
// 5. Change Text Alignment
// ===============================

heading.style.textAlign = "center";

// ===============================
// 6. Change Width and Height
// ===============================

heading.style.width = "300px";
heading.style.height = "80px";

// ===============================
// 7. Add Border
// ===============================

heading.style.border = "2px solid black";

// ===============================
// 8. Add Padding
// ===============================

heading.style.padding = "20px";

// ===============================
// 9. Add Margin
// ===============================

heading.style.margin = "30px";

// ===============================
// 10. Hide an Element
// ===============================

heading.style.display = "none";

// Show Again
heading.style.display = "block";

// ===============================
// 11. Change Visibility
// ===============================

heading.style.visibility = "hidden";

// Show Again
heading.style.visibility = "visible";

// ===============================
// Summary
// ===============================

// style.color             -> Text color
// style.backgroundColor   -> Background color
// style.fontSize          -> Font size
// style.fontFamily        -> Font family
// style.textAlign         -> Text alignment
// style.width             -> Width
// style.height            -> Height
// style.border            -> Border
// style.padding           -> Padding
// style.margin            -> Margin
// style.display           -> Hide/Show element
// style.visibility        -> Hide/Show visibility