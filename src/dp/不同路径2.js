//dp 
/*
1 最后一步
2 转移方程
3 初始条件和边界情况
4 计算顺序
*/
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let dp = Array(m).fill(Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1)
                dp[i][j] = 0
            else if (i === 0 && j === 0)
                dp[i][j] = 1
            else if (i === 0)
                dp[0][j] = dp[0][j - 1]
            else if (j === 0)
                dp[i][0] = dp[i - 1][j]
            else
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};