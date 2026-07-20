// Definition:
// In Arrow Functions, the 'this' keyword does NOT refer
// to the object that calls the function.
// Instead, it inherits 'this' from its surrounding (lexical) scope.

// Example 1

let student = {
    name: "Dharmik",

    regularFunction: function () {
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
};

student.regularFunction(); // Dharmik
student.arrowFunction();   // undefined

// Example 2

let person = {
    name: "Rahul",

    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

person.greet();

// Output after 1 second
// Rahul

// Example 3

let car = {
    brand: "Toyota",

    showBrand: function () {
        const print = () => {
            console.log(this.brand);
        };

        print();
    }
};

car.showBrand();

// Output
// Toyota

// Example 4

const showThis = () => {
    console.log(this);
};

showThis();

// Output
// In Browser: Window Object
// In Node.js: Module/Empty Object (depends on environment)

// Summary
// Regular Function -> this refers to the calling object.
// Arrow Function   -> this is inherited from the surrounding scope.
// Arrow functions should not be used as object methods when
// you need 'this' to refer to the object itself.