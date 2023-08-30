// Definition:
// Creates a new array by applying a provided function to each element in the original array.

// Using regular function
// let numbers = [2, 4, 6, 8];

// function square(number:number){
//     return number * number;
// }

// let squared_numbers = numbers.map(square);
// console.log(squared_numbers);
// console.log(numbers);

// Using arrow function
// const numbers = [1, 2, 3, 4];
// const squared = numbers.map(num => num * num); // [1, 4, 9, 16]

// Example 1: Mapping array elements using custom function

const prices = [1800, 2000, 3000, 5000, 500, 8000];
 let newPrices = prices.map(Math.sqrt);
 console.log(newPrices);

const string = "Javascript";
const stringArr = string.split('');
let asciiArr = stringArr.map(x => x.charCodeAt(0));

console.log(stringArr);
console.log(asciiArr);

// Example 2: map() for object elements in array
// const employees = [
//     { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
//     { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
//     { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
//     { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
// ];

// // calculate the net amount to be given to the employees
// const calcAmt = (obj) => {
//     newObj = {};
//     newObj.name = obj.name;
//     newObj.netEarning = obj.salary + obj.bonus - obj.tax;
//     return newObj;
// };

// let newArr = employees.map(calcAmt);
// console.log(newArr);