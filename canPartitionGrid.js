/**
 * 3548. Equal Sum Grid Partition II
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    const m = grid.length, n = grid[0].length;
    let total = 0;
    const allCount = new Map();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            total += grid[i][j];
            allCount.set(grid[i][j], (allCount.get(grid[i][j]) || 0) + 1);
        }
    }
    const bump = (map, v) => map.set(v, (map.get(v) || 0) + 1);

    if (m > 1) {
        const topCount = new Map();
        let topSum = 0;
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n; j++) {
                bump(topCount, grid[i][j]);
                topSum += grid[i][j];
            }
            const diff = topSum - (total - topSum);
            if (diff === 0) return true;

            const topRows = i + 1, bottomRows = m - i - 1;

            if (topRows > 1 && n > 1) {
                if ((topCount.get(diff) || 0) > 0) return true;
            } else {
                if (grid[0][0] === diff || grid[0][n - 1] === diff) return true;
                if (grid[i][0] === diff || grid[i][n - 1] === diff) return true;
            }

            const need = -diff;
            if (bottomRows > 1 && n > 1) {
                if ((allCount.get(need) || 0) - (topCount.get(need) || 0) > 0) return true;
            } else {
                const r1 = i + 1, r2 = m - 1;
                if (grid[r1][0] === need || grid[r1][n - 1] === need) return true;
                if (grid[r2][0] === need || grid[r2][n - 1] === need) return true;
            }
        }
    }

    if (n > 1) {
        const leftCount = new Map();
        let leftSum = 0;
        for (let j = 0; j < n - 1; j++) {
            for (let i = 0; i < m; i++) {
                bump(leftCount, grid[i][j]);
                leftSum += grid[i][j];
            }
            const diff = leftSum - (total - leftSum);
            if (diff === 0) return true;

            const leftCols = j + 1, rightCols = n - j - 1;

            if (leftCols > 1 && m > 1) {
                if ((leftCount.get(diff) || 0) > 0) return true;
            } else {
                if (grid[0][0] === diff || grid[m - 1][0] === diff) return true;
                if (grid[0][j] === diff || grid[m - 1][j] === diff) return true;
            }

            const need = -diff;
            if (rightCols > 1 && m > 1) {
                if ((allCount.get(need) || 0) - (leftCount.get(need) || 0) > 0) return true;
            } else {
                const c1 = j + 1, c2 = n - 1;
                if (grid[0][c1] === need || grid[m - 1][c1] === need) return true;
                if (grid[0][c2] === need || grid[m - 1][c2] === need) return true;
            }
        }
    }

    return false;
};

console.log(canPartitionGrid([[1, 4], [2, 3]]));
console.log(canPartitionGrid([[1, 2], [3, 4]]));           
console.log(canPartitionGrid([[1, 1, 1], [1, 1, 1]]));     