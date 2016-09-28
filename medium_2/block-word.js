function isBlockWord(string) {
  var blocks = { BO: false, XK: false, DQ: false, CP: false, NA: false,
                 GT: false, RE: false, FS: false, JW: false, HU: false,
                 VI: false, LY: false, ZM: false };
  var block;
  var word = string.toUpperCase();

  for (var i = 0; i < word.length; i++) {
    block = Object.keys(blocks).find(function(blck) {
      return blck.indexOf(word[i]) >= 0;
    });

    if (blocks[block]) {
      return false;
    } else {
      blocks[block] = true;
    }
  }

  return true;
}

isBlockWord('BATCH') === true;
isBlockWord('BUTCH') === false;
isBlockWord('jest') === true;
