export const chainMultiplicationOfMatrices = (dimensions) => {
    const n = dimensions.length;
    const costs = new Array(n).fill().map(() => new Array(n));
    const breaks = new Array(n).fill().map(() => new Array(n));
    for (let i = 0; i < n; i++) {
        costs[i][i] = 0;
    }
    //len < n is correct
    for (let len = 1; len < n - 1; len++) {
        for (let i = 1; i < n - len; i++) {
            let j = i + len;
            costs[i][j] = window.Infinity;
            for (let k = i; k < j; k++) {
                let cost = costs[i][k] + costs[k + 1][j] + (dimensions[i - 1] * dimensions[k] * dimensions[j]);
                if (costs[i][j] > cost) {
                    costs[i][j] = cost;
                    breaks[i][j] = k;
                }
            }
        }
    }

    return costs[1][n - 1];
}