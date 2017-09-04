/*jshint esversion:6*/
const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator = new Elevator();
const person1 = new Person();
const person2 = new Person();

elevator.start();
//elevator.stop();

elevator.update();
/*tests up-down */
elevator.floorDown(); //ok no baja de 0
for (let i=0;i<12;i++){elevator.floorUp();} //ok - sube y no pasa de 10
elevator.floorDown(); //ok baja
