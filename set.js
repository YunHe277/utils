function set(obj, path, value) {
    const keys = Array.isArray(path) ? path : path.split(".");
    let cur = obj;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (i === keys.length - 1) {
            cur[key] = value;
        } else {
            if (cur[key] == null || typeof cur[key] !== "object") {
                cur[key] = {};
            }
            cur = cur[key];
        }
    }
    return obj;
}