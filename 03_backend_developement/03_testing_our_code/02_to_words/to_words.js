function toWords(sentence) {
  const allWords = sentence.split(/[.?!, \[\]:]+/);

  return allWords.filter(word => word !== "");
}


console.log(toWords("Hello, Wolrd What a day"));

module.exports = toWords;
