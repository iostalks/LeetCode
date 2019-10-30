/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let cur = head;

    while (cur) {
        while (cur.next && cur.val === cur.next.val) {
            cur = cur.next;
        }
        if (prev.next === cur) {
            prev = cur;
        } else {
            prev.next = cur.next;
        }
        cur = cur.next;
    }

    return dummy.next;
};

var deleteDuplicates2 = function(head) {
    const helper = (head, lastDuplNode) => {
        if (!head || !head.next) return head;
        if (head.next.val === head.val) {
            lastDuplNode = head;
        }
        head.next = helper(head.next, lastDuplNode);
        if (head.next && head.next.val === head.val) {
            return head.next.next;
        } else if (head === lastDuplNode) {
            return head.next;
        }
        return head;
    }
    return helper(head, new ListNode(0));
}

// @lc code=end
