// EPI - 5.17 - Is Partially or Fully Filled Sudoku Valid?

function isSudokuValid(board) {
  let s;
  let row;
  let col;
  // check rows
  for (row = 0; row < 9; row++) {
    s = new Set();
    for (col = 0; col < 9; col++) {
      let curr = board[row][col];
      if (s.has(curr) && curr !== 0) return false;
      else s.add(curr);
    }
  }
  // check cols
  for (col = 0; col < 9; col++) {
    s = new Set();
    for (row = 0; row < 9; row++) {
      let curr = board[row][col];
      if (s.has(curr) && curr !== 0) return false;
      else s.add(curr);
    }
  }

  // check regions

  // get the 9 regions
  for (let ri = 0; ri < 3; ri++) {
    for (let rj = 0; rj < 3; rj++) {
      // reset the set for each new region
      s = new Set();

      // use row & col variables to pass to next for loops, using i & j
      // to increase quadrants in 3x3 shape with each iteration
      row = ri * 3;
      col = rj * 3;

      // check inside the region
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let curr = board[row + i][col + j];
          if (s.has(curr) && curr !== 0) return false;
          else s.add(curr);
        }
      }
    }
  }

  return true;
}

let b1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

let b2 = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

let b3 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 7],
];

let b4 = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 7],
  [0, 0, 0, 0, 8, 0, 0, 7, 0],
];

console.log(isSudokuValid(b1)); // expect true
console.log(isSudokuValid(b2)); // expect true

console.log(isSudokuValid(b3)); // expect false, incorrect last num
console.log(isSudokuValid(b4)); // expect false, incorrect last num
