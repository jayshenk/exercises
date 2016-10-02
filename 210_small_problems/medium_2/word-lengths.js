/*

split array into words
map
  word + ' ' + word.length

*/

function wordLengths(words) {
  words.split(' ').map(function(word) {
    return word + ' ' + word.length;
  });
}

