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
    return parseBoolExpr2(expression);
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
var parseBoolExpr2 = function(expression) {
    const stack = [];
    expression.split('').forEach(c => {
        if (c === ')') {
            const set = new Set();
            while (stack[stack.length - 1] !== '(') {
                set.add(stack.pop());
            }
            stack.pop();
            const operator = stack.pop();
            if (operator === '&' ) {
                stack.push(set.has('f') ? 'f' : 't');
            } else if (operator === '|') {
                stack.push(set.has('t') ? 't' : 'f');
            } else if (operator === '!') {
                stack.push(set.has('t') ? 'f' : 't');
            }
        } else if (c !== ',') {
            stack.push(c);
        }
    });
    return stack.pop() === 't';
}

// @lc code=end

