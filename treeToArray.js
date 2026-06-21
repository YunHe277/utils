function treeToArray(tree) {
    const res = [];
    function dfs(nodes, parentId = null) {
        for (const node of nodes) {
            const { children, ...rest } = node;
            res.push({
                ...rest,
                parentId
            });
            if (children && children.length) {
                dfs(children, node.id);
            }
        }
    }
    dfs(tree);
    return res;
}