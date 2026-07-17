// Definition:
// A Nested for...of Loop is used to iterate
// through nested arrays.

let matrix = [
    [1, 2],
    [3, 4]
];

for (let row of matrix) {
    for (let value of row) {
        console.log(value);
    }
}