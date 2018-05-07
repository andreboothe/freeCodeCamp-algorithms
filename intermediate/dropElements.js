/*-- 
Drop the elements of an array (first argument), 
starting from the front, until the predicate (second argument) returns true.

The second argument, func, 
is a function you'll use to test the first elements of the array 
to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.
--*/
function dropElements(arr, func) {
    var temp = arr.filter(func);
    
    if(temp.length > 0){
      return arr.slice(arr.indexOf(temp[0]));
    }else{return [];}
    
  }