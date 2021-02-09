//dp 
/*
1 最后一步
2 转移方程
3 初始条件和边界情况
4 计算顺序
*/
var maxProfit = function(prices) {
    let last_min = prices[0]
    let max_profit = 0
    for(let i = 1;i < prices.length;i++){
        if(prices[i] < last_min){
            last_min = prices[i]
            
        }else{
            max_profit += prices[i] - last_min
            last_min = prices[i]
        }
    }
    return max_profit
};