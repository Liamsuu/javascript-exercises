const palindromes = function (word) {
  // removes difficult characters from original sentence
  word = word.split("");
  let wordWithoutPunc = [];
  for (const item of word) {
    if (item !== " " && item !== "!" && item !== "." && item !== ",") {
      wordWithoutPunc.push(item.toLowerCase());
    }
  }
  let reversedWord = wordWithoutPunc.slice().reverse();
  reversedWord = reversedWord.toString();
  wordWithoutPunc = wordWithoutPunc.toString();

  if (wordWithoutPunc == reversedWord) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
