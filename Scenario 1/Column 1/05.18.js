/*

EPI 5.18 - COMPUTE THE SPIRAL ORDERING OF A 2D ARRAY

O(n^2) time 
O(1) space

*/

let a = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let b = [
  [4, 3],
  [1, 2],
];

function computeSpiral(arr) {
  let order = [];
  let dir = (row = col = 0);
  // shift tells u whether to go l/r/up/down
  let shift = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let size = arr.length * arr[0].length;

  for (let i = 0; i < size; i++) {
    //console.log(arr[row][col]); // this should print in console the spiral order too
    order.push(arr[row][col]);
    arr[row][col] = null;

    let nextRow = row + shift[dir][0];
    let nextCol = col + shift[dir][1];

    // check if next location is valid. when it's not do this:
    if (
      nextRow < 0 ||
      nextRow >= arr.length ||
      nextCol < 0 ||
      nextCol >= arr[0].length ||
      arr[nextRow][nextCol] === null
    ) {
      dir = (dir + 1) % 4; // this determines if next move is l/r/u/d
      nextRow = row + shift[dir][0];
      nextCol = col + shift[dir][1];
    }
    row = nextRow;
    col = nextCol;
  }

  return order;
}

console.log(computeSpiral(a));
// expect [1,2,3,48,12,16,15,14,13,9,5,6,7,11,10];

console.log(computeSpiral(b));
// expect [4,3,2,1];
