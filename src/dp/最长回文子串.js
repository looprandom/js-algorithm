//中心扩散法
var longestPalindrome = function(s) {
    if(s.length < 2)
        return s
    let left
    let right
    let len = 1
    let maxStart = 0
    let maxLen = 0
    for(let i = 0;i < s.length;i++){
        left = i - 1
        right = i + 1
        while(left >= 0 && s[left] === s[i]){
            len++
            left--
        }
        while(right < s.length && s[right] === s[i]){
            len++
            right++
        }
        while(left >= 0 && right < s.length && s[left] === s[right]){
            len += 2
            left--
            right++
        }
        if(len > maxLen){
            maxLen = len
            maxStart = left + 1
        }
        len = 1
    }
    return s.slice(maxStart,  maxStart + maxLen)
};