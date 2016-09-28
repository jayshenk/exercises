function featured(number) {
  if (number >= 9999999999) {
    return 'There is no possible number that fulfills those requirements';
  }

  for (var i = number + 1; i <= 9999999999; i++) {
    if (i % 2 === 1 && i % 7 === 0 && hasUniqueDigits(i)) { return i; }
  }
}

function hasUniqueDigits(number) {
  var numberString = number.toString();
  var char;

  for (var i = 0; i < numberString.length; i++) {
    char = numberString[i];
    if (i !== numberString.lastIndexOf(char)) { return false; }
  }

  return true;
}

featured(12) === 21;
featured(20) === 21;
featured(21) === 35;
featured(997) === 1029;
featured(1029) === 1043;
featured(999999) === 1023547;
featured(999999987) === 1023456987;

featured(9999999999) // There is no possible number that fulfills those requirements
