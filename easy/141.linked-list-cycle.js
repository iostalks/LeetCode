/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};
// @lc code=end

