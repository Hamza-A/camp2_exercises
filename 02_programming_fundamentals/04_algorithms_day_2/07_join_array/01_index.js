// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"
function joinArray(array, separator){
  return array.reduce(function (accumulator, currentValue){
    return accumulator + separator + currentValue;
  });
}

console.log(joinArray(["zero", "one", "two"], "-"));

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;
