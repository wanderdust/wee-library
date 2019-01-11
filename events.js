
function EventTracker (name) {
    this.on = (eventName, callback) => {
        this._events.push({[eventName]: callback})
    };

    this.trigger = (eventName, ...args) => {
        if (!this._events) return;
    
        const event = this._events.find((event) => {
            return Object.keys(event) == eventName;
        });
        event[eventName](...args);
    };
    
    this._events = [];
    return this;
};

// Example
const newEventTracker = new EventTracker("foo");
// Add an event
newEventTracker.on("party", (something) => console.log("celebrate " + something));
// Trigger an event
newEventTracker.trigger("party", "fiesta");