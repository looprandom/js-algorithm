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
        let maxj = 0
        while (j >= 0){
            if(nums[j] < nums[i]){
                maxj = Math.max(maxj,dp[j])
            }
            j--
        }
        dp[i] = maxj + dp[i]  
        res = Math.max(res, dp[i])
    }
    return res
};