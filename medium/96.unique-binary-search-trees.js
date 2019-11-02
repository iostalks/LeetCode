/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

 /**
  *  G(n)
  *  F(i, n) = 1 < i < n
  *  G(n) = F(1, n) + F(2, n) + .... + F(n, n)
  *  G(i) = G(i-1) * G(n-i)
  *  G(n) = G(0)*G(n-1) + G(1)*G(n-2)
  *  G(n-1) = G(0)*G(n-2)
  *  G(n-2) = G(0)*G(n-3)
  *  G(2) = G(1) * G(0) + G(0)*G(1) 
  *  G(1) = G(0)*G(0)
  *  G(0) = G(1) = 1;
  */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    return numTrees2(n);
    let G = new Array(n+1).fill(0);
    G[0] = G[1] = 1;
    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            G[i] += G[j-1] * G[i-j]
        }
    }
    return G[n];
};

var numTrees2 = function(n) {
    const cache = {};
    const helper = (n) => {
        if (cache[n]) {
            return cache[n];
        }
        if (n <= 1) {
            cache[n] = 1;
            return cache[n];
        }
        let sum = 0;
        for (let i = 1; i <= n; ++i) {
            const left = helper(i-1);
            const right = helper(n-i);
            sum += (left * right);
        }
        cache[n] = sum;
        return sum;
    }
    return helper(n);
}
// @lc code=end

