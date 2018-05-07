/*--
The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, 
and all the arrays are grouped into one encapsulating array.
--*/
function pairElement(str) {
  
    var arr = str.split('');
    var result = [];
    arr.forEach(function(protien){
      switch(protien){
        case "A":
          result.push([protien,'T']);
          break;
        case "T":
          result.push([protien,'A']);
          break;
        case "C":
          result.push([protien,'G']);
          break;
        case "G":
          result.push([protien,'C']);
          break;
      }
    });
    return result;
  }