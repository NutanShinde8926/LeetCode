var numberOfSubmatrices = function(grid) {
    const n = grid.length, m = grid[0].length;
    const sum = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    const hasX = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(false));
    let ans = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let diff = 0;
            let cellIsX = false;
            if (grid[i][j] === 'X') {
                diff = 1;
                cellIsX = true;
            } else if (grid[i][j] === 'Y') {
                diff = -1;
            }
            sum[i + 1][j + 1] = sum[i][j + 1] + sum[i + 1][j] - sum[i][j] + diff;
            hasX[i + 1][j + 1] = cellIsX || hasX[i][j + 1] || hasX[i + 1][j];

            if (sum[i + 1][j + 1] === 0 && hasX[i + 1][j + 1]) {
                ans++;
            }
        }
    }

    return ans;
};
console.log(numberOfSubmatrices([["X","Y","."],["Y",".","."]])); 