var mirrorTree = function(root) {
    recur(root)
    return root

    function recur(node) {
        if (node === null)
            return
        let tmp = node.left
        node.left = node.right
        node.right = tmp

        recur(node.right)
        recur(node.left)
    }
};