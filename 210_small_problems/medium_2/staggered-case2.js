function staggeredCase(string) {
  var result = '';
  var isUppercase = true;
  
  string.split('').forEach(function(char) {
    if (char.match(/[a-z]/i)) {
      if (isUppercase) {
        result += char.toUpperCase();
        isUppercase = false;
      } else {
        result += char.toLowerCase();
        isUppercase = true;
      }
    } else {
      result += char;
    }
  });

  return result;
}

staggeredCase('I Love Launch School!')     // 'I lOvE lAuNcH sChOoL!'
staggeredCase('ALL CAPS')                  // 'AlL cApS'
staggeredCase('ignore 77 the 444 numbers') // 'IgNoRe 77 ThE 444 nUmBeRs'
