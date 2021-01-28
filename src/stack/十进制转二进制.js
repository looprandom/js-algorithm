function transform(num) {
    let stack = []
    while (Math.floor(num / 2) !== 0) {
        stack.push(num % 2)
        num = Math.floor(num / 2)
    }
    stack.push(num % 2)
    return stack.reverse().join('')
}
console.log(transform(10))
console.log(transform(8))
console.log(transform(0))
console.log(transform(1024))