/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    const helper = (left, right) => {
        if (!left || !right) return left === right;
        if (left.val !== right.val ) return false;
        return helper(left.left, right.right) && helper(left.right, right.left);
    }
    return helper(root.left, root.right);
};

// @lc code=end

