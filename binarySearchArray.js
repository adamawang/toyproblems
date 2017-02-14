function binarySearchArray(array, target) {
  // first copy and sort array
  const arr = array.slice().sort((a,b) => a - b);
  let low = 0, high = arr.length - 1;
  while(low <= high){
    // mid number must take in high and low, it will change every iteration
    let mid = Math.floor((high - low) / 2) + low;
    let midVal = arr[mid];
    // check if mid value is equal to target
    if(midVal === target) {
      return mid;
    }
    // if low is equal to high, number was not found. return -1;
    if(low === high) {
      return -1;
    }
    if(midVal < target) {
      low = mid + 1;
    }
    if(midVal > target) {
      high = mid - 1;
    }
  }
  return -1;
}
