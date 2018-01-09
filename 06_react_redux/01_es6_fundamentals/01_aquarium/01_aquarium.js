class Aquarium {
  constructor(){
    this.fishes = [];
    this.algaes = 0;
  }
  addFish(newFish){
    return this.fishes.push(newFish);
  }
  addAlgae(){
    return this.algaes ++;
  }
  passTime(){
    tryToEat();
    listFishes();
    displayAlgaes();
  }
}

class Fish {
  constructor(name, sex, eat){
    this.name = name;
    this.sex = sex;
    this.eat = eat;
  }
}

class Algae {
  constructor(number){
    this.number = number;
  }
}

function listFishes(){
  return newAquarium.fishes.map(x => console.log(`${x.name} ${x.sex} ${x.eat}`));
}

function displayAlgaes(){
  return console.log(newAquarium.algaes);
}

function tryToEat(){
  const randomNumber = Math.round(Math.random() * newAquarium.fishes.length);
  for (let i = 0; i < newAquarium.fishes.length; i++){
    if (newAquarium.fishes[i].eat === "vegan" && newAquarium.algaes > 0){
      newAquarium.algaes --;
    } else if (newAquarium.fishes[i].eat === "carnivorous" && newAquarium.fishes.length > 1){
      newAquarium.fishes.splice(randomNumber, 1);
    }
  }
}

const newAquarium = new Aquarium();
newAquarium.addFish(new Fish("Hamza", "M", "vegan"));
newAquarium.addFish(new Fish("Bobby", "M", "carnivorous"));
newAquarium.addFish(new Fish("Nalla", "F", "carnivorous"));
newAquarium.addFish(new Fish("Simone", "F", "vegan"));

for (let i = 0; i < 12; i++){
  newAquarium.addAlgae();
}

for (let i = 0; i < 2; i++){
  newAquarium.passTime();
}

module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
