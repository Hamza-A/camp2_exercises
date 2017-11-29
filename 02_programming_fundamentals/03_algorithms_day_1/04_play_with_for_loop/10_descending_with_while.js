// ## Decreasing Iteration on arrays using while
//
// -  Using `length`, write on `stdout` each values of the `litteralDigits` array, descending.

const litteralDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

let i= litteralDigits.length;
while (i >= 0) {
  i--;
  console.log(litteralDigits[i]);
}
