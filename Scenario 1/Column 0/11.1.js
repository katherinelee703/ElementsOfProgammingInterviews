// SEARCH A SORTED ARRAY FOR FIRST OCCURRENCE OF K

let a = [-14, -10, 2, 108, 108, 243, 285, 285, 285, 401];
let b = [-14, -10, 2, 108, 108, 243, 285, 285, 285, 401];

function firstOccK(arr, k, start = 0, end = arr.length - 1) {
  if (!arr.length) return null;
  let mid;
  let potentialFirstOcc = -1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === k) {
      potentialFirstOcc = mid;
      end = mid - 1;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else if (arr[mid] > k) {
      end = mid - 1;
    }
  }
  return potentialFirstOcc;
}

console.log(firstOccK(a, 108)); // expect idx 3
console.log(firstOccK(b, 109)); // expect idx -1
console.log(firstOccK([], 100)); // expect null

// VARIANT PROBLEMS:

function firstOccGreaterK(arr, k, start = 0, end = arr.length - 1) {
  if (!arr.length) return null;
  let mid;
  let potential = -1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === k) {
      potential = mid;
      start = mid + 1;
      while (arr[mid] === k) {
        mid++;
      }
      return mid < arr.length ? mid : -1;
    } else if (arr[mid] > k) {
      potential = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return potential;
}

console.log(firstOccGreaterK(a, 108)); // expect idx 5
console.log(firstOccGreaterK(b, 401)); // expect idx -1
console.log(firstOccGreaterK(b, 100)); // expect idx 3
console.log(firstOccGreaterK(b, 286)); // expect idx 9
console.log(firstOccGreaterK(b, 242)); // expect idx 5
console.log(firstOccGreaterK(b, 0)); // expect idx 2
console.log(firstOccGreaterK(b, -555)); // expect idx 0
console.log(firstOccGreaterK(b, 500)); // expect idx -1
console.log(firstOccGreaterK([], 242)); // expect null

function intervalOcc(arr, k) {
  let first = -1;
  let last = -1;
  let int = [first, last];
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === k) {
      first = findFirst(arr, k, start, mid);
      last = findLast(arr, k, start, end);
      int = [first, last];
      return int;
    } else if (arr[mid] > k) {
      end = mid - 1;
    } else if (arr[mid] < k) {
      start = mid + 1;
    }
  }
  return int;
}

function findFirst(arr, k) {
  return firstOccK(arr, k);
}
function findLast(arr, k, start, end) {
  let res = firstOccGreaterK(arr, k, start, end);
  return res === -1 ? -1 : res - 1;
}

let c = [1, 2, 2, 4, 4, 4, 7, 11, 11, 13];
console.log(intervalOcc(c, 11)); // [7, 8]
console.log(intervalOcc(c, 7)); // [6, 6]
console.log(intervalOcc(c, 12)); // [-1, -1]

console.log('\n=====\n');

function isPrefix(prefix, strings) {
  let res = [];
  strings.forEach((str) => {
    let pf = str.slice(0, prefix.length);
    if (pf === prefix) res.push(str);
  });
  return res;
}
let d = ['cat', 'dad', 'mom', 'uber', 'undone', 'unmoving', 'uverworld'];
console.log(isPrefix('un', d)); // [uncool, undone, unmoving]
