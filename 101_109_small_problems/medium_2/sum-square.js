function sumSquareDifference(number) {
  var integers = [];
  for (var i = 1; i <= number; i++) {
    integers.push(i);
  }

  return sumSquare(integers) - squareSum(integers);
}

function sumSquare(array) {
  var sum = array.reduce(function(total, number) {
    return total + number;
  });
  return Math.pow(sum, 2);
}

function squareSum(array) {
  return array.reduce(function(total, number) {
      return total + Math.pow(number, 2);
  });
}

sumSquareDifference(3) === 22;
sumSquareDifference(10) === 2640;
sumSquareDifference(1) === 0;
sumSquareDifference(100) === 25164150;
