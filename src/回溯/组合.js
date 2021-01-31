var combine = function(n, k) {
   let res = []
   let tmp = []
   dfs(1)
   return res
    function dfs(index){
        if(tmp.length === k){
            res.push(Array.from(tmp))
            return
        }       
        for(let i = index; i <= n;i++){
            tmp.push(i)
            dfs(i + 1)
            tmp.pop()            
        }
    }
}