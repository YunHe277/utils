function unflattenObject(obj) {
    const res = {};
    for (const path in obj) {
        const keys = path.split(".");
        let cur = res;
        keys.forEach((key, index) => {
            if (index === keys.length - 1) {
                cur[key] = obj[path];
            } else {
                if (!cur[key]) {
                    cur[key] = {};
                }
                cur = cur[key];
            }
        });
    }
    return res;
}