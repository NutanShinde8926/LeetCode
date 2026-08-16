
var minAbsDiff = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    const res = Array.from({ length: m - k + 1 }, () => new Array(n - k + 1).fill(0));

    for (let i = 0; i + k <= m; i++) {
        for (let j = 0; j + k <= n; j++) {
            const kgrid = [];
            for (let x = i; x < i + k; x++) {
                for (let y = j; y < j + k; y++) {
                    kgrid.push(grid[x][y]);
                }
            }

            kgrid.sort((a, b) => a - b);

            let kmin = Infinity;
            for (let t = 1; t < kgrid.length; t++) {
                if (kgrid[t] === kgrid[t - 1]) continue;
                kmin = Math.min(kmin, kgrid[t] - kgrid[t - 1]);
            }

            res[i][j] = (kmin !== Infinity) ? kmin : 0;
        }
    }

    return res;
};

const grid = [
    [1, 8],
    [3, -4]
];
const k = 2;
console.log(minAbsDiff(grid, k)); 