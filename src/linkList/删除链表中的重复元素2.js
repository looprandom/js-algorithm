var deleteDuplicates = function(head) {
    let pre = list = new ListNode()
    let cur = pre.next = head
    while (cur !== null) {
        let curVal = cur.val
        if (!cur.next || cur.next.val !== curVal) {
            pre = cur
            cur = cur.next
            continue
        }
        while (cur.next && cur.next.val === curVal) {
            cur = cur.next
        }
        pre.next = cur.next
        cur = cur.next
    }
    return list.next
};