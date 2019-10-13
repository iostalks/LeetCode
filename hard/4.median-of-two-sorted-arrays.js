/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    return median(nums1, nums2);

    let nums = [];
    const m = nums1.length;
    const n = nums2.length;
    // if (m == 0) {
    //     nums = nums2;
    // } else if (n == 0) {
    //     nums = nums1;
    // } else {
    let i = j = 0;

    for (let c = 0; c < m+n; ++c) {
        if (i < m && j < n) {
            if (nums1[i] < nums2[j]) {
                nums.push(nums1[i]);
                i++
            } else {
                nums.push(nums2[j]);
                j++
            }
        } else if (i < m) {
            nums.push(nums1[i]);
            i++
        } else if (j < n) {
            nums.push(nums2[j]);
            j++
        }
    }
    // }
    // console.log(nums);
    const middle = Math.floor((m + n - 1) / 2);
    if ((m + n) % 2 == 0) {
        return (nums[middle] + nums[middle + 1]) / 2;
    } else {
        return nums[middle];
    }
};

var median = function(A, B) {
    let m = A.length;
    let n = B.length;
    if (m > n) {
        [m, n, A, B] = [n, m, B, A];
    }

    let imin = 0;
    let imax = m;
    let medianLen = Math.floor((m + n + 1) / 2);

    let leftMax;
    let rightMin;
    while (imin <= imax) {
        const i = Math.floor((imax + imin) / 2);
        const j = medianLen - i;
        if (i < m && B[j - 1] > A[i]) {
            // i 过小
            imin = i + 1;
        } else if (i > 0 && A[i - 1] > B[j]) {
            // i 过大
            imax = i - 1;
        } else {
            if (i == 0) {
                leftMax = B[j - 1];
            } else if (j == 0) {
                leftMax = A[i - 1]
            } else {
                leftMax = Math.max(A[i - 1], B[j - 1]);
            }
            if ((m + n) % 2 == 1) {
                return leftMax;
            }

            if (i == m) {
                rightMin = B[j];
            } else if (j == n) {
                rightMin = A[i];
            } else {
                rightMin = Math.min(A[i], B[j]);
            }

            return (rightMin + leftMax) / 2
        }
    }
}
// @lc code=end

