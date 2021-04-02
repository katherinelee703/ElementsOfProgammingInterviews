/*

DYNAMIC PROGRAMMING

INTRO PROBLEMS: 
  -  Fibonacci
  -  Find Max Sum over all sub-arrays

PROBLEM 16.1:
  -  Maximum sum of subarray
  -  Count the Number of Score Combinations
	-  Coin Change

*/

function naiveFib(n) {
  if (n <= 1) return n;
  return naiveFib(n - 1) + naiveFib(n - 2);
}

console.log(naiveFib(6)); // 8
console.log(naiveFib(7)); // 13
console.log(naiveFib(8)); // 21

function cacheFib(n, cache = {}) {
  if (n <= 1) return n;
  if (!cache[n]) {
    cache[n] = cacheFib(n - 1) + cacheFib(n - 2);
  }
  return cache[n];
}

console.log(cacheFib(6)); // 8
console.log(cacheFib(7)); // 13
console.log(cacheFib(8)); // 21

function dpOptFib(n) {
  if (n <= 1) return n;

  let minus2 = 0;
  let minus1 = 1;
  for (let i = 2; i <= n; i++) {
    let curr = minus1 + minus2;
    minus2 = minus1;
    minus1 = curr;
  }
  return minus1;
}

console.log(dpOptFib(6)); // 8
console.log(dpOptFib(7)); // 13
console.log(dpOptFib(8)); // 21

function maxSumOfSubarray(arr) {
  let maxEnd = (maxSeen = 0);

  for (let el of arr) {
    // maxEnd takes the max of the current element vs
    // the current element + whatever the MaxEnd was on the iteration before. It must be either of those choices.
    maxEnd = Math.max(el, el + maxEnd);
    maxSeen = Math.max(maxSeen, maxEnd);
    console.log('maxEnd:  ', maxEnd);
    console.log('maxSeen: ', maxSeen);
  }
  return maxSeen;
}

let a = [904, 40, 523, 12, -335, -385, -124, 481, -31];
let b = [5, 4, 3, 2, 1, 0, -1];
let c = [5, 4, 3, 2, 1, 0, -15, 16];
let d = [-2, 3, 1, -7, 3, 2, -1];
console.log(maxSumOfSubarray(a)); // 1479
console.log(maxSumOfSubarray(b)); // 15
console.log(maxSumOfSubarray(c)); // 16
console.log(maxSumOfSubarray(d)); // 5
console.log(Math.max(0, -2));

function countScoreCombinations(finalScore, playsArr) {
  let plays = new Array(finalScore + 1).fill(null);
  let numCombos = new Array(playsArr.length).fill(plays);
  console.log(numCombos);

  for (let i = 0; i < playsArr.length; i++) {
    numCombos[i][0] = 1; // one way to make 0, base case
    for (let j = 1; j <= finalScore; j++) {
      let withoutThisPlay = i - 1 >= 0 ? numCombos[i - 1][j] : 0;
      let withThisPlay = j >= playsArr[i] ? numCombos[i][j - playsArr[i]] : 0;
      numCombos[i][j] = withoutThisPlay + withThisPlay;
    }
    console.log(numCombos, '\n');
  }
  //console.log(numCombos);
  return numCombos[playsArr.length - 1][finalScore];
}

let final = 12;
let scores = [2, 3, 7];
console.log(countScoreCombinations(final, scores));
// this is in O(scores * playsArr.length) time ie O(s * n) time
// uses O(s * n) space
// space && time are the size of the 2D array we built to help w/ DP approach

function coinChange(amount, denoms = [1, 5, 10, 25]) {
  let rows = new Array(amount + 1);
  let change = new Array(denoms.length).fill(rows);
  console.log(change);
  for (let i = 0; i < denoms.length; i++) {
    change[i][0] = 1;
    for (let j = 1; j <= amount; j++) {
      let withoutThisCoin = i - 1 >= 0 ? change[i - 1][j] : 0;
      let withThisCoin = j >= denoms[i] ? change[i][j - denoms[i]] : 0;
      change[i][j] = withoutThisCoin + withThisCoin;
    }
  }
  console.log(change);
  return change[denoms.length - 1][amount];
}

console.log(coinChange(25));
