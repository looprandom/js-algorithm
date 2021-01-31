var permute = function(nums) {
    let res = []
    let used = Array(nums.length).fill(false)
    let tmp = []
    recur(0)
    return res
    function recur(index){
        if(index === nums.length){
            res.push(Array.from(tmp))
            return
        }
        for(let i = 0;i < nums.length;i++){
            if(!used[i]){
                tmp.push(nums[i])
                used[i] = true
                recur(index + 1)
                tmp.pop()
                used[i] = false
            }
        }
    }
};