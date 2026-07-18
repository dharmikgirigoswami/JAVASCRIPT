// Definition:
// Object values can be accessed using Dot Notation (.) or
// Bracket Notation ([]). These methods are used to retrieve
// the value of an object's property.

// Creating an Object

let student = {
    name: "Dharmik",
    age: 20,
    course: "B.Tech CSE",
    city: "Surat"
};

// 1. Get Value Using Dot Notation

console.log(student.name);    // Dharmik
console.log(student.age);     // 20

// 2. Get Value Using Bracket Notation

console.log(student["course"]); // B.Tech CSE
console.log(student["city"]);   // Surat

// 3. Get Value Using a Variable

let key = "name";

console.log(student[key]); // Dharmik

// 4. Get All Values of an Object

console.log(Object.values(student));
// ["Dharmik", 20, "B.Tech CSE", "Surat"]