/*

split string into an array of chars
map the array of chars into
  array.slice(0, index + 1).join('')

*/

function substringsAtStart(string) {
  var chars = string.split('');
  return chars.map(function(char, index) {
    return chars.slice(0, index + 1).join('');
  });
}

substringsAtStart('abc')   // ['a', 'ab', 'abc']
substringsAtStart('a')     // ['a']
substringsAtStart('xyzzy') // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']
