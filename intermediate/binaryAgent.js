/*-- 
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
--*/

function binaryAgent(str) {
    var arr = str.split(" ");
    
    // converts binary to a decimal number
    function toDecimal(binary){
      var num = 0;
      binary = binary.split('').reverse();
     
      for(var n = 0 ; n < binary.length ;n++){
        if(binary[n] == 1){
          num+= Math.pow(2,n);
        }
      }
      return num;
    }
    
    //converts decimal ASCII code strings  then joins them
    str =  arr.map(function(binary){
      return String.fromCharCode(toDecimal(binary));
    }).join('');
    
    return str;
  }