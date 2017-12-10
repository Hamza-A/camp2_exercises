let container= 0;

function putLitersOfCoffee(numberOfLiters){
  container += numberOfLiters;
  return container;
}


function consumeLitersOfCoffee(numberOfLiters){
  if (container >= numberOfLiters){
    container -= numberOfLiters;
    return true;
  } else {
    return false;
  }
}


module.exports = {
  container: container,
  putLitersOfCoffee: putLitersOfCoffee,
  consumeLitersOfCoffee: consumeLitersOfCoffee
};
