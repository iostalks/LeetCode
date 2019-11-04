/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root || (!root.left && !root.right)) {
    return root;
  }

  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  root.left = invertTree(root.left);
  root.right = invertTree(root.right);

  return root;
};

var invertTree2 = function (root) {
  if (!root) return null;
  const stack = [];
  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;

    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return root;
}
// @lc code=end

