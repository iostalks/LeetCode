/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const len = s.length;
    const n = Math.floor(len / 2);
    for (let i = 0; i < n; ++i) {
       const char = s[i];
       s[i] = s[len-1-i];
       s[len-1-i] = char;
   } 
   return s;
};
// @lc code=end

