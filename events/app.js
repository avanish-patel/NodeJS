var events = require('events');

var eventEmitter = new events.EventEmitter();

// create an event handler
var myEventHandler = function(){

    console.log("I hear a scream");
}

// assign the event hadler to an event
eventEmitter.on("scream", myEventHandler);

// emit the "scream" event
eventEmitter.emit("scream");