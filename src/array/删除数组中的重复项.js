//数组 
var removeDuplicates = function(nums) {
    let l = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[l] !== nums[i]) {
            nums[l + 1] = nums[i]
            l++
        }
    }
    return l + 1
};