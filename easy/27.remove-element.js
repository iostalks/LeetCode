/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j = 0;
    for (let i = 0, n = nums.length; i < n; ++i) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    } 
    return j;
};

// @lc code=end

