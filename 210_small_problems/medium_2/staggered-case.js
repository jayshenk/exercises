function staggeredCase(string) {
  return string.toLowerCase().split('').map(function(char, index) {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }).join('');
}

staggeredCase('I Love Launch School!')     // 'I LoVe lAuNcH ScHoOl!'
staggeredCase('ALL_CAPS')                  // 'AlL_CaPs'
staggeredCase('ignore 77 the 444 numbers') // 'IgNoRe 77 ThE 444 NuMbErS'
