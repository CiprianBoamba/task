/** Task 1
Create a function that will halve a given number.*/

function halveNumber(num) {
  return num / 2;
}

let resultTask1 = halveNumber(4);

console.log(`Task1 result is  : ${resultTask1}`);

// Define an arrow function to solve Task 1

const arrowHalvenumber = (num) => num / 2;

let resTask1 = arrowHalvenumber(8);

console.log(`Task1 simple version result is  : ${resTask1}`);
