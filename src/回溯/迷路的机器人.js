//回溯+剪枝
var pathWithObstacles = function(obstacleGrid) {
    let path = []
    if (dfs(0, 0)) {
        return path
    } else {
        return []
    }

    function dfs(row, col) {
        if (row >= obstacleGrid.length || col >= obstacleGrid[0].length || obstacleGrid[row][col] === 1)
            return false
        path.push([row, col])
        if (row === obstacleGrid.length - 1 && col === obstacleGrid[0].length - 1 || dfs(row + 1, col) || dfs(row, col + 1)) {
            return true
        }
        path.pop()
        obstacleGrid[row][col] = 1
        return false
    }
};