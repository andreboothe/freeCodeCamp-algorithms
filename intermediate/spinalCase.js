/*--
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
--*/

function spinalCase(str) {
    var caps = /[A-Z][a-z]/g;
    var space = /\s+/g;
    var u_score = /_+/g;
    
    str = str.replace(space, "-");
    function upperToHyphenLower(match, offset, string) {
      return (offset > 0 ? '-' : '') + match.toLowerCase();
    }
    
    str = str.replace(caps, upperToHyphenLower);
    str = str.replace(u_score, "");
    str = str.replace(/--/g, "-");
    return str;
    
  }