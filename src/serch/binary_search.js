function binart_search(arr, target) {
    let l = 0
    let r = arr.length - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (arr[mid] === target)
            return mid
        else if (mid > target)
            l = mid + 1
        else
            r = mid - 1
    }
    return -1
}

//test
const arr1 = [1, 2, 3, 4, 5]
console.log(binart_search(arr1, 3))

const arr2 = []
console.log(binart_search(arr2, 3))

const arr3 = [2]
console.log(binart_search(arr3, 3))