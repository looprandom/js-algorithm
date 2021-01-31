var findRepeatNumber = function(nums) {
    let map = Array(nums.length).fill(0)
    let res;
    for(let i = 0;i < nums.length;i++){
        map[nums[i]]++
        if(map[nums[i]] > 1){
            res = nums[i]
            break
        } 
    }
    return res
};