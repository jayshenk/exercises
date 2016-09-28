function friday13th(year) {
  var count = 0;
  var date;

  for (var i = 1; i <= 12; i++) {
    date = new Date(year, i, 13);
    if (date.getDay() === 5) { count++; }
  }

  return count;
}

friday13th(2015) === 3;
friday13th(1986) === 1;
