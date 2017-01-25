// One Away: three types of edits you can perform on strings.
// Insert a character
// Remove a character
// Replace a character
// Given two strings, write a function to check if they are one edit (or zero edits) away.
//
// e.g.:
// pale, pale => true
// pales, pale => true
// pale, bale => true
// pale, bake => false

function oneAway(word, alteredWord) {
  // can iteratate through the altered word and check to see if those letters exist in the original word
  // count the number of falses, if more than one false, then its more than one edit away.
  var falseCount = 0;
  if(word === alteredWord){
    return true;
  }
  var longerWord;
  var otherWord;
  if(word.length >= alteredWord.length){
    longerWord = word;
    otherWord = alteredWord;
  } else {
    longerWord = alteredWord;
    otherWord = word;
  }
  if(longerWord.length - otherWord.length > 1){
    return false;
  }
  for(var i = 0; i < longerWord.length; i++){
    if(otherWord.indexOf(longerWord[i]) === -1){
      falseCount++;
    }
  }
  return falseCount <= 1;
}

oneAway('pabe', 'pale');
