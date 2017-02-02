// Inputs

// Never Empty Array
// Alway Integer
//
//
// Return new array with all consecutive like values summed
//
// [1, 3, 4, 4, 9, 0] => [1, 3, 8, 9, 0]"""

function sumConsec(array) {
  var result = [];
  var resCounter = 0;
  result.push(array[0]);
  for(var i = 1; i < array.length; i++){
    if(result[resCounter] === array[i]){
      result[resCounter] += array[i];
      resCounter--;
    } else {
      result.push(array[i]);
    }
    resCounter++;
  }
  return result;
}



// """Inputs
//
// Never Empty Array
// Alway Integer
//
// Challenge 2
//
// Given an array and a starting edge and an ending edge
// sum consecutive like numbers, if there are numbers that
// are also like prior to the starting edge go back and add those in as well (given [1,1,1,2,2,2] and a starting edge with index 1 and an ending edge with index 4 return [3,6]
//
//
//        S=2           E=6
//          |                |
// [2, 1, 1, 1, 4, 3, 6, 6, 1] => [3, 4, 3, 6]"""

function edgeSum(array, startEdge, endEdge) {
  var result = [];
  var tempSum = array[startEdge - 1];
  for(var i = startEdge; i <= endEdge; i++){
    // set tempSum to the current array position. if the next position is equal to last position, add to temp;
    // once it is not the same, push temp to result, and set temp to next value
    if(array[i] === array[i - 1]){
      tempSum += array[i];
    } else {
      result.push(tempSum);
      tempSum = array[i];
    }
  }
  result.push(tempSum);
  return result;
}






// """Is Subsequence
//
// Given a string s and a string t, check if s is subsequence of t. You may assume that there is only lowercase English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).
//
// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, """"ace"""" is a subsequence of """"abcde"""" while """"aec"""" is not).
// Example 1:
// s = """"abc"""", t = """"ahbgdc""""
// Return true.
// Example 2:
// s = """"axc"""", t = """"ahbgdc""""
// Return false."""








// """Move Zeros
//
// Given an array nums, write a function to move all 0’s to the end of it while maintaining the relative order of the non-zero elements.
// Do not make a copy of the array; do this in-place. Minimize the total number of operations."""

function moveZeros(array) {
  for(var i = 0; i < array.length; i++){
    if(array[i - 1] === 0){
      array.splice(i - 1, 1);
      array.push(0);
    }
    if(array[i] === 0){
      array.splice(i, 1);
      array.push(0);
    }
  }
  return array;
}
