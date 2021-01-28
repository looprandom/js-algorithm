/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let stack = []
    let cur = head
    while (cur !== null) {
        stack.push(cur)
        cur = cur.next
    }
    while (stack.length) {
        if (stack.pop().val !== head.val)
            return false
        head = head.next
    }
    return true
};