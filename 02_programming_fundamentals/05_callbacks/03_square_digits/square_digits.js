// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(number) {
  const spliting = number.toString().split("");
  const result = spliting.map(number => Math.pow(number, 2));

  return parseInt(result.join(""));
}


console.log(squareDigits(23));

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
