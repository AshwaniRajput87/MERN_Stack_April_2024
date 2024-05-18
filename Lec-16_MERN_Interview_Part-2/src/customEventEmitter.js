/**
  EventEmitter class: In nodeJS, an EventEmitter class is a special kind of a buitin class that allows the objects to communicate with each by emitting an event and listening to them.

  Think it as a system of sending and recieving the mesaages.

  Emitting events: an object of EventEmitter classs is going to be created that can send the events. These events are identified by the name('click', data, error, message, create_grp)

  Listening the events: you have to listen the events.

  How to create the custom Events?
 */

 const EventEmitter =  require('events');

 const myEventEmitter = new EventEmitter();



 myEventEmitter.on('myEvent', (...args)=>{

  console.log('There are new args', args);

 });


myEventEmitter.emit('myEvent');

myEventEmitter.emit('myEvent', 1,2);

myEventEmitter.emit('myEvent', [1,2,3]);


