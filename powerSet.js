// Power Set
// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.
//
// Make sure your code does the following:
//
// All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.
// Examples
// Input	Output
// string:
// "a"	[ "", "a" ]
// string:
// "ab"	[ "", "a", "ab", "b" ]
// string:
// "horse"	[ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]
// string:
// "obama"	[ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]

function powerSet(string) {
  var results = [''];
  // split the string, sort it, and remove duplicates
  var strArr = string.split('').sort().filter((letter, i, word) => {
    // use the array itself and filter out duplicate letters
    return i === word.indexOf(letter);
  });
  // recursively call a function to build your strings
  function buildSet(strSet, letters) {
    for(var i = 0; i < letters.length; i++){
      // starts off as empty string, push first letter and recursively call on string with first letter sliced off
      results.push(strSet + letters[i]);
      buildSet(strSet + letters[i], letters.slice(i + 1));
    }
  }
  // invoke function
  buildSet('', strArr);
  return results;
}
