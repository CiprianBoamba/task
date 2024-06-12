/** Task 1
Create a function that will halve a given number.*/

function halveNumber(num) {
  return num / 2;
}
let resultTask1 = halveNumber(4);
console.log(`Task1 result is : ${resultTask1}`);

// Define an arrow function to solve Task 1

const arrowHalvenumber = (num) => num / 2;
let resTask1 = arrowHalvenumber(8);
console.log(`Task1 arrow version result is : ${resTask1}`);

/** Task 2
Create a function that will multiply two numbers together and add 3.*/

function multiplyAdd(a, b) {
  return a * b + 3;
}
let resultTask2 = multiplyAdd(4, 4);
console.log(`Task2 result is : ${resultTask2}`);

// Define an arrow function to solve Task 2

const arrowMultiplyAdd = (a, b) => a * b + 3;
let resTask2 = arrowMultiplyAdd(4, 5);
console.log(`Task2 arrow version result is : ${resTask2}`);
