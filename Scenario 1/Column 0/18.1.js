/*

SEARCH A MAZE

  - imagine you have a maze that is an image made up of black and white squares 
  - black are impassable squares
  - white are passable squares
  - there is an entrance and an exit square (both white)
  - Find a way of getting from entrance to exit.

  Given a 2D array of black and white entries representing the maze with designated 
  entrance and exit points, find (and return) a path from entrance to exit, if one exists.

    1st Hint: model the maze as a graph
  
    ... presumed takeaway -- do dfs or bfs on the maze graph

    2nd Hint: it is better to do DFS than BFS

*/

let maze = new Array(10);
for (let i = 0; i < 10; i++) {
  maze[i] = new Array(10).fill('w');
}
maze[0][9] = 'exit';
maze[9][0] = 'enter';

maze[0][0] = 'b';
maze[0][6] = 'b';
maze[0][7] = 'b';
maze[1][2] = 'b';
maze[2][0] = 'b';
maze[2][2] = 'b';
maze[2][5] = 'b';
maze[2][6] = 'b';
maze[2][8] = 'b';
maze[2][9] = 'b';
maze[3][3] = 'b';
maze[3][4] = 'b';
maze[3][5] = 'b';
maze[3][8] = 'b';
maze[4][1] = 'b';
maze[4][2] = 'b';
maze[5][1] = 'b';
maze[5][2] = 'b';
maze[5][5] = 'b';
maze[5][7] = 'b';
maze[5][8] = 'b';
maze[6][4] = 'b';
maze[7][0] = 'b';
maze[7][2] = 'b';
maze[7][4] = 'b';
maze[7][6] = 'b';
maze[8][0] = 'b';
maze[8][2] = 'b';
maze[8][3] = 'b';
maze[8][7] = 'b';
maze[8][8] = 'b';
maze[8][9] = 'b';
maze[9][7] = 'b';
maze[9][8] = 'b';

//console.log(maze);

class Coord {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  equals(anotherCoord) {
    return this.row === anotherCoord.row && this.col === anotherCoord.col;
  }
}

let start = new Coord(9, 0);
let end = new Coord(0, 9);

// curr and exit are sent in as Coords
function searchMazeHelper(maze, curr, exit, path = new Set()) {
  // check if curr is in bounds and not a "b"
  //console.log("curr: ", curr, "exit: ", exit);
  if (
    curr.row < 0 ||
    curr.row >= maze.length ||
    curr.col < 0 ||
    curr.col >= maze[0].length ||
    maze[curr.row][curr.col] === 'b'
  ) {
    return false;
  }

  path.add(curr);
  maze[curr.row][curr.col] = 'b'; // this is how we mark visited so we don't loop forever and try again and again
  if (curr.equals(exit)) {
    return path; // or return true if u only wanna know "if there is a path"
  }
  // else curr isn't at exit yet, so move curr along somehow
  let options = [
    new Coord(curr.row, curr.col + 1),
    new Coord(curr.row, curr.col - 1),
    new Coord(curr.row + 1, curr.col),
    new Coord(curr.row - 1, curr.col),
  ];

  for (let nextMove of options) {
    if (searchMazeHelper(maze, nextMove, exit, path)) {
      return path; // or return true;
    }
  }
  // if cannot find a path by this point, remove the last entry added at end of path
  path.delete(curr);
  return false;
}

console.log(searchMazeHelper(maze, start, end));

let maze2 = new Array(4);

for (let i = 0; i < 4; i++) {
  maze2[i] = new Array(4).fill('b');
}

maze2[3][0] = 'w';
maze2[2][0] = 'w';
maze2[2][1] = 'w';
maze2[1][1] = 'w';
maze2[1][2] = 'w';
maze2[0][2] = 'w';
maze2[0][3] = 'w';

let start2 = new Coord(3, 0);
let end2 = new Coord(0, 3);

console.log(maze2);
console.log(searchMazeHelper(maze2, start2, end2));
