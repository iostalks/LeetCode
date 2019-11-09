/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const result = [];
    const helper = (root, sum, candidates) => {
        if (!root) return;
        candidates.push(root.val);
        if (!root.left && !root.right && sum === root.val) {
            result.push(candidates.slice());
        } else {
            helper(root.left, sum - root.val, candidates);
            helper(root.right, sum - root.val, candidates);
        }
        candidates.pop();
    }
    helper(root, sum, []);
    return result;
};
// @lc code=end

