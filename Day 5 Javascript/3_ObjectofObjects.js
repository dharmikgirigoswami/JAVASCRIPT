// Definition:
// An Object of Objects is a JavaScript object in which
// each property itself is another object.
// It is used to store related data in a structured way.

// Example

let students = {
    student1: {
        name: "Dharmik",
        age: 20,
        course: "B.Tech CSE"
    },

    student2: {
        name: "Rahul",
        age: 21,
        course: "BCA"
    },

    student3: {
        name: "Priya",
        age: 19,
        course: "B.Sc"
    }
};

// Accessing Values

console.log(students.student1.name);      // Dharmik
console.log(students.student2.age);       // 21
console.log(students.student3.course);    // B.Sc

// Using Bracket Notation

console.log(students["student1"]["name"]); // Dharmik

// Updating a Value

students.student2.age = 22;
console.log(students.student2.age); // 22

// Adding a New Property

students.student1.city = "Surat";
console.log(students.student1);

// Output
// {
//   name: "Dharmik",
//   age: 20,
//   course: "B.Tech CSE",
//   city: "Surat"
// }