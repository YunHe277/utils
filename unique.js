function unique(arr) {
    let map = new Map();
    let res = [];
    for (const item of arr) {
        if (!map.has(item)) {
            map.set(item, 1)
            res.push(item);
        }
    }

    return res;
}