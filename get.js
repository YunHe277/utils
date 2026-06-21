function get(obj, path, defaultValue) {
    const keys = Array.isArray(path) ? path : path.split(".");
    let result = obj;
    for (const key of keys) {
        if (result === null) {
            return defaultValue;
        }
        result = result[key];
    }
    return result === undefined ? defaultValue : result;
}
