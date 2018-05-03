/*--
You will be provided with an initial array 
(the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
--*/
function destroyer(arr) {
    
    var args = [].slice.call(arguments);
    for(var i = 1; i < args.length;i++){
      args[0]=  args[0].filter(e=>e != args[i] );
    }
    
    return args[0];
  }