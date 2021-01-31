//dp 
/*
1 最后一步
2 转移方程
3 初始条件和边界情况
4 计算顺序
*/
var rob = function(nums) {
    if (!nums.length)
        return 0
    if (nums.length === 1)
        return nums[0]
    if (nums.length === 2)
        return Math.max(nums[0], nums[1])
    let dp1 = Array(nums.length)
    let dp2 = Array(nums.length)
    dp1[0] = nums[0]
    dp1[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i])
    }
    dp2[1] = nums[1]
    dp2[2] = Math.max(nums[1], nums[2])
    for (let i = 3; i < nums.length; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i])
    }
    return Math.max(dp1[nums.length - 2], dp2[nums.length - 1])
};