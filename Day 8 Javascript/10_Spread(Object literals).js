// Definition:
// The Spread Operator (...) in Object Literals is used
// to copy, merge, or update objects.
// It creates a new object without modifying the original object.

// Syntax

let newObject = { ...oldObject };

// Example 1: Copy an Object

let student = {
    name: "Dharmik",
    age: 20
};

let copyStudent = { ...student };

console.log(copyStudent);

// Output
// { name: "Dharmik", age: 20 }

// Example 2: Merge Two Objects

let person = {
    name: "Rahul"
};

let details = {
    age: 21,
    city: "Surat"
};

let user = { ...person, ...details };

console.log(user);

// Output
// { name: "Rahul", age: 21, city: "Surat" }

// Example 3: Add a New Property

let employee = {
    name: "Amit",
    salary: 50000
};

let updatedEmployee = {
    ...employee,
    department: "IT"
};

console.log(updatedEmployee);

// Output
// { name: "Amit", salary: 50000, department: "IT" }

// Example 4: Update an Existing Property

let car = {
    brand: "Toyota",
    color: "White"
};

let newCar = {
    ...car,
    color: "Black"
};

console.log(newCar);

// Output
// { brand: "Toyota", color: "Black" }

// Example 5: Merge Objects with Same Property

let obj1 = {
    a: 10,
    b: 20
};

let obj2 = {
    b: 50,
    c: 30
};

let result = {
    ...obj1,
    ...obj2
};

console.log(result);

// Output
// { a: 10, b: 50, c: 30 }

// Example 6: Original Object Remains Unchanged

let original = {
    name: "JavaScript"
};

let copied = {
    ...original
};

copied.name = "React";

console.log(original);

// Output
// { name: "JavaScript" }

console.log(copied);

// Output
// { name: "React" }

// Summary
// { ...object }              -> Copy an object
// { ...obj1, ...obj2 }       -> Merge objects
// { ...object, key: value }  -> Add a new property
// { ...object, key: newValue } -> Update an existing property
// If duplicate properties exist, the last value overrides the previous one.