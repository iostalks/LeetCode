/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];

  const stack = [];
  let cur = root;

  while (cur || stack.length > 0) {
    if (cur) {
      res.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      cur = cur.right;
    }
  }

  return res;
};

var preorderTraversal2 = function (root) {
  // if (!root) return 0;
  const res = [];
  const helper = (root) => {
    if (!root) return;
    res.push(root.val);
    helper(root.left);
    helper(root.right);
  }
  helper(root);
  return res;
}
// @lc code=end

