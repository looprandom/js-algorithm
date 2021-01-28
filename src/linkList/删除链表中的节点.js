var deleteNode = function(head, val) {
    if (head.val === val)
        return head.next
    let pre = head
    let cur = head.next
    while (cur.val !== val) {
        let next = cur.next
        pre = cur
        cur = next
    }
    pre.next = cur.next
    return head
};