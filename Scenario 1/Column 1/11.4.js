/* EPI 11.4 - COMPUTE THE INTEGER SQUARE ROOT

  -  naive way: 
     test the square of every number from 1 to num
     takes O(k) time in worst case

  -  better way:
     binary search - you can eliminate all nums less than mid if mid's square is less than num - you can eliminate all nums greater than mid if mids' square is larger than num

     always return left - 1, bc the left will be the one to increment one past right to break the while loop to achieve the "largest without going over" whole number

     takes O(log k) time - basic binary search runtime

*/

function computeIntSqrt(num) {
  let left = 0;
  let right = num;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    // console.log("left: ", left);
    // console.log("right: ", right);
    // console.log("mid: ", mid);

    let square = mid * mid;

    if (square === num) return mid;
    if (square < num) left = mid + 1;
    if (square > num) right = mid - 1;

    // console.log("L: ", left);
    // console.log("R: ", right, "\n");
  }

  return left - 1;
}

console.log('sqrt of 999: ', computeIntSqrt(999)); // 31
console.log('sqrt of 25: ', computeIntSqrt(25)); // 5
console.log('sqrt of 24: ', computeIntSqrt(24)); // 4
console.log('sqrt of 9: ', computeIntSqrt(9)); // 3
console.log('sqrt of 3: ', computeIntSqrt(3)); // 1
