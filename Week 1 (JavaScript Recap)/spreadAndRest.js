// Spread operator means

// It means if I have an array ---> spread the values
// [1, 2, 3, 4] ---> 1, 2, 3, 4

function sum(a, b, c) {
    return a + b + c;
}

let array = [1, 2, 3];

console.log(sum(...array));