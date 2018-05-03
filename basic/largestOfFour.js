/*--
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i].
--*/

function largestOfFour(arr) {
  
    var count =0;
    var temp = [];
    arr = arr.map(function(e){
      
      temp[count] = e.sort(function(a,b){
        return b - a;
      })[0];
      
      count++;
    });
    return temp;
  }