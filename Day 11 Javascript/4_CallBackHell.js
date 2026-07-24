// Definition:
// Callback Hell occurs when multiple callbacks are
// nested inside one another.
// This makes the code difficult to read, understand,
// and maintain. It is also known as the "Pyramid of Doom".

// Example 1

function step1(callback) {
    console.log("Step 1 Completed");
    callback();
}

function step2(callback) {
    console.log("Step 2 Completed");
    callback();
}

function step3(callback) {
    console.log("Step 3 Completed");
    callback();
}

step1(function () {
    step2(function () {
        step3(function () {
            console.log("All Steps Completed");
        });
    });
});

// Output
// Step 1 Completed
// Step 2 Completed
// Step 3 Completed
// All Steps Completed

// ======================================
// Example 2 (Nested setTimeout)

setTimeout(() => {
    console.log("Task 1");

    setTimeout(() => {
        console.log("Task 2");

        setTimeout(() => {
            console.log("Task 3");
        }, 1000);

    }, 1000);

}, 1000);

// Output
// Task 1
// Task 2
// Task 3

// ======================================
// Example 3 (Pyramid of Doom)

loginUser(function () {

    getProfile(function () {

        getPosts(function () {

            console.log("Data Loaded");

        });

    });

});

// ======================================
// Better Solution (Promises)

step1()
    .then(step2)
    .then(step3)
    .then(() => console.log("All Steps Completed"));

// ======================================
// Better Solution (Async/Await)

async function executeSteps() {
    await step1();
    await step2();
    await step3();

    console.log("All Steps Completed");
}

// ======================================
// Summary
// ======================================

// ✔ Callback Hell = Nested callbacks.
// ✔ Makes code difficult to read and maintain.
// ✔ Also called the "Pyramid of Doom".
// ✔ Solved using Promises and Async/Await.