// Definition:
// A Method is a function that is stored as a property
// of an object. It is called using the object name
// followed by a dot (.) and the method name.

// Syntax

let objectName = {
    methodName: function() {
        // Code to execute
    }
};

// Example 1

let student = {
    name: "Dharmik",
    greet: function() {
        console.log("Hello!");
    }
};

student.greet(); // Hello!

// Example 2

let calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(10, 5));      // 15
console.log(calculator.subtract(10, 5)); // 5

// Example 3 (Shorthand Method Syntax)

let person = {
    name: "Rahul",

    sayHello() {
        console.log("Hello " + this.name);
    }
};

person.sayHello(); // Hello Rahul

// Output
// Hello!
// 15
// 5
// Hello Rahul