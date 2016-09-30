function buyFruit(array) {
  var result = [];
  array.forEach(function(element) {
    for (var i = 0; i < element[1]; i++) {
      result.push(element[0]);
    }
  });
  return result;
}

buyFruit([["apples", 3], ["orange", 1], ["bananas", 2]]);
// result
["apples", "apples", "apples", "orange", "bananas","bananas"]
