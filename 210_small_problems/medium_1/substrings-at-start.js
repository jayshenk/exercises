function substringsAtStart(string) {
  var chars = string.split('');
  return chars.map(function(char, index) {
    return chars.slice(0, index + 1).join('');
  });
}

substringsAtStart('abc')   // ['a', 'ab', 'abc']
substringsAtStart('a')     // ['a']
substringsAtStart('xyzzy') // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']
