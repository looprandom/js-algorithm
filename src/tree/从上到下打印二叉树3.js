var levelOrder = function(root) {
    if (root === null)
        return []
    let queue = []
    let res = []
    let leftToRight = true
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
        if (leftToRight)
            res.push(curLev)
        else
            res.push(curLev.reverse())
        leftToRight = !leftToRight

    }
    return res
};