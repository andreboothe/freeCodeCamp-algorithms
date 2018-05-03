/*--
Return the length of the longest word in the provided sentence.
Your response should be a number.
--*/
function findLongestWord(str) {
    var arr = str.split(" ");
    arr.sort(function(a, b){
      return b.length - a.length;
    });
    return arr[0].length;
  }