const data = [
    {
        id: 1,
        name: 'A',
        children: [
            {
                id: 2,
                name: 'B',
                children: [
                    {
                        id: 4,
                        name: 'D',
                    },
                    {
                        id: 5,
                        name: 'E',
                    },
                ],
            },
            {
                id: 3,
                name: 'C',
                children: [
                    {
                        id: 6,
                        name: 'F',
                    },
                    {
                        id: 7,
                        name: 'G',
                    },
                ],
            },
        ],
    },
];

function find(tree, id) {
    let res = [];

    function dfs(node) {
        if (!node) {
            return false;
        }
        res.push(node.name);
        if (node.id === id) {
            return true;
        }
        if (node.children && node.children.length) {
            for (const child of node.children) {
                if (dfs(child)) {
                    return true;
                }
            }
        }
        res.pop();
        return false;
    }
    for (const node of tree) {
        if (dfs(node)) {
            break;
        }
    }
    return res;
}

console.log(find(data, 5));