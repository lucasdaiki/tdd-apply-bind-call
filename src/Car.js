class Car {
  turnOn(){
    this.turnedOn = true;
  }

  setName(name){
    this.name = name;
  }

  print(){
    return `{this.name}`;
  }
}

module.exports = Car;