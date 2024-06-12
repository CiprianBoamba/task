/** Task 1
Create a function that will halve a given number.*/

function halveNumber(num) {
  return num / 2;
}

let result = halveNumber(-7.5);

console.log(result);

// Define an arrow function to halve a number

const arrowHalvenumber = (num) => num / 2;

let res = arrowHalvenumber(8);

console.log(res);
