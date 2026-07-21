// Definition:
// Destructuring is a JavaScript feature that allows you
// to extract values from arrays or properties from objects
// and store them into separate variables.

// =========================
// Array Destructuring
// =========================

// Example 1

let numbers = [10, 20, 30];

let [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// Example 2: Skip Elements

let colors = ["Red", "Green", "Blue", "Black"];

let [first, , third] = colors;

console.log(first); // Red
console.log(third); // Blue

// Example 3: Default Value

let marks = [80];

let [m1, m2 = 50] = marks;

console.log(m1); // 80
console.log(m2); // 50

// Example 4: Rest Operator

let nums = [1, 2, 3, 4, 5];

let [x, y, ...rest] = nums;

console.log(x);    // 1
console.log(y);    // 2
console.log(rest); // [3, 4, 5]

// =========================
// Object Destructuring
// =========================

// Example 5

let student = {
    name: "Dharmik",
    age: 20,
    city: "Surat"
};

let { name, age, city } = student;

console.log(name); // Dharmik
console.log(age);  // 20
console.log(city); // Surat

// Example 6: Rename Variables

let person = {
    firstName: "Rahul",
    lastName: "Sharma"
};

let { firstName: fName, lastName: lName } = person;

console.log(fName); // Rahul
console.log(lName); // Sharma

// Example 7: Default Value

let employee = {
    empName: "Amit"
};

let { empName, salary = 50000 } = employee;

console.log(empName); // Amit
console.log(salary);  // 50000

// Example 8: Rest Operator

let car = {
    brand: "Toyota",
    color: "White",
    model: 2025
};

let { brand, ...details } = car;

console.log(brand);   // Toyota
console.log(details); // { color: "White", model: 2025 }

// Summary
// Array Destructuring
// ✔ Extract values from an array.
// ✔ Skip elements.
// ✔ Use default values.
// ✔ Use the rest operator (...).

// Object Destructuring
// ✔ Extract object properties.
// ✔ Rename variables.
// ✔ Use default values.
// ✔ Use the rest operator (...).