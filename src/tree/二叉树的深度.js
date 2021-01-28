var maxDepth = function(root) {
    let res = 0
    dfs(root, 0)
    return res

    function dfs(node, deep) {
        if (node === null) {
            res = Math.max(res, deep)
            return
        }
        dfs(node.left, deep + 1)
        dfs(node.right, deep + 1)
    }
};