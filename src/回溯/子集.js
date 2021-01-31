var subsets = function(nums) {
  let res = []
  let tmp = []
  let used = Array(nums.length).fill(false)
  res.push([])
  dfs(0)
  return res
  function dfs(index){
    if(index === nums.length)
        return
    for(let i = index;i < nums.length;i++){
        if(used[i])
            continue
        tmp.push(nums[i])
        res.push(Array.from(tmp))
        used[i] = true
        dfs(i + 1)
        used[i] = false
        tmp.pop()      
    }
  }
};