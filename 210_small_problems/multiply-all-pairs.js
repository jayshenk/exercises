/*

iterate through array1
  for each value in array 2, multiply it by the value in array 1 and push the result
  to the result array

sort the array in ascending order and return it

*/

function multiplyAllPairs(array1, array2) {
  var result = [];

  array1.forEach(function(number) {
    array2.forEach(function(num) {
      result.push(number * num);
    });
  });

  return result.sort(function(num1, num2) {
    return num1 - num2;
  });
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]) // [2, 4, 4, 6, 8, 8, 12, 16]
