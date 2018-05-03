/*--
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, 
you should also capitalize connecting words like "the" and "of".
--*/
function titleCase(str) {
    var arr = str.split(" ");
    
    arr = arr.map(function(subStr){
      
      var temp = subStr.split("");
      temp[0] = temp[0].toUpperCase();
      
      for(var i = 1;i<temp.length;i++){
        temp[i] = temp[i].toLowerCase();
      }
       
      return temp.join("");
    });
  
    return arr.join(" ");
  }