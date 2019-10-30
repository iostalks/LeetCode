/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;

    let max = 1;
    const stack = [];
    const depthStack = [];

    stack.push(root);
    depthStack.push(1);

    while (stack.length > 0) {
        const node = stack.pop();
        const depth = depthStack.pop();
        // 叶节点更新最大高度
        if (!node.left && !node.right) {
            max = Math.max(depth, max);
        }

        if (node.left) {
            stack.push(node.left);
            depthStack.push(depth + 1);
        }

        if (node.right) {
            stack.push(node.right);
            depthStack.push(depth + 1);
        }
    }

    return max;
};

var maxDepth = function(root) {
    if (!root) return 0;
    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);
    return Math.max(leftMaxDepth, rightMaxDepth) + 1;
}
// @lc code=end

