/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x < (-1 * 2 ** 31) || x > (2 ** 31 - 1)) {
    return 0;
  }
  const reverseInner = (remain, result) => {
    const c = parseInt(remain % 10);
    const r = parseInt(remain / 10);
    const cur = result * 10 + c
    if (r === 0) {
      return cur;
    } else {
      return reverseInner(r, cur);
    }
  }
  const res = reverseInner(x, 0);
  return (res < (-1 * 2 ** 31) || res > (2 ** 31 - 1)) ? 0 : res;
};

var reverse2 = function(x) {
  if (x < (-1 * 2 ** 31) || x > (2 ** 31 - 1)) {
    return 0
  }
  const s = x < 0 ? -1 : 1;
  const result = s * Number(String(Math.abs(x)).split('').reverse().join(''));
  if (result < (-1 * 2 ** 31) || result > (2 ** 31 - 1)) {
    return 0;
  } else {
    return result
  }
}
