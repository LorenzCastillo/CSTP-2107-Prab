// HIGHER ORDER FUNCTIONS

const fruitsList = ["Mango", "Orange", "Pineapple", "Banana"]; 

// Options:
// Loop
// HOF - Higher Order Function (map is an example of one, which manipulates each value inside the array and returns a new array)


// Example 1
const fruitListPlural = fruitsList.map(function(fruit) {
    return fruit + "s";
})

console.log(fruitListPlural, "fruitsList");


// Example 2
// Where I want to tell if the employee is eligible for a gratuity or not
// Gratuity is if someone completes 5 years with the company, the company gives them a reward
const employeeList = [
    {
        name: "Prabh",
        age: 28,
        experienceWithCompany: 6
    },
    {
        name: "Daniel",
        age: 35,
        experienceWithCompany: 12
    },
    {
        name: "Mike",
        age: 32,
        experienceWithCompany: 2
    },
];

const modifiedEmployeeList = employeeList.map((employee) => {
    if (employee.experienceWithCompany > 5) {
        employee.eligibility = true;
    } else {
        employee.eligibility = false;
    }
    return employee;
});

console.log(modifiedEmployeeList, "modifiedEmployeeList");


// Filter function
// Filter function is another HOF which filters the array based on a condition
// The length of the array may change

const employeeNotEligible = modifiedEmployeeList.filter((employee) => {
    if (employee.experienceWithCompany < 5) {
        return true;
    }
});

console.log(employeeNotEligible, "employeeNotEligible");