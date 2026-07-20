// Definition:
// The 'this' keyword refers to the object that is currently
// calling the method. It is used to access the properties
// and methods of the current object.

// Example 1

let student = {
    name: "Dharmik",
    age: 20,

    greet() {
        console.log(this.name);
        console.log(this.age);
    }
};

student.greet();

// Output
// Dharmik
// 20

// Example 2

let person = {
    firstName: "Rahul",
    lastName: "Sharma",

    fullName() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

// Output
// Rahul Sharma

// Example 3

let calculator = {
    num1: 10,
    num2: 20,

    add() {
        return this.num1 + this.num2;
    }
};

console.log(calculator.add());

// Output
// 30

// Example 4

let car = {
    brand: "Toyota",

    showBrand() {
        console.log(this.brand);
    }
};

car.showBrand();

// Output
// Toyota

// Summary
// this -> Refers to the current object.
// this.property -> Accesses the object's property.
// this.method() -> Calls another method of the same object.