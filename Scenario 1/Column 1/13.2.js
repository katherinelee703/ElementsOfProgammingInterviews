/*

13.2 Merge 2 Sorted Arrays

You are given 2 sorted arrays.
The first one has enough empty spaces at the end to hold the full second one.
Combine them in sorted order into the first array.
Avoid repeatedly moving entries.

Use O(m + n) time
  where m is num of non null elements in first array, 
  and n is num of elements in second array

Use O(1) space 
  by using no extra data structures, 
	since you're given enough null spaces to work with

*/

let a = [3, 13, 17, null, null, null, null, null];
let b = [3, 7, 11, 19];

function merge2(arr1, arr2) {
  let m = 0;
  let n = arr2.length;

  while (arr1[m] !== null) {
    m++;
  }

  let a = m - 1;
  let b = n - 1;

  let writeIdx = m + n - 1;

  while (a >= 0 && b >= 0) {
    // console.log(arr1)
    // compare arr1[a] with arr2[b]
    // write the largest at write index
    // decrement write index
    // decrement whichever was larger of a or b
    if (arr1[a] >= arr2[b]) {
      arr1[writeIdx] = arr1[a];
      a--;
    } else {
      arr1[writeIdx] = arr2[b];
      b--;
    }
    writeIdx--;
  }

  return arr1;
}

console.log('result: ', merge2(a, b)); // expect [3,3,7,11,13,17,19, null]
