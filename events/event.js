var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("greet",function(name){
    console.log("Welcome, "+name);
})

eventEmitter.emit("greet","Avanish");