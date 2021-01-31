//dp 
/*
1 最后一步
2 转移方程
3 初始条件和边界情况
4 计算顺序
*/
var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity)
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] > i)
                continue
            dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
        }
    }
    console.log(amount)
    return dp[amount] === Infinity ? -1 : dp[amount]

};