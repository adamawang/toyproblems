const arrayception = (array) => {
  let deepestArr = 0;
  (function oneDeeper(arr, depth) {
    for(var i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        oneDeeper(arr[i], depth + 1);
      } else {
        deepestArr = depth > deepestArr ? depth : deepestArr;
      }
    }
  }(array, 1))
  return deepestArr;
}
