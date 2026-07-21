// Definition:
// Object Destructuring is a JavaScript feature that allows
// you to extract properties from an object and store them
// into separate variables.

// Syntax

let object = {
    key1: value1,
    key2: value2
};

let { key1, key2 } = object;

// Example 1: Basic Object Destructuring

let student = {
    name: "Dharmik",
    age: 20,
    city: "Surat"
};

let { name, age, city } = student;

console.log(name); // Dharmik
console.log(age);  // 20
console.log(city); // Surat

// Example 2: Rename Variables

let person = {
    firstName: "Rahul",
    lastName: "Sharma"
};

let { firstName: fName, lastName: lName } = person;

console.log(fName); // Rahul
console.log(lName); // Sharma

// Example 3: Default Values

let employee = {
    empName: "Amit"
};

let { empName, salary = 50000 } = employee;

console.log(empName); // Amit
console.log(salary);  // 50000

// Example 4: Rest Operator

let car = {
    brand: "Toyota",
    color: "White",
    model: 2025
};

let { brand, ...details } = car;

console.log(brand);   // Toyota
console.log(details); // { color: "White", model: 2025 }

// Example 5: Destructuring in Function Parameters

function printStudent({ name, age }) {
    console.log(name);
    console.log(age);
}

let user = {
    name: "Dharmik",
    age: 20,
    city: "Surat"
};

printStudent(user);

// Output
// Dharmik
// 20

// Summary
// { name, age }                 -> Extract object properties.
// { name: newName }             -> Rename variables.
// { salary = 50000 }            -> Default value.
// { key, ...rest }              -> Extract remaining properties.
// function({ name, age }) { }   -> Destructure in function parameters.