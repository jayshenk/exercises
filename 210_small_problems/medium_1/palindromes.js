function palindromes(string) {
  return substrings(string).filter(function(str) {
    return str.length > 1 && str === str.split('').reverse('').join('');
  });
}

function substrings(string) {
  var result = [];
  for (var i = 0; i < string.length; i++) {
    result = result.concat(substringsAtStart(string.slice(i)));
  }
  return result;
}

function substringsAtStart(string) {
  var chars = string.split('');
  return chars.map(function(char, index) {
    return chars.slice(0, index + 1).join('');
  });
}

palindromes('abcd');  // []
palindromes('madam'); // ['madam', 'ada']
palindromes('hello-madam-did-madam-goodbye');
// result
[ 'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo' ]

palindromes('knitting cassettes');
// result
[ 'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt' ]
