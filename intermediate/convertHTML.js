/*--
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
--*/

function convertHTML(str) {
    str = str.replace(/&/gi, '&amp;');
    str = str.replace(/>/gi, '&gt;');
    str = str.replace(/</gi, '&lt;');
    str = str.replace(/'/gi, '&apos;');
    str = str.replace(/"/gi, '&quot;');
    return str;
    
  }