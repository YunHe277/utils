function deepClone (value, cache = new WeakMap()) {
    if (value === null || typeof value !== 'object') {
        return value;
    }

    if (cache.has(value)) {
        return cache.get(value);
    }

    if (value instanceof Date) {
        return new Date(value);
    }

    if (value instanceof RegExp) {
        return new RegExp(value.source, value.flags)
    }

    if (value instanceof Map) {
        const res = new Map();
        cache.set(value, res);

        value.forEach((val, key) => {
            res.set(deepClone(key, cache), deepClone(val, cache))
        });

        return res;
    }

    if (value instanceof Set) {
        const set = new Set();
        cache.set(value, set);

        value.forEach((val) => {
            set.add(deepClone(val, cache))
        });

        return set;
    }

    const result = Array.isArray(value) ? [] : {};
    cache.set(value, result)
    Reflect.ownKeys(value).forEach((key) => {
        result[key] = deepClone(value[key], cache);
    });

    return result;
}