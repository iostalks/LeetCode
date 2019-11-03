/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 这个题不太好，左右节点只有一个的时候，算有叶节点的高度。
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);

  if (left === 0 || right === 0) {
    return left + right + 1;
  } else {
    return Math.min(left, right) + 1;
  }
};
// @lc code=end

