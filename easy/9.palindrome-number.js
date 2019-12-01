/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if (x < 0) return false; 
   const fliped = (x, res) => {
       const c = Math.floor(x / 10);
       const r = x % 10;
       const m = (res * 10) + r
       return c === 0 ? m : fliped(c, m);
   }

   const flipedX = fliped(x, 0);

   return flipedX === x;
};
// @lc code=end

