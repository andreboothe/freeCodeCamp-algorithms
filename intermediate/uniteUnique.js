/*--
Write a function that takes two or more arrays 
and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, 
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, 
but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
--*/

function uniteUnique(arr) {
    var result = [];
    var param = [];
    
    for(var i = 0;i <  arguments.length; i++){
      param.push(arguments[i]);
    }
    
    param.map(function(arg){
      arg.map(function(e){
        if(result.indexOf(e) < 0){
          result.push(e);
        }
      });
    });
    return result;
  }