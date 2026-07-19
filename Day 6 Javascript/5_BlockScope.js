// Definition:
// Block Scope means a variable declared with let or const
// inside a block {} can only be accessed within that block.
// It cannot be accessed outside the block.

// Example 1

if (true) {
    let name = "Dharmik";
    const age = 20;

    console.log(name); // Dharmik
    console.log(age);  // 20
}

// console.log(name); // Error
// console.log(age);  // Error

// Example 2

{
    let city = "Surat";
    const country = "India";

    console.log(city);    // Surat
    console.log(country); // India
}

// console.log(city);    // Error
// console.log(country); // Error

// Example 3

for (let i = 1; i <= 3; i++) {
    console.log(i);
}

// console.log(i); // Error

// Summary
// let   -> Block Scoped
// const -> Block Scoped
// var   -> NOT Block Scoped