// function rockPaperPermutation (roundCount) {
//   var results = [];
//   var rpsArr = ["r", "p", "s"];

//   for(var i = 0; i < rpsArr.length; i++){
// 	if(roundCount === 1){
//       results.push(rpsArr[i])
//     }
//     for(var j = 0; j < rpsArr.length; j++){
// 	  if(roundCount === 2){
//       	results.push(rpsArr[i] + rpsArr[j])
//       }
//       for(var k = 0; k < rpsArr.length; k++){
//       	if(roundCount === 3){
//       		results.push(rpsArr[i] + rpsArr[j] + rpsArr[k])
//       	}
//       }
//     }
//   }
//   return results;
// }

function rockPaperPermutation (roundCount) {
	var results = [];
	var rpsArr = ["r", "p", "s"];
	var roundArr = [];

	var permute = function(rounds){
	  for(var i = 0; i < rpsArr.length; i++){
	  	roundArr.push(rpsArr[i]);
	  	if(rounds > roundCount){
	  		return results;
	  	}
	  	if(rounds === roundCount){
	  		results.push(roundArr.slice());
	  	} else {
	  		permute(rounds + 1);
	  	}
	  	roundArr.pop();
	  }
	}
	permute(1)
	return results.map(function(val){
		return val.join("");
	})
}

rockPaperPermutation(2);


// console.log(rockPaperPermutation(2))


function rockPaperPermutation(roundCount){
	var results = ["r","p","s"];
	if(roundCount === 0){
		return [];
	}
	if(roundCount === 1){
		return results;
	}
	var addPermutations = function(arr){
		var temp = [];
		for(var i = 0; i < arr.length; i++){
			var bucket = arr[i];
			temp = temp.concat([bucket + "r", bucket + "p", bucket + "s"]);
		}
		return temp;
	}
	while(roundCount>1){
		results = addPermutations(results);
		roundCount--;
	}
	return results;
}

console.log(rockPaperPermutation(6));


// latest version

function rockPaperPermutation(roundCount){
	 var rps = ['r', 'p', 's'];
   var results = [];
	 // if round count is zero, return
   if(!roundCount){
     return results;
   }
   function permute(builtString) {
     // base case, if string length is equal to round count, push to results
     if(builtString.length === roundCount){
       results.push(builtString);
     }
     // else, for each of the rps letters, add to built string and recurse
     rps.forEach(letter => permute(builtString + letter));
   }
   // initiate function with empty string
   permute('');
   return results;
}
