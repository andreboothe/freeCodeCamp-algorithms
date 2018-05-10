/*--
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; 
otherwise return false.
--*/
function telephoneCheck(str) {
 
    var num_space = '\[1-9\]\\d{2}(\\s|\)\\d{3}(\\s|\)\\d{4}'; //999 999 9999 | 9999999999
    
    var num_hyphen = '\[1-9\]\\d{2}\\-\\d{3}\\-\\d{4}';  //999-999-9999
    
    var num_brace = '\\(\[1-9\]\\d{2}\\)(\\s|-|\)\\d{3}\\-\\d{4}'; //(999)999-9999 | (999) 999-9999
      
    var num_one = '\(1\\s|1|\)'; //1 |1| 
    
    var reg_ex = new RegExp('\^'+ num_one +
                            '(' +
                            '|' +num_space +
                            '|' +num_hyphen +
                            '|' +num_brace +
                            '|)\$', 'gmi');
    
    return reg_ex.test(str);
  }
  
  