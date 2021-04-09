/*

REMOVE AND REPLACE:

given  ["a", "c", "d", "b", "b", "c", "a"]
return ["d", "d", "c", "d", "c", "d", "d"]

ie:
  replace all "a" with 2 "d"s
  remove all "b"

*/

function removeReplaceNaive(arr) {
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 'a' && arr[i] !== 'b') {
      final.push(arr[i]);
    } else {
      if (arr[i] === 'a') {
        final.push('d', 'd');
      }
    }
  }
  return final;
}

let a = ['a', 'c', 'd', 'b', 'b', 'c', 'a'];
console.log(removeReplaceNaive(a));
// expect ["d", "d", "c", "d", "c", "d", "d"]
// O(n) time
// O(n) space

function removeReplaceOpt(arr) {
  let writeIdx = 0;
  let aCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 'b') {
      if (arr[i] === 'a') {
        aCount++;
        writeIdx++;
      }
      writeIdx++;
    }
  }
  let currIdx = writeIdx - 1;
  writeIdx = writeIdx + aCount - 1;
  let finalSize = writeIdx + 1;
  while (currIdx >= 0) {
    if (arr[currIdx] === 'a') {
      arr[writeIdx--] = 'd';
      arr[writeIdx--] = 'd';
    } else {
      arr[writeIdx--] = arr[currIdx];
    }
    currIdx--;
  }
  // for (let i = arr.length-1; i >= 0; i--) {
  //   if (arr[i] !== "b") {
  //     if (arr[i] === "a") {
  //       arr[writeIdx] = "d";
  //       arr[writeIdx - 1] = "d";
  //       writeIdx -= 2;
  //     } else {
  //       arr[writeIdx] = arr[i];
  //       writeIdx--;
  //     }
  //   }
  // }
  return arr;
}

let b = ['a', 'c', 'd', 'b', 'b', 'c', 'a'];
console.log(removeReplaceOpt(b));
// expect ["d", "d", "c", "d", "c", "d", "d"]
// O(n) time
// no extra space
