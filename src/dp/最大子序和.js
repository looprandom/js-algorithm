//dp 
/*
1 最后一步
2 转移方程
3 初始条件和边界情况
4 计算顺序
*/
var maxSubArray = function(nums) {
    if (nums.length === 1)
        return nums[0]
    let res = nums[0]
    let dp = Array(nums.length)
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] < 0)
            dp[i] = nums[i]
        else
            dp[i] = dp[i - 1] + nums[i]
        res = Math.max(res, dp[i])
    }
    return res
};