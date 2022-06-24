var events = require('events');
/*
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emitted');    */

var util = require('util');

var Person =function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter)

var Rajeev = new Person('Rajeev');
var Akash = new Person('Akash');
var Sunil = new Person('Sunil');
var People = [Rajeev, Akash, Sunil];

People.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' +mssg);
    });
});

Rajeev.emit('speak', 'hey dudes');