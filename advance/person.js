/*--
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
--*/

let Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let nameArr = firstAndLast.split(" ");
  
    this.getFullName = function() {
      return nameArr.join(" ");
    };
    this.getFirstName = function() {
      return nameArr[0];
    };
   this.getLastName = function() {
      return nameArr[1];
    };
    this.setFirstName = function(first) {
      nameArr = [first, nameArr[1]];
      
    };
    this.setLastName = function(last) {
     nameArr = [nameArr[0], last];
      
    };
  
    this.setFullName = function(firstAndLast) {
      nameArr = firstAndLast.split(" ");
      
    };
  
};