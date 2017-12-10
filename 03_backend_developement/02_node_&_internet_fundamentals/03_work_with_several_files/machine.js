const container = require("./container.js");

const machine = {
  fillWithLitersOfCoffee: function(liter){
    container.putLitersOfCoffee(liter);
  },

  expresso: function() {
    return container.consumeLitersOfCoffee(0.08);
  },

  longCoffee: function() {
    return container.consumeLitersOfCoffee(0.15);
  }

};



module.exports = machine;

machine.fillWithLitersOfCoffee(0.5);
console.log(machine.expresso()); // => true
console.log(machine.longCoffee()); // => true
console.log(machine.longCoffee()); // => true
console.log(machine.longCoffee()); // => false
console.log(machine.expresso()); // => true
console.log(machine.expresso()); // => false  
