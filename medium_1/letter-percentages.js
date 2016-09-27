function letterPercentages(string) {
  var lowerCaseCount = 0;
  var upperCaseCount = 0;
  var neitherCount = 0;
  var charCode;

  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      upperCaseCount++;
    } else if (charCode >= 97 && charCode <= 122) {
      lowerCaseCount++;
    } else {
      neitherCount++;
    }
  }

  return {
    lowercase: Math.round((lowerCaseCount / string.length) * 1000) / 10,
    uppercase: Math.round((upperCaseCount / string.length) * 1000) / 10,
    neither: Math.round((neitherCount / string.length) * 1000) / 10,
  };
}
