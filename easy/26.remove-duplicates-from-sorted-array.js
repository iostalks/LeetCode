/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length;
    if (n <= 1) return n;
    let j = 1;
    for (let i = 1; i < n; ++i) {
        if (nums[i] !== nums[i-1]) {
            nums[j] = nums[i];
            ++j;
        }
    }
    return j;
};
// @lc code=end

