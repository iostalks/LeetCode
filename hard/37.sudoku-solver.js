/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    if (!board || !board.length) {
        return;
    }

    const solver = (board) => {
        for (let i = 0; i < board.length; ++i) {
            for (let j = 0; j < board[0].length; ++j) {
                if (board[i][j] === '.') {
                    for (let c = 1; c <= 9; ++c) {
                        // console.log(c);
                        if (isValid(board, c, i, j)) {
                            
                            board[i][j] = String(c);

                            if (solver(board)) {
                                return true;
                            } else {
                                board[i][j] = '.';
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    
    solver(board);
};

var isValid = function(board, char, row, col) {
    for (let i = 0; i < 9; ++i) {
        if (board[row][i] !== '.' && board[row][i] == char) return false;
        if (board[i][col] !== '.' && board[i][col] == char) return false;
        const boxRow = Math.floor(row/3)*3+Math.floor(i/3);
        const boxCol = Math.floor(col/3)*3+i%3;
        if (board[boxRow][boxCol] !== '.' && board[boxRow][boxCol] == char) return false;
    }
    return true;
}

// @lc code=end

