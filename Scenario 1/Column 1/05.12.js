/*

EPI PROBLEM 5.12 

SAMPLE OFFLINE DATA -- ie RANDOM SAMPLING

  - given an array of all users, select a random subset     of size k to roll out a feature to as betas.

  - any subset you make should have equal likelyhood of     being the subset.

*/

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(getRandom(5,10));

function randomSampling(arr, size) {
  let i = 0;
  let random;
  let remMax = arr.length - 1;
  //console.log(arr, "\n");
  while (i < size) {
    let remMin = i + 1;
    random = getRandom(remMin, remMax);
    //console.log("random idx", random);
    //console.log("val at random", arr[random]);
    [arr[i], arr[random]] = [arr[random], arr[i]];
    i++;
    //console.log("arr", arr, "\n");
  }
  return arr.slice(0, size);
}
let b = [22, 8, 15, 31, 2, 7, 49];
console.log(randomSampling(b, 3));
// expect arr of len 3, filled with any 3 unique randoms from b
