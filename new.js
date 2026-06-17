function myNew (Constructor, ...args) {
    const obj = Object.create(Constructor.prototype);
    const result = Constructor.apply(obj, args);

    const isObj = result !== null && typeof result === 'object';
    const isFunc = typeof result === 'function';

    return isFunc || isObj ? result : obj;
}