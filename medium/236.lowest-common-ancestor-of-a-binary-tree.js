/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    return !left ? right : (!right ? left : root);
};

// 递归是一个结果在前面，过程在后面的一种技巧
var lca = function(root, p, q) {
    if (!root) return null; // 没有找到
    if (root === p || root === q) return root; // 找到了
    const left = lca(root.left, p, q);
    const right = lca(root.right, p, q);
    if (left && right) return root;
    if (!left && !right) return null;
    return left ? left : right;
}
// @lc code=end

