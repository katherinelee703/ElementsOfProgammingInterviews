/*

EPI 15.4 - GENERATE PERMUTATIONS 

assume no duplicate elements

*/

let str = ['d', 'o', 'g', 'e'];
let str2 = ['c', 'a', 't'];

function perms(arr) {
  const result = [];
  backtrack(arr, result);
  return result;
}

function backtrack(arr, result, n = 0) {
  if (n === arr.length - 1) {
    result.push(arr.slice(0));
    return;
  }
  for (let i = n; i < arr.length; i++) {
    [arr[i], arr[n]] = [arr[n], arr[i]];
    backtrack(arr, result, n + 1);
    [arr[i], arr[n]] = [arr[n], arr[i]];
  }
}

console.log(perms(str)); // expect 24 elements
console.log(perms(str2)); // expect 6 elements
