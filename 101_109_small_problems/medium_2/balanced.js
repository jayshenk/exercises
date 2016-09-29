function isBalanced(string) {
  var openParenthesis = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      openParenthesis++;
    } else if (string[i] === ')') {
      openParenthesis--;
    }

    if (openParenthesis < 0) { return false; }
  }

  return openParenthesis === 0;
}

isBalanced('What (is) this?') === true;
isBalanced('What is) this?') === false;
isBalanced('What (is this?') === false;
isBalanced('((What) (is this))?') === true;
isBalanced('((What)) (is this))?') === false;
isBalanced('Hey!') === true;
isBalanced(')Hey!(') === false;
isBalanced('What ((is))) up(') === false;
