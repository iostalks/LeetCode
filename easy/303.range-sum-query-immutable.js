/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

 //3,4
 //[1,2,3,4,5]
 //[0,1,3,6,10,15]
// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    const res = [0];
    for (let i = 0; i < nums.length; ++i) {
        res.push(res[res.length-1]+nums[i]);
    }
    this.sum = res;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[j+1] - this.sum[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

