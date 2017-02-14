// """Given two binary trees, write a function to check if they are equal or not.
//
// Two binary trees are considered equal if they are structurally identical and the nodes have the same value."""

// binary trees have a value property, left, and right node properties.

function binaryTreeCheck(tree1, tree2) {
  // search binary tree style, depth first and check nodes on the way down. If one of the nodes differ in value or structure, return false
  // use recursion, pass both trees into recursive function
  let result = true;
  function traverseAndCheck(one, two) {
    // base case, check if values match
    if(one.value !== two.value) {
      result = false;
      return;
    }
    if(one.left && two.left) {
      traverseAndCheck(one.left, two.left);
    }
    // if either does not match in structure, return false;
    if((one.left && !two.left) || (!one.left && two.left)) {
      result = false;
      return;
    }
    if(one.right && two.right) {
      traverseAndCheck(one.right, two.right);
    }
    if((one.right && !two.right) || (!one.right && two.right)) {
      result = false;
      return;
    }
  }
  return result;
}

// this one is for normal trees, not binary

// function treeCheck(tree1, tree2) {
//   let result = true;
//   function traverseCheck(one, two) {
//     if(one.value !== two.value) {
//       result = false;
//       return;
//     }
//     for(var i = 0; i < one.length; i++){
//       traverseCheck(one.children[i], two.children[i]);
//     }
//   }
//   traverseCheck(tree1, tree2);
//   return result;
// }



// """House Robber
//
// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system
// connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each house,
// determine the maximum amount of money you can rob tonight without alerting the police."""

var houses = [10,20,40,30,10,10,20,30];

function houseRobber(array) {
  // naive solution: check every other house and add up totals, whichever one is highest, choose those houses

}



// """Odd - Even Linked List
//
// Given a singly linked list, group all odd nodes together followed by the even nodes.
// Please note here we are talking about the node number and not the value in the nodes.
//
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
//
// Example:
// Given 1->2->3->4->5->NULL,
// return 1->3->5->2->4->NULL.
//
// Note:
// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ..."""

function evenLinkedList(list) {
  
}



// """Single Number
//
// Given an array of integers, every element appears three times except for one. Find that single one.
// """

function singleNumber(array) {
  // push into an object, keep count. find key with value that isnt three
  let obj = {};
  array.forEach((val) => {
    if(obj[val]){
      obj[val]++;
    } else {
      obj[val] = 1;
    }
  });
  for(let key in obj) {
    if(obj[key] !== 3){
      return key;
    }
  }
  return true;
}




// """Single Number II
//
// Given an array of integers, every element appears three times except for one. Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
// """

function singleNumLinear(array) {

}
