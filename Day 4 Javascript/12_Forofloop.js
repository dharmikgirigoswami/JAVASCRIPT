// Definition:
// Used to access elements inside nested arrays.

let students = [
    ["Ram", "Shyam"],
    ["Mohan", "Rohan"]
];

for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].length; j++) {
        console.log(students[i][j]);
    }
}