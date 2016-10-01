function swapcase(string) {
  return string.split('').map(function(char) {
    if (char.match(/[A-Z]/)) {
      return char.toLowerCase();
    } else if (char.match(/[a-z]/)) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }).join('');
}

swapcase('CamelCase')         // 'cAMELcASE'
swapcase('Tonight on XYZ-TV') // 'tONIGHT ON xyz-tv'
