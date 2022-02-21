// Complete the numberOfCharactersEscaped function below.
function numberOfCharactersEscaped(expression) {
  const splitOnPound = expression.split('#');
  if (splitOnPound.length < 3) return 0; // means expression has less than 2 '#'
  let escapeCount = 0;
  // only care about elements with an odd index -- they represent the characters in between two '#'
  for (i = 1; i < splitOnPound.length; i+=2) {
    const ele = splitOnPound[i];
    for (j = 0; j < ele.length; j++) {
      // iterates through each character in the element and increments `escapeCount` if all three are true:
      // current character is '!', next character exists, next charcter is not '!'
      if (ele[j] == '!' && ele[j + 1] && ele[j + 1] != '!') {
        escapeCount++;
      }
    }
  }
  return escapeCount;
}

// https://leetcode.com/discuss/interview-question/428240/Audible-or-OA-2019-or-Number-of-characters-escaped
