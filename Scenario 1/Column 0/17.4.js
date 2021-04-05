// THE THREE SUM PROBLEM

// is there a way to add up to the target number using 3 items in the array?
// the items can repeat, they don't have to be unique.
// solve in O(n^2) time and O(1) space

function threeSumProblem(arr, target) {
  arr.sort((a, b) => a - b);
  //console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let part1 = arr[i];

    if (part1 * 3 === target) return true;

    let j = 0;
    let k = arr.length - 1;
    let part2 = arr[j];
    let part3 = arr[k];
    let remainder = target - part1;

    while (part2 <= part3) {
      if (part2 + part3 === remainder) return true;
      else if (part2 + part3 < remainder) part2 = arr[k++];
      else part3 = arr[j--];
    }
  }

  return false;
}

let a = [11, 2, 5, 7, 3];
console.log(threeSumProblem(a, 21)); // true
let b = [11, 2, 5, 7, 3];
console.log(threeSumProblem(b, 22)); // false
let c = [1, 2, 3];
console.log(threeSumProblem(c, 6)); // true
let d = [1, 2, 3];
console.log(threeSumProblem(d, 5)); // true
let e = [1, 2, 3];
console.log(threeSumProblem(e, 4)); // true
let f = [1, 2, 3];
console.log(threeSumProblem(f, 3)); // true
let g = [1, 2, 3];
console.log(threeSumProblem(f, 2)); // false
