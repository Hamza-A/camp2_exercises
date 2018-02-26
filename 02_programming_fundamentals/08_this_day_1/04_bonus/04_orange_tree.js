// See Sparta courses for the exercise summary
const orangeTree = {
  height : 0,
  age : 0,
  oranges : 0,
  alive: false,

  pickAnOrange: function(){
    if (this.oranges >= 1){
      this.oranges -= 1;
      return true;
    } else {
      return false;
    }
  },

  ageOneYear: function(){
    if (this.age <= 100){
      this.age ++;
    }

    if (this.age < 10){
      this.height = this.height + 25;
    } else if (this.age >= 10 && this.age < 20) {
      this.height += 10;
    } else if (this.age >= 20 && this.age < 100){
      this.height = this.height;
    } else if (this.age >= 100){
      this.alive = false;
    }

    if (this.age >= 5 && this.age < 10){
      this.oranges = 10;
    } else if (this.age >= 10 && this.age < 20){
      this.oranges = 20;
    } else if (this.age >= 20 && this.age < 40){
      this.oranges = 5;
    } else {
      this.oranges = 0;
    }
    return this;
  },

  seed: function(){
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
    this.alive = true;
    return this;
  }
};

orangeTree.ageOneYear();
console.log(orangeTree);
module.exports = orangeTree;
