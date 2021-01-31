var isSymmetric = function(root) {
    if (root === null)
        return true
    return recur(root.left, root.right)

    function recur(A, B) {
        if (A === null && B === null)
            return true
        if (A === null)
            return false
        if (B === null)
            return false
        if (A.val !== B.val)
            return false
        return recur(A.left, B.right) && recur(A.right, B.left)
    }
};