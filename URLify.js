// write a method to replace all spaces in a string with ‘%20’.
// You may assume the string has sufficient space at the end to hold the additional characters, and that you are given the true length of the string.
//
// Eg:
// Input: ‘Mr John Smith      ‘, 13
// Output: ‘Mr%20John%20Smith’

// function urlify(string){
//   var space = '%20';
//   return string.split(' ').join('%20');
// }

function urlify(string){
  var space = '%20';
  for(var i = 0; i < string.length; i++){
    if(string[i] === ' '){
      string = string.slice(0,i) + space + string.slice(i + 1, string.length - 3)
    }
  }
  return string;
}

urlify('Mr John Smith      ');
