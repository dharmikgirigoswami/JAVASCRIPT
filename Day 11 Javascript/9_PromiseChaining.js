// Definition:
// Promise Chaining is a technique where multiple .then()
// methods are connected together.
// Each .then() receives the result from the previous Promise,
// making asynchronous code clean and easy to read.

// Syntax

promise
    .then((result) => {
        return result;
    })
    .then((result) => {
        return result;
    })
    .catch((error) => {
        console.log(error);
    });