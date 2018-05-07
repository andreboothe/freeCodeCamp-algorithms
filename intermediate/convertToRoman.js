/*-- 
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
--*/

function convertToRoman(num) {
     
     var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
     var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
     
       var romanized = '';
   
     for (var index = 0; index < decimalValue.length; index++) {
       while (decimalValue[index] <= num) {
         romanized += romanNumeral[index];
         num -= decimalValue[index];
       }
     }
    return romanized;
   }