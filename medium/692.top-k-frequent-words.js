/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = {}; 
    // let maxCount = 0;
    words.forEach((word) => {
        const newCount = (map[word] || 0) + 1;
        map[word] = newCount;
        // maxCount = Math.max(maxCount, newCount);
    });

    // const buckets = new Array(maxCount);
    const buckets = []
    Object.keys(map).forEach(word => {
        const index = map[word] - 1; // count - 1
        const aBucket = buckets[index] || [];
        insertSorted(aBucket, word); // insert in place
        buckets[index] = aBucket;
    });

    const res = [];
    for (let i = buckets.length - 1; i >= 0; --i) {
        const pendingCount = k - res.length;
        if (pendingCount <= 0) break;
        if (!buckets[i]) continue;
        const appendItems = buckets[i].slice(0, pendingCount);
        res.push(...appendItems);
    }
    return res;
};

const insertSorted = (arr, element) => {
    const n = arr.length;
    let i = 0;
    for (; i < n; ++i) {
        if (arr[i] > element) {
            break;
        }
    }
    arr.splice(i, 0, element);
}

// @lc code=end

