var findKthLargest = function(nums, k) {
    nums.sor((b, a) => {
        return b - a
    })
    return nums[k - 1]
};