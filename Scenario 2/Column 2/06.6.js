/*

6.6 - REVERSE ALL THE WORDS IN A SENTENCE

given a string "Bob likes Alice" return "Alice likes Bob";
words are separated by white spaces
no punctuation
the string will be given as an array of characters

hint: this is very intricate to attempt in a single pass - do 2 passes instead

*/

function reverseWordsInSentence(arr) {
  arr.reverse(); // takes O(n) time

  let prevSpaceIdx = -1;
  let wordEndIdx;
  let wordStartIdx;

  for (let i = 0; i < arr.length + 1; i++) {
    // takes O(n) time
    let char = arr[i];
    if (char === ' ' || i === arr.length) {
      wordStartIdx = prevSpaceIdx + 1;
      wordEndIdx = i - 1;
      while (wordStartIdx <= wordEndIdx) {
        // ~ O(.5n) time
        [arr[wordStartIdx], arr[wordEndIdx]] = [
          arr[wordEndIdx],
          arr[wordStartIdx],
        ];
        wordStartIdx++;
        wordEndIdx--;
      }
      prevSpaceIdx = i;
    }
  }
  return arr;
}

let test = 'Bob likes Alice'.split('');
let test2 = 'Kate likes Cake'.split('');

console.log(reverseWordsInSentence(test)); // expect "Alice likes Bob".split("");
console.log(reverseWordsInSentence(test2)); // expect "Cake likes Kate".split("");

/* 

Seems like this takes approximately O(~2.5n) time: 
  1n for .reverse(), 
  1n to go thru array forward to backward looking for spaces, 
  and around .5n for the 2-pointer inner-word reversing while loop.
 
Which all reduces to O(n) time, O(1) space (swapping chars in place, stable # of variables)
 
*/
