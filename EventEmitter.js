class EventEmitter {
    constructor() {
        this.events = new Map()
    }

    on(eventName, callbaclk) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, [])
        }
        this.events.get(eventName).push(callbaclk)
    }

    off(eventName, callback) {
        if (!this.events.has(eventName)) {
            return;
        }
        const callbacks = this.events.get(eventName)
        const nextCallbacks = callbacks.filter(fn => fn !== callback);
        this.events.set(eventName, this.nextCallbacks)
    }

    emit(eventName, ...args) {
        if (!this.events.has(eventName)) {
            return;
        }
        const callbacks = this.events.get(eventName)
        callbacks.forEach(fn => fn(...args))
    }

    once(eventName, callback) {
        if (!this.events.has(eventName)) {
            return;
        }
        const wrapper = (...args) => {
            callback(...args);
            this.off(eventName, wrapper);
        };
        this.on(eventName, wrapper);
    }
}