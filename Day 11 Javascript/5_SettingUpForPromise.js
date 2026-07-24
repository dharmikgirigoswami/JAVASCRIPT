// Definition:
// A Promise is an object that represents the eventual
// completion (success) or failure of an asynchronous operation.
// A Promise has three states:
// 1. Pending
// 2. Fulfilled (Resolved)
// 3. Rejected

// Syntax

let promise = new Promise((resolve, reject) => {
    // Asynchronous code

    if (true) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});