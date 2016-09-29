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

substrings('abcde');
// result
[ 'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e' ]
