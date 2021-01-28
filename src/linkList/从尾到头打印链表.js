/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let stack = []
    let cur = head
    while (cur !== null) {
        stack.push(cur.val)
        cur = cur.next
    }
    return stack.reverse()
};