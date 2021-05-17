/*

EPI 12.1 - Palindromic Permutations

write a function that tests whether a given string (word) can be "arranged" into a palindrome

for example:
level is already a palindrome
edified can be turned into deified
both should return true

* this is a hash tables/set problem

*/

function palPerms(str) {
  let oddFreq = new Set();
  for (let i = 0; i < str.length; i++) {
    if (oddFreq.has(str[i])) {
      oddFreq.delete(str[i]);
    } else {
      oddFreq.add(str[i]);
    }
  }
  return oddFreq.size <= 1;
}

console.log(palPerms('level')); // expect true
console.log(palPerms('edified')); // expect true
console.log(palPerms('racer')); // expect false
