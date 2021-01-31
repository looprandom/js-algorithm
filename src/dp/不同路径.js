//dp 
/*
1 最后一步
2 转移方程
3 初始条件和边界情况
4 计算顺序
*/
var uniquePaths = function(m, n) {
    let dp = Array(m).fill(Array(n))
    for(let i = 0; i < n;i++){
        dp[0][i] = 1
    }
    for(let i = 0;i < m;i++){
        dp[i][0] = 1
    }
    for(let i = 1;i < m;i++){
        for(let j = 1;j < n;j++){
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};
var uniquePaths = function(m, n) {
    let dp = Array(m).fill(Array(n))
    for(let i = 0; i < n;i++){
        dp[0][i] = 1
    }
    for(let i = 0;i < m;i++){
        dp[i][0] = 1
    }
    for(let i = 1;i < n;i++){
        for(let j = 1;j < m;j++){
            dp[j][i] = dp[j - 1][i] + dp[j][i - 1]
        }
    }
    return dp[m - 1][n - 1]
};