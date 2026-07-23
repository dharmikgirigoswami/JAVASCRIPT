// Definition:
// Extracting Form Data means getting the values entered
// by the user in form fields using JavaScript.

// HTML

/*
<!DOCTYPE html>
<html>
<body>

<form id="myForm">

    <input type="text" id="username" placeholder="Enter Name">

    <input type="email" id="email" placeholder="Enter Email">

    <button type="submit">Submit</button>

</form>

</body>
</html>
*/

// ===============================
// 1. Select the Form
// ===============================

let form = document.getElementById("myForm");

// ===============================
// 2. Extract Form Data
// ===============================

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    console.log(username);
    console.log(email);
});

// Output
// Dharmik
// dharmik@gmail.com

// ===============================
// 3. Extract Using Form Elements
// ===============================

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log(form.elements.username.value);
    console.log(form.elements.email.value);
});

// ===============================
// 4. Extract Multiple Inputs
// ===============================

/*
<form id="studentForm">

<input type="text" id="name">
<input type="number" id="age">
<input type="text" id="city">

<button>Submit</button>

</form>
*/

let studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log(document.getElementById("name").value);
    console.log(document.getElementById("age").value);
    console.log(document.getElementById("city").value);
});

// ===============================
// Summary
// ===============================

// value                 -> Gets the value of an input field.
// event.preventDefault() -> Prevents page refresh on form submit.
// form.elements         -> Accesses form input elements.
// submit event          -> Runs when the form is submitted.