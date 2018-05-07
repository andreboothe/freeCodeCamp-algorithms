/*--
 Flatten a nested array. You must account for varying levels of nesting.
 --*/
function steamrollArray(arr) {
    
    var result = [];
      
    if(arr.length > 0){ 
      if(!Array.isArray(arr[0])){
        result = result.concat(arr[0]);
        result = result.concat(steamrollArray(arr.slice(1)));     
      }
      else{
        result = result.concat(steamrollArray(arr[0]));
        result = result.concat(steamrollArray(arr.slice(1)));
      }
    }
    return result;
  }