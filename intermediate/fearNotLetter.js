/*-- 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
--*/

function fearNotLetter(str) {
    var len = str.length;
    for(var i = 1; i < len; i++){
      if(str.charCodeAt(i-1) != str.charCodeAt(i) - 1){
   
          return String.fromCharCode(str.charCodeAt(i) - 1) ;
      }
    }
    return undefined;
  }