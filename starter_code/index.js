/*jshint esversion:6*/
const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator= new Elevator();
elevator.update();
elevator.floorDown();
elevator.update();
//elevator.start();
//elevator.stop();
elevator.floorUp();
elevator.update();
elevator.floorDown();
elevator.update();
