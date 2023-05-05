const products = [
    { name: 'Product 1', price: 10 }, 
    { name: 'Product 2', price: 20 }, 
    { name: 'Product 3', price: 30 }
]

// const productsAdded = products.reduce((product, currentTotal) => {
//     return product + currentTotal.price
// })

// console.log(productsAdded)


const totalPrice = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
}, 0)

console.log(totalPrice)

// I want to see which number is the highest value inside the array

let listOfNumbers = [20, 40, 50, 100, 200, -10];
let highestValue = listOfNumbers.reduce((accumulator, currentValue) => {
    return (accumulator > currentValue ? accumulator : currentValue);
}, -Infinity);

console.log(highestValue)
