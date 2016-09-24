/*


*/

function wordToDigit(sentence) {
  var numbersDigits = { zero: '0', one: '1', two: '2', three: '3', four: '4',
                        five: '5', six: '6', seven: '7', eight: '8', nine: '9'};
  var numberWordsRegex = /\bzero|one|two|three|four|five|six|seven|eight|nine\b/ig
  var numberWords = sentence.match(numberWordsRegex);
  var digits = numberWords.map(function(word) {
    return numbersDigits[word.toLowerCase()];
  });

  return sentence.replace(numberWords.join(' '), digits.join(' '));
}

wordToDigit('zero one');