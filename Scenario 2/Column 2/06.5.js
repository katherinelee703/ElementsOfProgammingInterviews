/*

6.5 - TEST IF PALINDROME (ALPHANUMERIC)

given a string like "A man a plan a canal Panama!" return true
given a string like "Ray a Ray." return false

we only care about the characters that are alphnumeric (ignore spaces and punctuation)

*/

function isPalindrome(str) {
  let p1 = 0;
  let p2 = str.length - 1;
  let front;
  let back;
  while (p1 <= p2) {
    while (!isAlphaNumeric(str[p1])) {
      p1++;
    }
    while (!isAlphaNumeric(str[p2])) {
      p2--;
    }

    if (str[p1].toLowerCase() !== str[p2].toLowerCase()) return false;
    p1++;
    p2--;
  }
  return true;
}

function isAlphaNumeric(char) {
  let final = char.replace(/[^a-z0-9]/gi, '');

  return final.length !== 0;
}

console.log(isAlphaNumeric('a')); // true
console.log(isAlphaNumeric('*')); // false

console.log(isPalindrome('A man a plan a canal Panama!')); // expect true
console.log(isPalindrome('Ray a Ray!')); // expect false
