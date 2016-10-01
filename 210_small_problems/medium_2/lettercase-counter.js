function letterCaseCount(string) {
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
    lowercase: lowerCaseCount,
    uppercase: upperCaseCount,
    neither: neitherCount,
  };
}

letterCaseCount('abCdef 123') // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef')   // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123')        // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('')           // { lowercase: 0, uppercase: 0, neither: 0 }
