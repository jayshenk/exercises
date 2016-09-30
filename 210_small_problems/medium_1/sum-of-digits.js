function sum(number) {
  var digits = number.toString().split('').map(function(char) {
    return Number(char);
  });

  return digits.reduce(function(total, digit) {
    return total + digit;
  });
}

sum(23)          // 5
sum(496)         // 19
sum(123456789)   // 45
