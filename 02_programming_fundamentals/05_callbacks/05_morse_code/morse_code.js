// Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a decoded human-readable string.
//
// For example:
//
// decodeMorse(".... . -.--   .--- ..- -.. .") === "HEY JUDE";

// Here is the array of each letter in morse code
const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9"
};

function decodeMorse(morseCode) {
  let words= morseCode.split("  ");
  return console.log(words.map(word => manageWord(word)).join(" "));
}

function manageWord(word){
  return word.split(" ");
}
// //
// function getLetters(morseToWords){
//   let letters = morseToWords.split(" ");
//   getDecodedMorse(letters);
//   return console.log(letters);
// }
//
// function getDecodedMorse(letters){
//   let decodedLetters= letters.map(item => MORSE_CODE[item]).join("");
//   return console.log(decodedLetters);
// }

decodeMorse(".... . -.--   .--- ..- -.. .");

// Correction de Damien
// function decodeMorse(morse) {
//   const morseSplittedInWordsinAnArray = morse.split("   ");
//
//   return console.log(morseSplittedInWordsinAnArray
//     .map((word) => manageWord(word))
//     .join(" "));
// }
//
// function manageWord (text) {
//
//   const wordInMorseToArray = text.split(" ");
//   return wordInMorseToArray
//     .map((letter) => getLetterFromKey(letter))
//     .join("");
// }
//
//
// function getLetterFromKey(text) {
//   return MORSE_CODE[text];
// }



// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = decodeMorse;
