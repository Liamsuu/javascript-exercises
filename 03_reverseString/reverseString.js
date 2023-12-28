const reverseString = function (word) {
  let wordArr = [];
  for (let x = 0; x < word.length; x++) {
    wordArr.push(word.charAt(x));
  }
  wordArr = wordArr.reverse();
  return wordArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
