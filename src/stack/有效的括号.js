var isValid = (s) => {
    if (s.length % 2 === 1)
        return false
    let map = {
        '(': 1,
        '[': 2,
        '{': 3,
        ')': -1,
        ']': -2,
        '}': -3
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] > 0)
            stack.push(s[i])
        else if (map[stack.pop()] + map[s[i]] !== 0)
            return false
    }
    return stack.length === 0
}