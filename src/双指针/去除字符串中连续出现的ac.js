/*
对输入的字符串，去除其中的字符'b'以及连续出现的'ac'
例如：
'aacbd' -> 'ad'
'aabcd' -> 'ad'
'aaabbccc' -> ''
不允许使用类似string.replace函数。
 */

//栈解法
function helper1(str) {
    let stack = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'b')
            continue
        if (str[i] === 'c' && stack[stack.length - 1] === 'a') {
            stack.pop()
        } else {
            stack.push(str[i])
        }
    }
    return stack.join('')
}

console.log(helper1('aaabbccc'))
console.log(helper1('aacbd'))

//双指针解法
function helper(str) {
    let res = ''
    let index = 0
    while (index < str.length) {
        if (index !== str.length - 1 && str[index] === 'a' && str[index + 1] === 'b') {
            index += 2
        } else if (str[index] === 'b') {
            index++
        } else {
            res += str[index]
            index++
        }
    }
    return res
}
// console.log(helper('aaabbccc'))
// console.log(helper('aacbd'))