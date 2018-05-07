/*--
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
--*/
function translatePigLatin(str) {
    var vowels = ['a','e','i','o','u'];
    var arr = str.split('');
    var consonant_start = vowels.indexOf(arr[0]) < 0;
    
    if(consonant_start){
      var transformations = 0;
      do{
        var temp = arr.shift();
       
        arr.push(temp);
        consonant_start = vowels.indexOf(arr[0]) < 0;
        
        //prevents forever loop in case of word not having vowels
        transformations++;
        if(transformations> arr.length -2){
          return "unable to change to pig latin";
        }
      }while(consonant_start);
      
      str = arr.join('') +'ay';
    }
    else{
      str = arr.join('') +'way';
    }
    return str;
  }