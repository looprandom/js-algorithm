/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let list = new ListNode(0)
    let cur = list
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            cur.next = l1
            l1 = l1.next
            cur = cur.next
        } else {
            cur.next = l2
            l2 = l2.next
            cur = cur.next
        }
    }
    while (l1 !== null) {
        cur.next = l1
        l1 = l1.next
        cur = cur.next
    }
    while (l2 !== null) {
        cur.next = l2
        l2 = l2.next
        cur = cur.next
    }
    return list.next
};