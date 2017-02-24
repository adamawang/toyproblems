// """A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).
//
// Each LED represents a zero or one, with the least significant bit on the right.
//
// For example, the above binary watch reads """"3:25"""".
//
// Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.
//
// Example:
//
// Input: n = 1
// Return: [""""1:00"""", """"2:00"""", """"4:00"""", """"8:00"""", """"0:01"""", """"0:02"""", """"0:04"""", """"0:08"""", """"0:16"""", """"0:32""""]
// Note:
// The order of output does not matter. The hour must not contain a leading zero, for example """"01:00"""" is not valid, it should be """"1:00"""". The minute must be consist of two digits and may contain a leading zero, for example """"10:2"""" is not valid, it should be """"10:02""""."""

function binaryWatch(time) {
  var result = [];

  return result;
}






// """Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// For example, given n = 3, a solution set is:
//
// [
//   """"((()))"""",
//   """"(()())"""",
//   """"(())()"""",
//   """"()(())"""",
//   """"()()()""""
// ]"""

function wellFormParens(number) {
  var result = [];

  return result;
}




// """Add and Search Word - Data structure design
//
// Design a data structure that supports the following two operations:
//
// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.
//
// For example:
//
// addWord(""""bad"""")
// addWord(""""dad"""")
// addWord(""""mad"""")
// search(""""pad"""") -> false
// search(""""bad"""") -> true
// search("""".ad"""") -> true
// search(""""b.."""") -> true
// Note:
// You may assume that all words are consist of lowercase letters a-z."""

var WordStorage = function() {
  this.storage = {};
}

WordStorage.prototype.addWord = function(word) {
  this.storage[word] = word;
}

WordStorage.prototype.search = function(word) {
  // basic solution without full search capabilities
  if(this.storage[word]){
    return true;
  }
  return false;
}




// """Count Numbers with Unique Digits
//
// Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.
//
// Example:
// Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])
//
// Hint:
//
// A direct way is to use the backtracking approach.
// Backtracking should contains three states which are (the current number, number of steps to get that number and a bitmask which represent which number is marked as visited so far in the current number). Start with state (0,0,0) and count all valid number till we reach number of steps equals to 10n.
// This problem can also be solved using a dynamic programming approach and some knowledge of combinatorics.
// Let f(k) = count of numbers with unique digits with length equals k.
// f(1) = 10, ..., f(k) = 9 * 9 * 8 * ... (9 - k + 2) [The first factor is 9 because a number cannot start with 0]."""






// """Invert a binary tree.
//
//      4
//    /   \
//   2     7
//  / \     / \
// 1   3 6   9
// to
//      4
//    /   \
//   7     2
//  / \     /  \
// 9   6 3   1"""

function invertBinaryTree(aTree) {
  // traverse depth first down tree, once you hit the end, reverse the children array
  // recursively reverse each of the tree's children arrays on the way up
  function traverseTree(tree) {
    // base case
    if(tree.children.length < 1){
      return;
    }
    for(var i = 0; i < tree.children.length; i++){
      traverseTree(tree.children[i]);
    }
    // reverse children
    tree.children.reverse();
  }
}
