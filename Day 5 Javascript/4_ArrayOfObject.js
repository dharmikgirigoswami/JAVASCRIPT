// Definition:
// An Array of Objects is an array where each element is an object.
// It is used to store multiple records of similar data.

// Example

let students = [
    {
        name: "Dharmik",
        age: 20,
        course: "B.Tech CSE"
    },
    {
        name: "Rahul",
        age: 21,
        course: "BCA"
    },
    {
        name: "Priya",
        age: 19,
        course: "B.Sc"
    }
];

// Accessing Object Values

console.log(students[0].name);     // Dharmik
console.log(students[1].age);      // 21
console.log(students[2].course);   // B.Sc

// Updating an Object

students[1].age = 22;
console.log(students[1]);

// Adding a New Object

students.push({
    name: "Amit",
    age: 23,
    course: "B.Com"
});

console.log(students);

// Loop Through the Array of Objects

for (let student of students) {
    console.log(student.name, student.age, student.course);
}