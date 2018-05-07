/*-- 
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.
--*/

function diffArray(arr1, arr2) {
    var newArr = [];
    
    var one = arr1.filter(e => arr2.indexOf(e) < 0);
    var two= arr2.filter( e => arr1.indexOf(e) < 0);
    newArr = one.concat(two);
    return newArr;
  }