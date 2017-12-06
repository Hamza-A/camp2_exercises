
let container = 0;


function putLitersOfCoffee(numberOfLiters){
  return container + numberOfLiters;
}

function consumeLitersOfCoffee(numberOfLiters){
  return container - numberOfLiters;
}

module.exports = {
  putLitersOfCoffee: putLitersOfCoffee,
  consumeLitersOfCoffee: consumeLitersOfCoffee
};
