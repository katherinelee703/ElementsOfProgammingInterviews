/* BUY AND SELL A STOCK ONCE FOR MAXIMUM PROFIT

Write a program that takes an array denoting the daily stock price,
and returns the maximum profit that could be made by
buying and then selling one share of that stock.
There is no need to buy if no profit is possible.

*/

let openingBellPrices = [310, 315, 275, 295, 260, 270, 290, 230, 255, 250];

// SLOW VERSION - O(n^2) TIME O(1) SPACE
function mp(prices) {
  let runningMax = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      runningMax = Math.max(runningMax, prices[j] - prices[i]);
    }
  }
  return runningMax;
}

console.log('slow max profit: ', mp(openingBellPrices)); // 30
console.log('all decreasing: ', mp([8, 7, 6, 5, 4]), '\n'); // 0

// OPTIMIZED VERSION - O(n) TIME, O(1) SPACE
function maxProfit(prices) {
  let runningMinPrice = prices[0];
  let runningMaxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    runningMinPrice = Math.min(runningMinPrice, prices[i]);
    runningMaxProfit = Math.max(runningMaxProfit, prices[i] - runningMinPrice);
  }
  return runningMaxProfit;
}

console.log('optimized max profit: ', maxProfit(openingBellPrices)); // 30
console.log('all decreasing: ', maxProfit([8, 7, 6, 5, 4]), '\n'); // 0

// VARIANT:
// FIND LONGEST SUBARRAY OF ALL-EQUAL VALS NEXT TO EACH OTHER

function longestSubArrLen(arr) {
  let currentLongest = 1;
  let runningLongest = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      // update currentLongest
      currentLongest++;
    } else {
      // update runningLongest by comparing to currentLongest
      // reset currentLongest to 0
      runningLongest = Math.max(runningLongest, currentLongest);
      currentLongest = 1;
    }
  }
  return runningLongest;
}

let a = [5, 5, 5, 10, 10, 11, 11, 11, 11, 3, 3];
console.log('longest subarray len: ', longestSubArrLen(a)); // 4 (11s)
