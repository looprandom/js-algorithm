//dp 
/*
1 最后一步
2 转移方程
3 初始条件和边界情况
4 计算顺序
*/
var lengthOfLIS = function(nums) {
    let res = 0
    let dp = Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        let j = i - 1
        while (j >= 0 && nums[j] > nums[i])
            j--
            if (j >= 0)
                dp[i] = dp[j] + 1
        res = Math.max(res, dp[i])
    }
    return res
};