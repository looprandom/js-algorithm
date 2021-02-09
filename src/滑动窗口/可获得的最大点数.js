// dfs 递归 超时
var maxScore = function(cardPoints, k) {
    let res = -Infinity
    dfs(0, cardPoints.length - 1, 0, 0)
    return res

    function dfs(left, right, count, tmp) {
        if (count === k) {
            res = Math.max(res, tmp)
            return
        }
        dfs(left + 1, right, count + 1, tmp + cardPoints[left])
        dfs(left, right - 1, count + 1, tmp + cardPoints[right])
    }
};

// 前缀和 presum
var maxScore = function(cardPoints, k) {
    let presum = Array(cardPoints.length + 1)
    presum[0] = 0
    let sum = 0
    for (let i = 0; i < cardPoints.length; i++) {
        presum[i + 1] = presum[i] + cardPoints[i]
        sum += cardPoints[i]
    }
    let res = -Infinity
    for (let i = 0; i < k; i++) {
        res = Math.max(res, sum - presum)
    }
};

//固定大小的滑动窗口
var maxScore = function(cardPoints, k) {

};