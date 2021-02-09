var restoreIpAddresses = function(s) {
    let res = []
    let tmp = []
    dfs(0)
    return res

    function dfs(start) {
        if (tmp.length === 4 && start === s.length) {
            res.push(tmp.join('.'))
            return
        }
        if (tmp.length === 4 && start < s.length)
            return
            //遍历所有可能选择
        for (let i = 1; i <= 3; i++) {
            if (start + i > s.length) return
            if (i !== 1 && s[start] == '0') return
            let str = s.slice(start, start + i)
            if (i === 3 && +str > 255) return
            tmp.push(str)
            dfs(start + i)
            tmp.pop()
        }
    }
};