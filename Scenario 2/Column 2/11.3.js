/*

EPI 11.3 - SEARCH A CYCLICALLY SORTED ARRAY

cyclically sorter means that the whole thing is sorted if you shift the whole thing over a certain number of spaces. ie it has a pivot point that if you cut off the part before and tack it on the end, it is totally sorted.

this is basically "do binary search to find the pivot point (which is the min of array)"
and return the idx of that pivot point

*/

function cyclicallySortedArrSearch(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start < end) {
    mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}

let test = [5, 6, 7, 1, 2, 3, 4];

console.log('idx = ', cyclicallySortedArrSearch(test)); // expect idx of 3
