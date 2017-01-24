//use recursion, think at the node, divide and conquer. reduce to smaller version of the same problem
//Solve:

//start in an array of arrays, and toggle spaces. cannot go back to space you've already been on. need to find a path to the end?

var robotPaths = function(n,board,i,j){

  if(!board){
  	board = makeBoard(n);
  	i = 0;
  	j = 0;
  }
  //need to set base case for when space is invalid, need to backtrack? 

//if robot moves to invalid space
  //return 0

//if robot reaches the bottom right
  //add one to total paths
  //return 1

//if robot moves to valid space (not the end)
  //toggle space
  //check all paths from that space

//revert board to the original state

//return # of paths


}



//# of paths = # of paths by moving up, right, down or up.
