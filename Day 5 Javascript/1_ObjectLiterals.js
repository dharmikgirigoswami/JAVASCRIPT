// Definition:
// An Object Literal is a way to create an object in JavaScript.
// It stores data as key-value pairs, where each key is called
// a property and each value is the data associated with that property.

// Creating an Object Literal

let student = {
    name: "Dharmik",
    age: 20,
    course: "B.Tech CSE",
    city: "Surat"
};

// Accessing Object Properties

console.log(student.name);      // Dharmik
console.log(student.age);       // 20

// Using Bracket Notation

console.log(student["course"]); // B.Tech CSE
console.log(student["city"]);   // Surat

// Updating a Property

student.age = 21;
console.log(student.age); // 21

// Adding a New Property

student.grade = "A";
console.log(student);

// Deleting a Property

delete student.city;
console.log(student);

// Output
// {
//   name: "Dharmik",
//   age: 21,
//   course: "B.Tech CSE",
//   grade: "A"
// }