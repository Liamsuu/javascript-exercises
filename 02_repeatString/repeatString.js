const repeatString = function (word, repeats) {
  const wordArr = [];
  if (repeats < 0) {
    return "ERROR";
  }
  for (let x = 0; x < repeats; x++) {
    wordArr.push(word);
  }
  word = wordArr.join("");
  return word;
};

// Do not edit below this line
module.exports = repeatString;
