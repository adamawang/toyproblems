// solve in linear time

function nthFib(n) {
  if(n < 1){
    return 0;
  }
  let prev = 0, curr = 1, temp;
  for(var i = 1; i < n; i++){
    temp = curr;
    curr += prev;
    prev = temp;
  }
  return curr;
}


// with recursion

function nthFibRecur(n) {
  // base case
  if(n <= 1){
    return 1;
  }
  return nthFibRecur(n - 2) + nthFibRecur(n - 1);
}
