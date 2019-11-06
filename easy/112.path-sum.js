/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    return hasPathSumIterative(root, sum);
    if (!root) return false;
    if (!root.left && !root.right) return sum === root.val;

    return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val);
};

// postorder
var hasPathSumIterative = function(root, sum) {
    const stack = [];
    let prev = null;
    let cur = root;
    let value = 0;

    while (cur || stack.length > 0) {
        if (cur) {
            stack.push(cur);
            value += cur.val;
            cur = cur.left;
        } else {
            cur = stack[stack.length - 1];
            if (!cur.left && !cur.right && sum === value) {
                return true;
            }
            if (cur.right && prev != cur.right) {
                cur = cur.right;
            } else {
                prev = cur;
                stack.pop();
                value -= cur.val;
                cur = null;
            }
        }
    }
    return false;
}

// @lc code=end

