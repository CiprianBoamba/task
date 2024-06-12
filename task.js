/** Task 1
Create a function that will halve a given number.*/

function halveNumber(num) {
  return num / 2;
}
let resultTask1 = halveNumber(4);
// console.log(`Task1 result is : ${resultTask1}`);

// Define an arrow function to solve Task 1

const arrowHalvenumber = (num) => num / 2;
let resTask1 = arrowHalvenumber(8);
// console.log(`Task1 arrow version result is : ${resTask1}`);

/** Task 2
Create a function that will multiply two numbers together and add 3.*/

function multiplyAdd(a, b) {
  return a * b + 3;
}
let resultTask2 = multiplyAdd(4, 4);
// console.log(`Task2 result is : ${resultTask2}`);

// Define an arrow function to solve Task 2

const arrowMultiplyAdd = (a, b) => a * b + 3;
let resTask2 = arrowMultiplyAdd(4, 5);
// console.log(`Task2 arrow version result is : ${resTask2}`);

/**Task 3
Create a function to calculate how many times 1000 needs to be halved to be less than 10.
You can use any functions you created from previous tasks. */

function countHalvesToLessThanTen() {
  let count = 0;
  let number = 1000;

  while (number >= 10) {
    number = halveNumber(number);
    // count = count + 1;
    count++;

    console.log(`${number} and ${count}`);
  }

  return count;
}

let resultTask3 = countHalvesToLessThanTen();
console.log(`Task3 result is : ${resultTask3}`);

// Define an arrow function to solve Task 3

const arrowCountHalvesToLessThanTen = () => {
  let count = 0;
  let number = 1000;

  while (number >= 10) {
    number = halveNumber(number);
    count++;
    console.log(`${number} and ${count}`);
  }

  return count;
};

let resTask3 = arrowCountHalvesToLessThanTen();
console.log(`Task3 arrow version result is : ${resTask3}`);
