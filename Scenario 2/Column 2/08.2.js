/*

EPI 8.2 - EVALUATE RPN (REVERSE POLISH NOTATION) EXPRESSIONS

An RPN expression should satisfy 2 rules
-1) it is a single digit, or sequence of digits, prefixed with an option like + - * /
-2) it is of the form A, B, ~ where A and B are expressions, and where ~ is one of the + - * /

Examples:
"6"
"123"
"-42"
"1729"
"3,4,+,2,*,1,+"
"1,1,+,-2,*"
"-641,6,/,28,/"

An RPN expression can be evaluated uniquely to an integer, which is determined recursively. wtf??
The base case corresponds to rule 1, which is an integer expressed in the base-10 position system.
Rule 2 corresponds to the recursive case, and the RPN is evaluated in the natural way:
for example:

if we must do AB~ and A is 2 and B is 3, and our expression is "2,3,*" this evaluates to 2 * 3 = 6
if we must do AB~ and A is 7 and b is 2, and our expression is "7,2,/" this is integer division and the answer
will be 7 / 2 = 3 (not 3.5, we round down to nearest whole number). You can assume operands to division are always positive...

Write a program that takes in an RPN expression and evaluates it to a number.

Hint: process subexpressions, keeping values in a stack. How should operators be handled?

*/

function rpnEvaluator(rpn) {
  // instead of calling split at comma, you could try to do a for loop that has
  // and inner while loop that separates out the nums from the signs
  // but for efficiency lets use .split(",") for now...
  let arr = rpn.split(',');
  let stack = [];
  let first, second;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '+' && arr[i] !== '-' && arr[i] !== '*' && arr[i] !== '/') {
      stack.push(arr[i]);
    } else {
      // we only set first on the first go thru, after, first becomes the result we work with
      if (!first) first = Number(stack.shift());

      // need to type change both first and second to Number
      second = Number(stack.shift());

      if (arr[i] === '+') {
        first += second;
      }
      if (arr[i] === '-') {
        first -= second;
      }
      if (arr[i] === '*') {
        first *= second;
      }
      if (arr[i] === '/') {
        // reset the variable for first if it is division due to Math.floor
        first = Math.floor(first / second);
      }
    }
  }

  return first;
}

console.log(rpnEvaluator('3,4,+,2,*,1,+')); // (((3 + 4) * 2) + 1) = 15
console.log(rpnEvaluator('-641,6,/,28,/')); // (Math.floor((Math.floor(-681 / 6)) / 28)) = -4
