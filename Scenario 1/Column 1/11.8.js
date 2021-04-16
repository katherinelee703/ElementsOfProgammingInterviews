/*

EPI 11.8 - FIND THE KTH LARGEST ELEMENT

  -  assume array entries are distinct

*/

let a = [5, 2, 3, 8, 9, 7, 1];
// incr: 1,2,3,5,7,8,9
// decr: 9,8,7,5,3,2,1

var kthLargest = function (nums, k) {
  if (!nums.length) return nums;
  if (k === 0) return false;
  // standard quick select algorithm
  let random = (i, j) => Math.trunc(i + Math.random() * (j - i));
  function quickSelect(nums, k) {
    if (!nums.length) return false;
    let pivot = random(0, nums.length);
    // divide
    let [left, right] = [[], []];
    for (let [l, r] of nums.entries()) {
      if (l == pivot) continue;
      if (r < nums[pivot]) left.push(r);
      else right.push(r);
    }
    // conquer
    if (left.length == k) return nums[pivot];
    if (left.length > k) return quickSelect(left, k);
    return quickSelect(right, k - (left.length + 1));
  }
  return quickSelect(nums, nums.length - k);
};

console.log('4th largest: ', kthLargest(a, 4)); // expect 5
console.log('2nd largest: ', kthLargest(a, 2)); // expect 8
console.log('7th largest: ', kthLargest(a, 7)); // expect 1
console.log('8th largest: ', kthLargest(a, 8)); // expect false
console.log('0th largest: ', kthLargest(a, 0)); // expect false
