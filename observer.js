class Subject {
    constructor() {
        this.observers = []
    }

    notify(...args) {
        this.observers.forEach(ob => {
            ob.update(args)
        })
    }

    add(ob) {
        this.observers.push(ob)
    }

    remove(ob) {
        this.observers = this.observers.filter(item !== ob)
    }
}

class Observer {
    constructor() {

    }

    update() {
        
    }
}