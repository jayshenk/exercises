function triangle(angle1, angle2, angle3) {

  if (!isValid(angle1, angle2, angle3)) {
    return 'invalid';
  } else if (Math.max(angle1, angle2, angle3) > 90) {
    return 'obtuse';
  } else if (Math.max(angle1, angle2, angle3) === 90) {
    return 'right';
  } else {
    return 'acute';
  }
}

function isValid(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3 === 180 &&
         Math.min(angle1, angle2, angle3) > 0;
}

triangle(60, 70, 50) === 'acute';
triangle(30, 90, 60) === 'right';
triangle(120, 50, 10) === 'obtuse';
triangle(0, 90, 90) === 'invalid';
triangle(50, 50, 50) === 'invalid';
