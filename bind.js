Function.prototype.bind = function(context, ...args) {
    const fn = this;
    function boundFn(...args1) {
        return fn.apply(context, [...args, ...args1]);
    }
    boundFn.prototype = Object.create(fn.prototype);
    return boundFn;
}