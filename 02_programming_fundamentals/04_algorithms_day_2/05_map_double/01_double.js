// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

// Your code here...
function double(listOfNumber){
  let newList = "";
  for (let i = 0; i < listOfNumber.length; i++){
    newList = listOfNumber[i] * 2;
  }

  return newList;
}


double([1, 2, 3, 4]);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
