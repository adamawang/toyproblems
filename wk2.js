// """Remove Linked List Element
//
// Remove all elements from a linked list of integers that have value val.
// Example
// Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
// Return: 1 --> 2 --> 3 --> 4 --> 5"""

var LinkedList = function (initialValue) {
  this.head = new Node(initialValue);
  this.tail = this.head;
};

var Node = function(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.addToTail = function(val){
  var temp = new Node(val);
  if(!this.head.value){
    this.head = temp;
    this.tail = temp;
  } else {
    this.tail.next = temp;
    this.tail = temp;
  }
}

LinkedList.prototype.removeHead = function(){
  if(!this.head.next){
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
}

LinkedList.prototype.contains = function(value){
  var result = false;
  (function checkNodes(node){
    if(node.next === null){
      return;
    }
    if(node.value === value || node.next.value === value){
      result = true;
    } else {
      checkNodes(node.next);
    }
  }(this.head))
  return result;
}

var theList = new LinkedList();

function removeLinkListVal(list, value) {
  // save previous node in variable. first set both to list head
  let pastNode = list.head;
  let currentNode = list.head;
  // traverse the list and when you find a matching value in 'node.next', set current node.next equal to node.next.next to skip it
  function traverse(node) {
    // if at end of list and node.next.next is null, return
    if(currentNode.value === value && currentNode.next !== null){
      pastNode.next = currentNode.next;
      currentNode = currentNode.next;
    }
    if(currentNode.value === value && currentNode.next === null){
      list.tail = pastNode;
      pastNode.next = null;
    }
    if(currentNode.next === null){
      return;
    } else {
      pastNode = currentNode;
      currentNode = currentNode.next;
    }
    traverse(node.next);
  }
  // kick off function
  traverse(currentNode);
  return list;
}



// """Sorted Insert
//
// Given a sorted stack and an element, insert the element into the correct position of the stack. The stack will have the methods: peek, isEmpty, push, and pop."""

var Stack = ()  => {
  var storage = [];
  var count = 0;
  this.push = (value) => {
    storage.push(value);
    count++;
  };
  this.pop = () => {
    if(count > 0){
      count--;
      return storage.pop();
    }
  };
  this.isEmpty = () => {
    return count === 0;
  };
  this.peek = () => {
    return storage[count - 1];
  }
};

var sortedStack = new Stack();
var tempStack = new Stack();

function sortedInsert(value) {
  function recurse(val) {
    // base case, check if top value is less than or equal to value, if true, push
    if(sortedStack.peek() <= value){
      sortedStack.push(value);
      return;
    } else {
      // pop the top off sorted and push into temp, recursively check down the stack
      tempStack.push(sortedStack.pop());
      recurse(value);
    }
  }
  recurse(value);
  while(!tempStack.isEmpty()){
    sortedStack.push(tempStack.pop());
  };
}


// """Sort Stack
//
// Takes an unsorted stack and sort it. You may only use stacks (& the call stack) as a storage mechanism."""

var Stack = ()  => {
  var storage = [];
  var count = 0;
  this.push = (value) => {
    storage.push(value);
    count++;
  };
  this.pop = () => {
    if(count > 0){
      count--;
      return storage.pop();
    }
  };
  this.isEmpty = () => {
    return count === 0;
  };
  this.peek = () => {
    return storage[count - 1];
  }
};

var unsortedStack = new Stack();

var sortStack = () => {
  var tempStack = new Stack();
  //
}



// 	"""Container With Most Water
//
// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.
// Note: You may not slant the container."""





// """Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node."""
var Tree = function(val) {
  this.value = value;
  this.children = [];
}

var tree = new Tree();

var treeMaxDepth = function(tree) {
  var maxDepth = 0;
  // check depth first, once you hit the end of the branch, check if the depth is greater than max
  function isDeepest(tree, depth) {
    // base case
    if(!tree.children){
      if(depth > maxDepth){
        maxDepth = depth;
        return;
      }
    }
    // recursively check each of the tree's children and increment depth;
    for(var i = 0; i < tree.children.length; i++){
      isDeepest(tree.children[i], depth + 1)
    }
  }
  isDeepest(tree, 0);
  return maxDepth;
}
