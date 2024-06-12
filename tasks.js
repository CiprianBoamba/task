// Task 1: Create a function that will halve a given number.
function halveNumber(num) {
  return num / 2;
}

let resultTask1 = halveNumber(4);
console.log(`Task 1 result: ${resultTask1}`);

// Define an arrow function to solve Task 1.
const arrowHalveNumber = (num) => num / 2;
let resTask1 = arrowHalveNumber(8);
console.log(`Task 1 arrow version result: ${resTask1}`);

// Task 2: Create a function that will multiply two numbers together and add 3.
function multiplyAdd(a, b) {
  return a * b + 3;
}

let resultTask2 = multiplyAdd(4, 4);
console.log(`Task 2 result: ${resultTask2}`);

// Define an arrow function to solve Task 2.
const arrowMultiplyAdd = (a, b) => a * b + 3;
let resTask2 = arrowMultiplyAdd(4, 5);
console.log(`Task 2 arrow version result: ${resTask2}`);

// Task 3: Create a function to calculate how many times 1000 needs to be halved to be less than 10.
function countHalvesToLessThanTen() {
  let count = 0;
  let number = 1000;

  while (number >= 10) {
    number = halveNumber(number);
    count++;
  }

  return count;
}

let resultTask3 = countHalvesToLessThanTen();
console.log(`Task 3 result: ${resultTask3}`);

// Define an arrow function to solve Task 3.
const arrowCountHalvesToLessThanTen = () => {
  let count = 0;
  let number = 1000;

  while (number >= 10) {
    number = arrowHalveNumber(number);
    count++;
  }

  return count;
};

let resTask3 = arrowCountHalvesToLessThanTen();
console.log(`Task 3 arrow version result: ${resTask3}`);

// Task 4: Create a function that accepts an array of numbers and returns an array that has had all values above a given number removed.
function removeAbove(arr, limit) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element <= limit) {
      newArray.push(element);
    }
  }

  return newArray;
}

const myArrayTask4 = [1, 3, 7, 2, 9, 4];
const limitTask4 = 7;
const filteredArrayTask4 = removeAbove(myArrayTask4, limitTask4);
console.log(`Task 4 result: ${filteredArrayTask4}`);

// Define an arrow function to solve Task 4.
const arrowRemoveAbove = (arr, limit) =>
  arr.filter((element) => element <= limit);

const simpleArrayTask4 = [1, 3, 7, 2, 9, 4];
const limitArrow = 2;
const filteredArray = arrowRemoveAbove(simpleArrayTask4, limitArrow);
console.log(`Task 4 arrow version result: ${filteredArray}`);
