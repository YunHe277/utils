class Lazyman {
    constructor(name) {
        this.tasks = [];
        this.name = name;
    }

    sleep(time) {
        this.tasks.push(() => {
            setTimeout(() => {
                this.next()
            }, time)
        })
        return this;
    }

    eat(time) {
        this.tasks.push(() => {
            this.next()
        })
        return this;
    }

    sleepFirst() {
        this.tasks.unshift(() => {
            setTimeout(() => {
                this.next()
            }, time)
        })
        return this;
    }

    next() {
        const task = this.tasks.shift();

        if (task) {
            task();
        }
    }
}