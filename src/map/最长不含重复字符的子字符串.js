var lengthOfLongestSubstring = function(s) {
    if (!s.length)
        return ""
    let maxLen = 0
    let len = 0
    let l = 0
    let r = -1
        //存储字符和索引的映射
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            len++
            r++
            map.set(s[i], i)
        } else {
            maxLen = Math.max(len, maxLen)
            l = map.get(s[i]) + 1
            r++
            len = i - l + 1
            map = new Map()
            for (let i = l; i <= r; i++) {
                map.set(s[i], i)
            }
        }
    }
    maxLen = Math.max(len, maxLen)
    return maxLen
};