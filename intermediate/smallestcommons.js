/*--
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 
that is evenly divisible by all numbers between 1 and 3.
--*/

function smallestCommons(arr) {
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    var lcm_not_found = true;
    var seq = [];
  
    
    for(var i = min; i <= max; i++){
      seq.push(i);
    }
    
    var multiple = min;
    var multiplier = 1;
    
    loop1:
    while(lcm_not_found){
    
      loop2:
      for(var j = 0; j < seq.length; j++){
        if(multiple % seq[j] != 0){
          multiplier++;
          multiple = min * multiplier;
          
          break loop2;
        }
        else if(j == seq.length - 1){
          lcm_not_found = false;
          break loop1;
        }
        
      }
      
    }
    
    return multiple;
  }