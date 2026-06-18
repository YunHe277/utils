function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }

        return function(...args1) {
            return curried.apply(this, [...args, ...args1])
        }
    }
}