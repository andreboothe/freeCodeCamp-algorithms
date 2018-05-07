/*--
Given a positive integer num, 
return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 
because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
--*/
function sumFibs(num) {
    var i = 1;
    var j = 0;
    var result = 0;
    var fib_arr = [1,1];
    var next_fib = fib_arr[i] + fib_arr[j];
    
    
    while(next_fib <= num){
      fib_arr.push(next_fib);
      j++;
      i++;
      next_fib = fib_arr[i] + fib_arr[j];
    }
    fib_arr.map(function(fib_num){
      if(fib_num % 2 == 1){
        result +=fib_num;
      }
    });  
      
    return result;
  }