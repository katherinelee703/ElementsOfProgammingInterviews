/*

5.2 - INCREMENT AN ARBITRARY-PRECISION INTEGER

Write a program that takes as input 
an array of digits encoding a non-negative decimal integer D.

It should update the array to represent the integer D+1.

For example, if input was [1,2,9]
then the output should be [1,3,0]

*/

function incrementIntegerNewArr(arr) {
  let final = new Array(arr.length).fill(null);
  let carry = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    let currFin = arr[i] + carry;
    carry = 0;
    if (i === arr.length - 1) currFin += 1;

    if (currFin >= 10) {
      final[i] = currFin - 10;
      carry = 1;
    } else {
      final[i] = currFin;
    }
  }

  if (carry === 1 && final[0] === 0) {
    final.unshift(1);
  }

  return final;
}

function incrementIntegerMutateArr(arr) {
  let carry = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    let currFin = arr[i] + carry;
    carry = 0;
    if (i === arr.length - 1) currFin += 1;

    if (currFin >= 10) {
      arr[i] = currFin - 10;
      carry = 1;
    } else {
      arr[i] = currFin;
    }
  }

  if (carry === 1 && arr[0] === 0) {
    arr.unshift(1);
  }

  return arr;
}

let a = [1, 2, 8];
let b = [1, 2, 9];
let c = [9, 9, 8];
let d = [9, 9, 9];
let e = [1, 9, 9, 9];
let f = [1];
let g = [9];
let h = [0];

console.log(incrementIntegerNewArr(a)); // [1,2,9]
console.log(incrementIntegerNewArr(b)); // [1,3,0]
console.log(incrementIntegerNewArr(c)); // [9,9,9]
console.log('*', incrementIntegerNewArr(d)); // [1,0,0,0]
console.log(incrementIntegerNewArr(e)); // [2,0,0,0]
console.log(incrementIntegerNewArr(f)); // [2]
console.log('*', incrementIntegerNewArr(g)); // [1,0]
console.log(incrementIntegerNewArr(h)); // [1]

console.log('\n============\n');

console.log(incrementIntegerMutateArr(a)); // [1,2,9]
console.log(incrementIntegerMutateArr(b)); // [1,3,0]
console.log(incrementIntegerMutateArr(c)); // [9,9,9]
console.log('*', incrementIntegerMutateArr(d)); // [1,0,0,0]
console.log(incrementIntegerMutateArr(e)); // [2,0,0,0]
console.log(incrementIntegerMutateArr(f)); // [2]
console.log('*', incrementIntegerMutateArr(g)); // [1,0]
console.log(incrementIntegerMutateArr(h)); // [1]
