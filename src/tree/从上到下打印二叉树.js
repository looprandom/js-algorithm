var levelOrder = function(root) {
    if (root === null)
        return []
    let queue = []
    let res = []
    queue.push(root)
    while (queue.length) {
        let node = queue.shift()
        res.push(node.val)
        if (node.left)
            queue.push(node.left)
        if (node.right)
            queue.push(node.right)
    }
    return res
};