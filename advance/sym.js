/*--
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), 
the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, 
but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), 
you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
--*/
function sym(...args) {
  
    function symDiff(diff, set){
      //The union of both sets
      const union = diff.concat(set[0]);
      
      //traverse the union set if one of the sub sets lacks the current val
      //that is an element unique to the other set.
      // A u B - A n B = 
      const reducer = function(accumulator, currentVal){
        if((!diff.includes(currentVal) || 
            !set[0].includes(currentVal) ) && 
            !accumulator.includes(currentVal)){
            accumulator.push(currentVal);
          }
          return accumulator;
      };
      
      //if set only has one element reduce it.
      //else reduce the first element, 
      //call the function once more with the other elements except the first.
      return ((set.length <= 1)? 
              union.reduce(reducer,[]): 
              symDiff(union.reduce(reducer,[]),set.slice(1)));  
    }
    return symDiff(args[0], args.slice(1));
  }