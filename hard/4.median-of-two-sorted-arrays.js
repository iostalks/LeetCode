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
      // 保证 n > m
    [m, n, A, B] = [n, m, B, A];
  }

  let imin = 0;
  let imax = m;
  // +1 是为了保证在 m+n 为奇数时，i-1 为中位数
  let medianLen = Math.floor((m + n + 1) / 2);

  let leftMax;
  let rightMin;
  // 在[0, m]中进行二分
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
      // 此时满足 B[j-1] <= A[i] & A[i-1] <= B[j]
      // 但还需要考虑 i=0/j=0/i=m/j=n 四种特殊情况
      
      // 如果总数为奇数个，只需要考虑 i、j 左边的最大值
      // 如果 i j 取值在边界，则考虑一边即可
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

      // 总数为偶数个时，需要计算 i、j，左边的最大值和右边的最小值的平均值
      // 如果 i j 取值在边界，则考虑一边即可
      if (i == m) {
        rightMin = B[j];
      } else if (j == n) {
        rightMin = A[i];
      } else {
        rightMin = Math.min(A[i], B[j]);
      }

      return (rightMin + leftMax) / 2;
    }
  }
}
// @lc code=end

