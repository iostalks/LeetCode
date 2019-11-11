/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    return maxSlidingWindow2(nums, k);
    // 双端队列，存储准最大值下标
    // 更新条件：1、队列未满 2、有新的值大于队列最小值 3、下标已经滑过窗口
    const indexDeque = [];
    const result = [];
    for (let i = 0; i < nums.length; ++i) {
        // 当队列元素个数达到 k 个之后，判断最左侧下标是不是该被踢了
        if (i >= k && indexDeque[0] <= i - k) {
            indexDeque.shift();
        }

        // 新进来的元素如果比队列中的大，踢掉小的元素下标
        while (
            indexDeque.length > 0
            && nums[indexDeque[indexDeque.length - 1]] <= nums[i]
        ) {
            indexDeque.pop();
        }

        // 推入当前下标
        indexDeque.push(i);

        // 达到窗口大小 k 时，开始取最大值
        if (i >= k - 1) {
            result.push(nums[indexDeque[0]]);
        }
    }

    return result;
};

var maxSlidingWindow2 = function(nums, k) {
    const q = [];
    const res = [];

    for (let i = 0; i < nums.length; ++i) {
        while (q.length > 0 && q[q.length - 1] < nums[i]) {
            q.pop();
        }
        q.push(nums[i]);
        const j = i - k + 1;
        if (j >= 0) {
            res.push(q[0]);
            if (q[0] === nums[j]) q.shift();
        }
    }

    return res;
}
// @lc code=end

