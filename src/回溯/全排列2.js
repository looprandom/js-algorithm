var permuteUnique = function(nums) {
    nums.sort((a,b)=>{
        return a - b
    })
    let used = Array(nums.length).fill(false)
    let res = []
    let tmp = []
    dfs(0)
    return res
    function dfs(index){
        if(index === nums.length){
            res.push(Array.from(tmp))
        }
        for(let i = 0;i < nums.length;i++){
            if(used[i])
                continue
            let curVal 
            if(nums[i] === curVal)
                continue
            else{
                curVal = nums[i]
                tmp.push(nums[i])
                used[i] = true
                dfs(index + 1)
                tmp.pop()
                used[i] = false
            }
        }
    }
};