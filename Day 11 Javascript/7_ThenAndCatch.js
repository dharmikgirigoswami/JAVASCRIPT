// Definition:
// .then() is used to handle a successful Promise (resolved).
// .catch() is used to handle a failed Promise (rejected).

// Syntax

promise
    .then((result) => {
        // Runs when Promise is resolved
    })
    .catch((error) => {
        // Runs when Promise is rejected
    });


    let promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data Loaded");
    } else {
        reject("Loading Failed");
    }

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Output
// Data Loaded