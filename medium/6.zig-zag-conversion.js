/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  return convert2(s, numRows);
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }
  const groupSize = numRows * 2 - 2;
  const groupCount = parseInt(s.length / groupSize);
  // const groupRemain = s.length % groupSize;
  const newNumbRows = (groupCount + 1) * (numRows - 1);
  const rect = new Array(newNumbRows);
  for (let i = 0; i < newNumbRows; ++i) {
    const rows = new Array(numRows);
    rect[i] = rows;
  }

  const strings = s.split('');
  let i = 0;
  while (strings && strings[i]) {
    for (let row = 0; row < newNumbRows; ++row) {
      for (let column = 0; column < numRows; ++column) {
        // console.log(row, cloumn, i);
        if (row % (numRows - 1) === 0) {
          rect[row][column] = strings[i];
          ++i;
        } else {
          if ((row + column) % (numRows - 1) === 0) {
            rect[row][column] = strings[i];
            ++i;
          }
        }
      }
    }
  }

  const newStrings = [];
  for (let column = 0; column < numRows; ++column) {
    for (let row = 0; row < newNumbRows; ++row) {
      const value = rect[row][column];
      if (value) {
        newStrings.push(value);
      }
    }
  }
  return newStrings.join('');
};

var convert2 = (s, numRows) => {
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }

  const res = new Array(numRows).fill('');
  let index = 0, step = 1;

  for (const c of s) {
    res[index] += c
    if (index == 0) {
      step = 1;
    } else if (index == numRows - 1) {
      step = -1;
    }
    index += step;
  }

  return res.join('');
}
// @lc code=end

