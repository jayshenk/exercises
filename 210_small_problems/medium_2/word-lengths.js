function wordLengths(words) {
  if (words.length === 0) { return []; }

  return words.split(' ').map(function(word) {
    return word + ' ' + word.length;
  });
}

wordLengths('cow sheep chicken')
// result
['cow 3', 'sheep 5', 'chicken 7']

wordLengths('baseball hot dogs and apple pie')
// result
['baseball 8', 'hot 3', 'dogs 4', 'and 3', 'apple 5', 'pie 3']

wordLengths('It ain\'t easy, is it?')
// result
['It 2', 'ain\'t 5', 'easy, 5', 'is 2', 'it? 3']

wordLengths('Supercalifragilisticexpialidocious')
// result
['Supercalifragilisticexpialidocious 34']

wordLengths('')
// result
// []
