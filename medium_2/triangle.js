function triangle(side1, side2, side3) {
  var sidesAsc = [side1, side2, side3].sort(function(a, b) { return a - b });

  if (!isValid(sidesAsc)) {
    return 'invalid';
  } else if (sidesAsc[0] === sidesAsc[2]) {
    return 'equilateral';
  } else if (sidesAsc[0] === sidesAsc[1] || sidesAsc[1] === sidesAsc[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function isValid(sidesAsc) {
  return sidesAsc[0] > 0 && sidesAsc[0] + sidesAsc[1] > sidesAsc[2];
}

triangle(3, 3, 3) === 'equilateral';
triangle(3, 3, 1.5) === 'isosceles';
triangle(3, 4, 5) === 'scalene';
triangle(0, 3, 3) === 'invalid';
triangle(3, 1, 1) === 'invalid';
