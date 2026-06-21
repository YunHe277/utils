function arrayToTree(list) {
    const map = new Map();
    const tree = [];
    for (const item of list) {
        map.set(item.id, {
            ...item,
            children: []
        });
    }
    for (const item of list) {
        const node = map.get(item.id);
        if (item.parentId == null) {
            tree.push(node);
        } else {
            const parent = map.get(item.parentId);
            if (parent) {
                parent.children.push(node);
            }
        }
    }
    return tree;
}