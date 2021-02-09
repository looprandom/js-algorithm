//回溯+剪枝
var generateParenthesis = function(n) {
    let res = []
    dfs('', 0, 0)
    return res

    function dfs(path, open, close) {
        if (open > n || close > open) return //剪枝
        if (path.length === 2 * n) {
            res.push(path)
            return
        }
        dfs(path + '(', open + 1, close)
        dfs(path + ')', open, close + 1)
    }
};