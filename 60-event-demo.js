var events = require('events')
var eventEmitter = new events.EventEmitter()

// Event Handler
var myEventHandler = function () {
    console.log("I have successfully handled the event")
}

// Associate myevent1 with myEventHandler function
eventEmitter.on("myevent1", myEventHandler)

// Fire our event
eventEmitter.emit("myevent1")