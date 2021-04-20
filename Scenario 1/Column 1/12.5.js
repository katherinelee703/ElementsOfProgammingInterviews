/*

12.5 - FIND THE NEAREST REPEATED ENTRIES IN AN ARRAY

HINT: each entry in the array is a candidate.

People do not like reading a text in which a word is used multiple times in a short paragraph. 
Write a function to identify such a problem.

given:
["All", "work", "and", "no", "play", "makes", "for", "no", "work", "no", "fun", "and", "no", "results"];

output: the 2nd and 3rd occurrences of "no" are the closest pair of repeated entries in this array

Brute Force: O(n^2) time O(1) space, go over each, 
             see if it is repeated at a closer distance than 
						 the closest repeater distance recorded so far.

Optimized: O(n) time, O(d) space (num of distinct entries), Scan thru the array once, 
           and record the index at which it most recently occurred. 
					 at each value we pass, all we care about is the closest previous entry, 
					 so use the hash table to see if the gap between a recurring one is smaller than 
					 the closest pair we have seen so far. Set tracker variable to that. 
					 And by the end of an iteraion we will know which one it was.  

*/

function nearestRepeatNaive(arr) {
  let hash = {};
  let runningMin = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let a = arr[i];
      let b = arr[j];
      if (a === b) {
        let diff = Math.abs(i - j);
        if (!hash[a]) {
          hash[a] = diff;
        } else {
          if (diff < hash[a]) {
            hash[a] = diff;
          }
        }
        if (diff < runningMin) runningMin = diff;
      }
    }
  }
  return runningMin === Infinity ? -1 : runningMin;
}

function nearestRepeat(arr) {
  let hash = {};
  let word;
  let runningMin = Infinity;
  let startIdx;
  let endIdx;

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (hash[curr]) {
      let dist = i - hash[curr];
      if (dist < runningMin) {
        runningMin = dist;
        startIdx = hash[curr];
        endIdx = i;
        word = curr;
      }
    }
    hash[curr] = i;
  }

  if (runningMin === Infinity) return -1;

  return `dist: ${runningMin},\nword: ${word},\nstartIdx: ${startIdx},\nendIdx: ${endIdx}`;
}

let arr = [
  'All',
  'work',
  'and',
  'no',
  'play',
  'makes',
  'for',
  'no',
  'work',
  'no',
  'fun',
  'and',
  'no',
  'results',
];
console.log('naive: dist:', nearestRepeatNaive(arr)); // expect 2
console.log('overwrite hash opt: ', nearestRepeat(arr)); // expect dist: 2, word: no, startIdx: 7, endIdx: 9

console.log('\n=============\n');

let arr2 = ['hi', 'how', 'are', 'you'];
console.log('naive:', nearestRepeatNaive(arr2)); // expect -1
console.log('overwrite hash opt:', nearestRepeat(arr2)); // expect -1
