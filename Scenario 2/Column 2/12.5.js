/*

EPI 12.5 - FIND NEAREST REPEATED ENTRIES IN AN ARRAY

people do not like reading text where a word is used multiple times in a short space.
write a function that takes an array and finds the distance between the pair of words that repeat at the closest interval;

*/

function nearRepeat(str) {
  let s = str.split(' ');
  console.log(s);
  let hash = {};
  let runningMin = Infinity;
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = i;
    } else {
      let maybeMin = i - hash[s[i]];
      if (maybeMin < runningMin) runningMin = maybeMin;
      hash[s[i]] = i;
    }
  }
  return runningMin;
}

let s = 'all work and no play makes for no work no fun and no results';

console.log(nearRepeat(s)); // expect 2
