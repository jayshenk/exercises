function diamond(n) {
  var base = '*'.repeat(n);
  var top = createTop(n);
  var bottom = top.slice().reverse();
  var result = top.concat(base).concat(bottom).join('\n');

  console.log(result);
}

var createTop = function(n) {
  var rows = [];
  var content;
  var padding;

  for (var i = 1; i < n; i += 2) {
    content = '*'.repeat(i);
    padding = ' '.repeat((n - content.length) / 2);
    rows.push(padding + content + padding);
  }

  return rows;
};
