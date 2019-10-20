/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const helpNode = new ListNode(0);
    let slow = fast = helpNode;
    slow.next = head;

    while (n >= 0 && fast) {
        fast = fast.next;
        --n;
    }

    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next

    return helpNode.next;
};
// @lc code=end

