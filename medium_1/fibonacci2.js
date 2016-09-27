function fibonacci(nth) {
  var sequence = [1, 1];

  while (sequence.length < nth) {
    sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
  }

  return sequence[nth - 1];
}

fibonacci(1) === 1
fibonacci(2) === 1
fibonacci(3) === 2
fibonacci(4) === 3
fibonacci(5) === 5
fibonacci(12) === 144
fibonacci(20) === 6765
