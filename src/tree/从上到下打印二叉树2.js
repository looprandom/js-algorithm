var levelOrder = function(root) {
    if (root === null)
        return []
    let queue = []
    let res = []
    queue.push(root)
    while (queue.length) {
        let curLev = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            curLev.push(node.val)
            if (node.left)
                queue.push(node.left)
            if (node.right)
                queue.push(node.right)
        }
        res.push(curLev)
    }
    return res
};