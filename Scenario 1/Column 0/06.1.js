/* INTERCONVERT STRINGS AND INTEGERS

Write a function that can make a string into an integer, 
or an integer into a string - without using things like:
parseInt, String()/.toString(), or Number().
  (ie understand coercion in JavaScript)

*/

let s = '-213';
let ss = '213';
let n = -213;
let nn = 213;

function strToNum(str) {
  let numOfTens = 1;
  let num = 0;
  let idx = 0;

  if (str[0] === '-') idx++;

  num + str[str.length - 1]; // or += Number(str[str.length-1]);

  for (let i = str.length - 2; i >= idx; i--) {
    num += str[i] * (numOfTens * 10); // or += Number(str[i]) * (numOfTens * 10);
    numOfTens *= 10;
  }
  if (str[0] === '-') num *= -1;
  return num; // or return str *= 1;
}

console.log(strToNum(s)); // -213
console.log(strToNum(ss)); // 213

function numToStr(num) {
  return '' + num;
}

console.log(numToStr(n));
console.log(numToStr(nn));
