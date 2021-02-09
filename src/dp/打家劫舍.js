//dp 
/*
1 最后一步
2 转移方程
3 初始条件和边界情况
4 计算顺序
*/
var rob = function(nums) {
    if(!nums.length)
        return 0
    let dp = Array(nums.length)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])
    for(let i = 2; i < nums.length;i++){
        dp[i] = Math.max(dp[i - 1],dp[i - 2] + nums[i])
    }
    return dp[nums.length - 1]
};