// See Sparta courses for the exercise summary
const car = {
  speed: 0,
  distance: 0,

  start: function(){
    this.speed = 0;
    this.distance = 0;
    return this;
  },

  changeSpeed: function(newSpeed){
    this.speed = newSpeed;
    return this;
  },

  drive: function(drivenMinutes){
    this.distance = this.distance + ((drivenMinutes/60) * this.speed);
    return this;

  },
  showDistance: function(){

    console.log(this.distance + " Km");
    return this;
  }

};

car.start().changeSpeed(130).drive(42).showDistance();


module.exports = car;
