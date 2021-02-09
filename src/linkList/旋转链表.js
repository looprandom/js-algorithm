var rotateRight = function(head, k) {
    if (head === null || head.next === null)
        return head
    let len = 1
    let tail = head
    while (tail.next != null) {
        tail = tail.next
        len++
    }
    k = k % len
    if (k === 0)
        return head

    let node = head
    for (let i = 0; i < len - k - 1; i++) {
        node = node.next
    }
    let newHead = node.next
    tail.next = head
    node.next = null
    return newHead

};