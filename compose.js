function compose() {
    return function (initialValue) {
        return fns.reduceRight((value, fn) => {
            return fn(value);
        }, initialValue);
    };
}