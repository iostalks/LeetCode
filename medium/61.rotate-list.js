/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let tmp = head;
    let len = 0;
    while (tmp) {
        len++;
        tmp = tmp.next;
    }
    let realK = k % len;

    if (realK === 0) {
        return head;
    }
    
    const dump = new ListNode(0);
    dump.next = head;
    let slow = dump, fast = dump;
    while (realK--) {
        fast = fast.next;
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = dump.next;
    dump.next = slow.next;
    slow.next = null;

    return dump.next;
};
// @lc code=end

