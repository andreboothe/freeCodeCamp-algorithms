/*--
Given an array arr, 
find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, 
return the smallest sum of indices. Once an element has been used, 
it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. 
The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
--*/

function pairwise(arr, arg) {
    let indexPairs = [];
   
    //first for loop tracks current position in array,
    //second searches for a matching pair for that given index.
    //we push the pairs to index pairs if and only if they sum to give arg,
    //and they have not been used before in a matching pair.
    for(let i = 0; i < arr.length - 1; i++){
      
      for(let j = i + 1; j < arr.length  ; j++){
        if((arr[i] + arr[j] == arg) &&
          indexPairs.indexOf(i) < 0 && 
          indexPairs.indexOf(j) < 0){
          
          indexPairs.push(i,j);
          
        }
      }
    }
    
    return indexPairs.reduce((acc, c_val) => acc + c_val,0);
  }