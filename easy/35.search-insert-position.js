/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   let low = 0;
   let high = nums.length - 1; 
   while (low <= high) {
       const mid = ~~((low + high) / 2);
       expected = mid;
       if (nums[mid] === target) {
           return mid;
       } else if (nums[mid] < target) {
           low = mid + 1;
       } else {
           high = mid - 1;
       }
   }
   return low;
};
// @lc code=end

