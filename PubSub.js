class PubSub {
    constructor() {
        this.events = {};
    }

    publish(name, ...args) {
        if (!this.events[name]) {
            return;
        }
        this.events[name].forEach(fn => fn(args))
    }

    subscribe(name, cb) {
        if (!this.events[name]) {
            this.events[name] = [];
        }
        this.events[name].push(cb);
    }

    unsubscribe(name, cb) {
        if (!this.events[name]) {
            return;
        }
        this.events[name] = this.events[name].filter(item => item !== cb)
    }
}