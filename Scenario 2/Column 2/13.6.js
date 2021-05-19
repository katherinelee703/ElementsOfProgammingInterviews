/*

EPI 13.6 - RENDER A CALENDAR

~ write a program that takes a set of event timeslots and determins the max num of concurrent events ~

- this is just like the Twitter OA question / LeetCode range addition question
- aka overlapping 'meeting rooms' question

- somewhat like DP
- you make an extra array with 2 spaces more than max element (max is 17, make len 19)
- ++ at the start of an interval
- -- 1 after the end of an interval
- go thru extra array one more time, doing add-up w/curr variable, and then checking runningMax as u go along
- return the number of overlaps at end (runningMax)

- need getMax func that finds the max val (ie latest timestamp)
- need main func that counts up where there are overlaps

*/

function getMax2D(arr) {
  let runningMax = 0;
  for (let i = 0; i < arr.length; i++) {
    let innerMax = Math.max(arr[i][0], arr[i][1]);
    runningMax = Math.max(runningMax, innerMax);
  }
  return runningMax;
}

function maxConcurrentEvents(arr) {
  let max = getMax2D(arr);
  let temp = new Array(max + 2).fill(0);
  let start, end;

  // the 'range' part of range addition
  for (let i = 0; i < arr.length; i++) {
    start = arr[i][0];
    end = arr[i][1];
    temp[start]++;
    temp[end + 1]--;
  }

  // console.log('temp start', temp);

  let overlaps = 0;
  let curr = 0;

  // the 'addition' part of range addition
  for (let i = 0; i < temp.length; i++) {
    temp[i] = curr + temp[i];
    curr = temp[i];
    overlaps = Math.max(overlaps, temp[i]);
  }

  // console.log('temp end', temp);

  return overlaps;
}

let cal = [
  [1, 5],
  [2, 7],
  [4, 5],
  [6, 10],
  [8, 9],
  [9, 17],
  [11, 13],
  [12, 15],
  [14, 15],
];

console.log('max concurrent events on calendar: ', maxConcurrentEvents(cal));
