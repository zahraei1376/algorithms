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

export const backPack = (weights, values, totalWeight) => {
    const n = weights.length;
    const matrix = new Array(n).fill().map(() => new Array(totalWeight + 1));

    for (let i = 0; i < n; i++) {
        for (let weight = 0; weight <= totalWeight; weight++) {
            if (i === 0 || weight === 0) {
                matrix[i][weight] = 0;
            } else if (weights[i] <= weight) {
                matrix[i][weight] = Math.max(values[i] + matrix[i - 1][weight - weights[i]], matrix[i - 1][weight]);
            } else {
                matrix[i][weight] = matrix[i - 1][weight];
            }
        }
    }

    return matrix[n - 1][totalWeight];
}