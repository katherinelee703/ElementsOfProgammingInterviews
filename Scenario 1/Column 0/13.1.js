// INTERSECTION OF 2 SORTED ARRAYS

// version using sets
function intersection(arr1, arr2) {
  let shorter = arr1.length < arr2.length ? arr1 : arr2;
  let longer = arr1.length > arr2.length ? arr1 : arr2;
  let shortSet = new Set(shorter);
  let res = new Set();
  for (let i = 0; i < longer.length; i++) {
    if (shortSet.has(longer[i])) {
      res.add(longer[i]);
    }
  }
  return [...res];
}

let a = [2, 3, 3, 5, 5, 6, 7, 7, 8, 12];
let b = [5, 5, 6, 8, 8, 9, 10, 10];

console.log('intersection at: ', intersection(a, b));

// version using 2 pointers
function intersect(arr1, arr2) {
  let i = (j = 0);
  let res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      if (res[res.length - 1] !== arr1[i]) {
        res.push(arr1[i]);
      }
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return res;
}

console.log('intersect at: ', intersect(a, b));
