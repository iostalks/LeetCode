/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 左 -> 中 - 右
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [];
  const traversal = (r) => {
    if (!r) return;
    traversal(r.left);
    result.push(r.val);
    traversal(r.right);
  }
  traversal(root);
  return result;
};

var inorderTraversalIterative = function(root) {
  const result = [];
  const stack = [];

  let cur = root;

  while (cur || stack.length > 0) {
    // 访问左叶子节点
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    result.push(cur.val);
    cur = cur.right;
  }

  return result;
}

// 前序 中 左 右
var preorderTraversal = function(root) {
  const result = [];
  const traversal = (root) => {
    if (!root) return [];
    result.push(root.val);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
  }
  traversal();
  return result;
}

var preorderTraversalIterator = function(root) {
  const result = [];
  const stack = [];

  let cur = root;

  while (cur || stack.length > 0) {
    while (cur) {
      result.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    cur = cur.right;
  }

  return result;
}

// 后序遍历 左 右 中
var postorderTraversal = function(root) {
  const result = [];
  const traversal = (root) => {
    if (!root) return [];
    preorderTraversal(root.left);
    preorderTraversal(root.right);
    result.push(root.val);
  }
  traversal();
  return result;
}

var postorderTraversalIteration = function(root) {
  const result = [];
  const stack = [];

  let cur = root;
  let lastVisited = null;

  while (cur || stack.length > 0) {
    if (!cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      const top = stack[stack.length - 1];
      if (top.right && top.right != lastVisited) {
        cur = cur.right;
      } else {
        result.push(top);
        lastVisited = stack.pop();
      }
    }
  }
}
// @lc code=end

