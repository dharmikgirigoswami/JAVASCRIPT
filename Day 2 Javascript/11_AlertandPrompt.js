// Definition:
// alert() is used to display a message in a pop-up alert box.
// prompt() is used to display a pop-up box that asks the user
// to enter some input.

// Example of alert()

alert("Welcome to JavaScript!");

// Example of prompt()

let name = prompt("Enter your name:");

console.log(name);

// Using prompt() with alert()

let age = prompt("Enter your age:");

alert("Your age is " + age);

// Using Template Literal

let city = prompt("Enter your city:");

alert(`Welcome! You are from ${city}.`);