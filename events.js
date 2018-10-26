
const EventTracker = function (name) {
    this.on = (eventName, callback, context = this) => {
        this._events.push({[eventName]: callback})
    };

    this.trigger = (eventName, ...args) => {
        if (!this._events) return;
    
        const event = this._events.find((event) => {
            return Object.keys(event) == eventName;
        });
        event[eventName](...args);
    
    };

    this.notify = () => {

    };

    this._events = [];
};

var foo = new EventTracker("foo");
foo.on("party", (something) => console.log("celebrate " + something))
foo.trigger("party", "fiesta")