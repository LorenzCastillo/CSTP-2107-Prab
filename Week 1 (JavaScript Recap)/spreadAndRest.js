// Spread operator means

// It means if I have an array ---> spread the values
// [1, 2, 3, 4] ---> 1, 2, 3, 4

function sum(a, b, c) {
    return a + b + c;
}

let array = [1, 2, 3];

console.log(sum(...array));

// Example 2 of Spread Operator
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Concatenate 

let array3 = [...array1, ...array2];

console.log(array3);


// Example 3
let student = {
    name: "Mike",
    age: 20
}

let collegeName = "VCC"

let studentWithCollege = {
    ...student,
    collegeName
}

console.log(studentWithCollege)


// REST OPERATOR
// It switches from 1, 2, 3, 4 ---> [1, 2, 3, 4]

// function multiply(a, b) {
//     return a * b;
// }

// multiply(2, 3); // 6

// multiply(2, 3, 4); // 24

// multiply(1); // 1

// multiply(4, 2, 2, 2); // 32

// Modiffying this function with rest operator
function multiply(...num) {
    let totalVal = 1;
    // Num is now an array
    for (let i = 0; i < num.length; i++) {
        totalVal *= num[i];
    }
    return totalVal;
}

console.log(multiply(2, 3));

console.log(multiply(2, 3, 4)); // 24

console.log(multiply(1)); // 1

console.log(multiply(4, 2, 2, 2)); // 32