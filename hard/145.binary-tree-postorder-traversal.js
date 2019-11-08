/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function(root) {
   const result = [];

   let prev = null;
   let cur = root;
   const stack = [];

   while (cur || stack.length > 0) {
       if (cur) {
           stack.push(cur);
           cur = cur.left;
       } else {
           cur = stack[stack.length - 1];
           if (cur.right && cur.right !== prev) {
               cur = cur.right;
           } else {
               result.push(cur.val);
               prev = cur;
               cur = null;
               stack.pop();
           }
       }
   }

   return result;
};
// @lc code=end

