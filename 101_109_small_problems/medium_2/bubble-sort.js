function bubbleSort(array) {
  var arrayModified = true;

  while (arrayModified) {
    arrayModified = false;

    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        array.splice(i, 2, array[i + 1], array[i]);
        arrayModified = true;
      }
    }
  }
}

var array = [5, 3];
bubbleSort(array)
array === [3, 5];

array = [6, 2, 7, 1, 4];
bubbleSort(array)
array === [1, 2, 4, 6, 7];

array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array)
array === ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'];
