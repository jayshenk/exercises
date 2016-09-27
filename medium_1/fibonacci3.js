function fibonacci_last(nth) {
  var sequence = [1, 1];

  while (sequence.length < nth) {
    sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
  }

  return Number(sequence[nth - 1].toString().split('').pop());
}

fibonacci_last(15) === 0;
fibonacci_last(20) === 5;
