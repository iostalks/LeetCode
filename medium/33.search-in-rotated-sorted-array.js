/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return search3(nums, target);
    const len = nums.length;
    if (!len) return -1;

    let low = 0, high = len - 1;
    while (low < high) {
        const median = Math.floor((low + high) / 2);
        if (nums[median] > nums[high]) {
            low = median + 1;
        } else {
            high = median;
        }
    }

    const pvoit = low;
    low = 0, high = len - 1;
    while (low <= high) {
        const median = Math.floor((low + high) / 2);
        const realMedian = (median + pvoit) % len;
        if (nums[realMedian] === target) {
            return realMedian
        } else if (nums[realMedian] < target) {
            low = median + 1;
        } else {
            high = median - 1;
        }
    }

    return -1;
};

var search2 = function(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = low + Math.floor((high - low) >> 1);
        if (target === nums[mid]) return mid;
        if (nums[mid] >= nums[low]) { // 左边有序
            if (nums[mid] > target && nums[low] <= target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else { // 右边有序
            if (nums[mid] < target && nums[high] >= target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

var search3 = function(nums, target) {
    let low = 0, high = nums.length - 1; 

    const binarySearch = (nums, low, high, target) => {
        const mid = ~~((low + high)/2)
        while(nums[low] <= nums[high]) {
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }

    const binarySearchRotated = (nums, low, high, target) => {
        return -1;
    }

    return binarySearchRotated(nums, low, high, target);
}
// @lc code=end

