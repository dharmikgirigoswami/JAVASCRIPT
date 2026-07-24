// Definition:
// result and error are callback parameters used in
// .then() and .catch().
//
// result -> Holds the value passed by resolve().
// error  -> Holds the value passed by reject().
//
// Note:
// "result" and "error" are just variable names.
// You can use any valid variable name.

// Syntax

promise
    .then((result) => {
        // Success value
    })
    .catch((error) => {
        // Error value
    });