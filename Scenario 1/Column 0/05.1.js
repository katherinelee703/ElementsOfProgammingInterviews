/* DUTCH NATIONAL FLAG PROBLEM

Write a program that takes an array and an index, 
and rearranges the elements such that:
all elements less than the element at the pivot index appear first,
followed by elements equal to the pivot, 
followed by elements greater than the pivot.

*/

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function dnfp(arr, pivotIdx) {
  let pivot = arr[pivotIdx];
  let smaller = 0;
  let equal = 0;
  let larger = arr.length - 1; // or .length

  while (equal <= larger) {
    // or < larger
    console.log('smaller:', smaller, 'equal: ', equal);
    console.log('before: ', arr);
    if (arr[equal] < pivot) {
      swap(arr, smaller++, equal++);
    } else if (arr[equal] === pivot) {
      ++equal;
    } else {
      // arr[equal] > pivot
      swap(arr, equal, larger--); // or --larger
    }
    console.log('after : ', arr);
  }

  return arr;
}

let arr = [1, 6, 4, 8, 3, 5];
console.log('dutch national flag partitions around 5:', dnfp(arr, 5));
console.log('\n');

// Related problem: take an array and put all evens first, followed by all odds

function evenFirst(arr) {
  let end = arr.length - 1;
  for (let i = 0; i <= end; i++) {
    if (arr[i] % 2 !== 0) {
      if (arr[end] % 2 !== 0) {
        end--;
        i--;
      } else {
        [arr[i], arr[end]] = [arr[end], arr[i]];
        end--;
      }
    }
  }
  return arr;
}

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 7];
console.log('put evens first: ', evenFirst(arr2));
