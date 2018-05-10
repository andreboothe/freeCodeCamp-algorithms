/*--
Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
--*/

function permAlone(str) {
    //returns all possible permuations of a string
    function permute(str) {
  
      var ret = [];
  
      if (str.length == 1) return [str];
      if (str.length == 2) return [str, str[1]+str[0]];
  
      
      str.split('').forEach(function (chr, idx, arr) {
        var sub = [].concat(arr);
        sub.splice(idx, 1);
        permute(sub.join('')).forEach(function (perm) {
          ret.push(chr+perm);
        });
      });
  
      return ret;
      }
    
    
    //returns true if a string reapeats a character.
    function repetition(permu){
      let list = permu.split('');
      for(var i = 0; i < list.length - 1; i++){
        if(list[i] === list[i+1]){
          return true;
        }
      }
      return false;
    }
    
    //returns count of non repetitive permutations
    return permute(str).reduce(function(acc, cVal){
      if(!repetition(cVal)){
        acc++;
      }
      return acc;
    } ,0);
  }