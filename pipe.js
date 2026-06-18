function pipe() {
    return function (initialValue) {
        return fns.reduce((value, fn) => {
            return fn(value);
        }, initialValue);
    };
}