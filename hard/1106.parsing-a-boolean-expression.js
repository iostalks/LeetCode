/*
 * @lc app=leetcode id=1106 lang=javascript
 *
 * [1106] Parsing A Boolean Expression
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    const and = (...args) => {
        return args.reduce((res, cur) => res && cur, true);
    }
    const or = (...args) => {
        return args.reduce((res, cur) => res || cur, false);
    } 
    const not = (...args) => {
        return !args.reduce((res, cur) => res && cur, true);
    } 

    const e = expression.replace(/f/g, 'false').replace(/t/g, 'true').replace(/\|/g, 'or').replace(/&/g, 'and').replace(/!/g, 'not');

    return eval(e);
};
// @lc code=end

