/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
    let list = head;
    while (list && list.next) {
        if (list.val === list.next.val) {
            list.next = list.next.next
        } else {
            list = list.next;
        }
    }
    return head;
};

var deleteDuplicates2 = function(head) {
    if (!head || !head.next) { return head; }
    head.next = deleteDuplicates2(head.next);
    return head.val == head.next.val ? head.next : head;
}
// @lc code=end

