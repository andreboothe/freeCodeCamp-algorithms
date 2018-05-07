/*--
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one 
and having only two divisors, one and itself. 
For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
--*/

function sumPrimes(num) {
    var result = 0;
    function isPrime(n){
      
     
      for(var i = 2; i < n; i++){
        if(n % i == 0){
          return false;
        }
      }
      
      return true;
    }
    
    for(var j = 2; j <= num ; j++){
      if(isPrime(j)){
        result+=j;
      }
    }
    
    return result;
  }