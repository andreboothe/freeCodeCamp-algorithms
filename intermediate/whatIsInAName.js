/*-- 
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching property and value pairs (second argument). 
Each property and value pair of the source object has to be present in the object 
from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument), 
because it contains the property and its value, t
hat was passed on as the second argument.
--*/

function whatIsInAName(collection, source) {
    var arr = [];
    var keys = Object.keys(source);
    loop1:
    for(var i = 0; i < collection.length; i++){
      loop2:
      for(var j = 0; j < keys.length; j++){
        var hasProp = collection[i].hasOwnProperty(keys[j]);
        
        if(hasProp){
          var eq = collection[i][keys[j]] == source[keys[j]];
          var at_final_key = keys[j] == keys[keys.length -1];
          
          if(eq && at_final_key){
            arr.push(collection[i]);
          }
          
        }else {  break loop2;}
      }
    }
    return arr;
  }