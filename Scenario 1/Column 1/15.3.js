/*

15.3 GENERATE ALL NON-ATTACKING PLACEMENTS OF N QUEENS

[["x","Q","x","x"],
 ["x","x","x","Q"],
 ["Q","x","x","x"],
 ["x","x","Q","x"]]

these queens share no:
 - rows
 - columns
 - diagonals
they are in non-attacking positions

example: in a 4x4 board, there are only 2 ways to make 4 queens all be in non-attacking positions

*/

function nQueens(n) {
  // n # of queens && board size n x n
  let result = [];
  let colPlacement = [];
  placeQueens(n, 0, colPlacement, result);
  return result;
}

function placeQueens(n, row, colPlacement, result) {
  if (row === n) {
    result.push(colPlacement.slice());
  } else {
    for (let col = 0; col < n; col++) {
      colPlacement.push(col);
      if (isValid(colPlacement)) {
        placeQueens(n, row + 1, colPlacement, result);
      }
      colPlacement.pop();
    }
  }
}

function isValid(colPlacement) {
  let rowID = colPlacement.length - 1;
  for (let i = 0; i < rowID; i++) {
    let diff = Math.abs(colPlacement[i] - colPlacement[rowID]);
    if (diff === 0 || diff === rowID - i) {
      return false;
    }
  }
  return true;
}

console.log(nQueens(4));

// Time complexity is between n and n! (since each queen must be on a diff row)
