/*jshint esversion:6*/
class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = 'up';
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    let intervalId = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(intervalId);
  }

  update() {
    this.log();
  }

  _passengersEnter() {

  }

  _passengersLeave() {

  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) this.floor++;
    this.log();
  }

  floorDown() {
    if (this.floor > 0) this.floor--;
    this.log();
  }

  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }

}

module.exports = Elevator;
