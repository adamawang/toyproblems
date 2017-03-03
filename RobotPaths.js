//use recursion, think at the node, divide and conquer. reduce to smaller version of the same problem
//Solve:

//helper function
var makeBoard = function(n) {
  var board = [];
  for(var i = 0; i < n; i++){
    board.push([]);
    for(var j = 0; j < n; j++){
      board[i].push(false);
    }
  }
  board.togglePiece = function(i,j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i,j) {
    return !!this[i][j];
  }
  return board;
}


//start in an array of arrays, and toggle spaces. cannot go back to space you've already been on. need to find a path to the end?
var robotPaths = function(n) {
  var board = makeBoard(n);
  var pathCount = 0;
  function traversePaths(i, j) {
    // base case, when the piece reaches the bottom right, add to path count and return
    if(i === (n - 1) && j === (n - 1)){
      pathCount++;
      return;
    }
    // if path is invalid in any direction, or tile has been visited, return
    if(i < 0 || j < 0 || i >= n || j >= n || board.hasBeenVisited(i, j)){
      return;
    } else {
      // first toggle piece and traverse all directions.
      board.togglePiece(i, j);
      traversePaths(i + 1, j);
      traversePaths(i - 1, j);
      traversePaths(i, j + 1);
      traversePaths(i, j - 1);
      // once you hit the end and no more paths, toggle board to original state
      board.togglePiece(i, j);
    }
  }
  // initiate the function
  traversePaths(0,0);
  return pathCount;
}

// # of paths = # of paths by moving up, right, down or up.
