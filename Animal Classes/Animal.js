class Animal {
  constructor(name, weight, avgLS) {
    this.name = name;
    this.weight = weight;
    this.avgLS = avgLS;
  }

  eat() {
    return `${this.name} is eating!`;
  }

  sleep() {
    return `${this.name} is going to sleep!`;
  }

  wakeUp() {
    return `${this.name} is waking up!`;
  }
}

class Gorilla extends Animal {
  constructor(name, weight, avgLS) {
    super(name, weight, avgLS);
  }

  climbTrees() {
    return `${this.name} is climbing trees!`;
  }

  poundChest() {
    return `${this.name} is pounding its chest!`;
  }

  showVigour() {
    return `${super.eat()} ${this.poundChest()}`;
  }

  dailyRoutine() {
    return `${super.wakeUp()} ${this.poundChest()} ${super.eat()} ${super.sleep()}`;
  }
}

class Dog extends Animal {
  constructor(name, weight, avgLS) {
    super(name,weight, avgLS);
  }
  barkatmailMan(){
    return `${this.name} is barking at the Mailman `;
  }

  barkatCar(){
    return `${this.name} is barking at a car`;
  }

  takeaLeak(){
    return `${this.name} is peeing again...`;
  }
  dailyRoutine(){
    return `${super.wakeUp()} ${this.takeaLeak()} ${this.barkatmailMan()} ${this.barkatCar()} ${super.eat()} ${super.sleep()}`;
  }

}

class Eel extends Animal {
  constructor(name, weight, avgLS){
    super(name,weight, avgLS);
  }
  swimAround(){
    return `${this.name} is swimming around`;
  }
  electrocute(){
    return `${this.name} has electrocuted an enemey to dust`;
  }

}

class Musk extends Animal {
  constructor(name,weight, avgLS){
    super(name,weight, avgLS);
  }
  standinfrontofCar(){
    return `The ${this.name} stands completely still, mesmerized by the cars headlights`
  }
  hitByCar(){
    return `The ${this.name} did not move... so the car crashed into ${this.name} and its ${this.weight} concrete hard body`;
  }
  eelOnmusk(){
    return `The ${this.name} team up with Eel and becomes: ElonMusk?`
  }

}

class Hamster extends Animal {
  constructor(name, weight, avgLS){
    super(name,weight, avgLS);
  }
  runInWheel(){
    return `${this.name} is running around in the Hamster-wheel`;
  }
  fillCheeks(){
    return `${this.name} fills its cheeks with food, tripling its head-size!!!`;
  }

}






function display(content) {
  console.log(content);
}

// const gorilla = new Gorilla("George", "160Kg", "Up to 60 years");
// display(gorilla.poundChest());
// display(gorilla.sleep());
// display(gorilla.showVigour());
// display(gorilla.dailyRoutine());

// const doggi = new Dog("Rex", "80kg", "Up to 20 years");
// display(doggi.takeaLeak());
// display(doggi.barkatmailMan());
// display(doggi.barkatCar());
// display(doggi.dailyRoutine());

// const eel = new Eel("Eel","25kg", "Up to 20 years");
// display(eel.wakeUp());
// display(eel.swimAround());
// display(eel.electrocute());

// const musk = new Musk("Musk","2500kg", "unknown lifespan due to insuffient data");
// display(musk.standinfrontofCar());
// display(musk.hitByCar());
// display(musk.eelOnmusk());

const hamster = new Hamster("hammond", "4kg", "Usually up to 7 years or untill stepped on...");
display(hamster.runInWheel());
display(hamster.fillCheeks());

const hamster2 = new Hamster("Lille John", "90g", "Less than 1 year");
display(hamster2.wakeUp());
display(hamster2.runInWheel());
display(hamster2.fillCheeks());
