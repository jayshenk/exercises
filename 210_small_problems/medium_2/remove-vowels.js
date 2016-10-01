function removeVowels(array) {
  return array.map(function(string) {
    return string.replace(/[aeiou]/ig, '');
  });
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);             // ['bcdfghjklmnpqrstvwyxz']
removeVowels(['green', 'YELLOW', 'black', 'white']);      // ['grn', 'YLLW', 'blck', 'wht']
removeVowels(['ABC', 'AEIOU', 'XYZ']);                    // ['BC', '', 'XYZ']
