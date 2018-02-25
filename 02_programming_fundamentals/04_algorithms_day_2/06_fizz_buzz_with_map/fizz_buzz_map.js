/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:
   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.

   YOU MUST USE array.map
*/
function checkInteger(integer){
  let newInteger;
  if ((integer % 5 === 0) && (integer % 3 === 0)){
    newInteger = "FizzBuzz";
  } else if (integer % 3 === 0){
    newInteger = "Fizz";
  } else if (integer % 5 === 0){
    newInteger = "Buzz";
  } else {
    newInteger = integer;
  }
  return newInteger;
}

function fizzBuzz(list) {
  return list.map(item => checkInteger(item));
}

console.log(fizzBuzz([1, 2, 3, 4, 5, 6]));


module.exports = fizzBuzz;
