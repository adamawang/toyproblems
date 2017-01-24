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



function rockPaperPermutation(roundCount){
	//rouds is rounds or three (set a default)
	//initialize an array called outcomes
	//initialize playedsofar array
	//initialize an array with "r", "p", "s";
	//define inner function: combos
	
}