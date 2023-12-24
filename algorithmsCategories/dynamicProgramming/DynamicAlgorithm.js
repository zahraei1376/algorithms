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

export const backPack = (weights, prices, totalWeight) => {

    if (weights[0] !== 0) weights.unshift(0);
    if (prices[0] !== 0) prices.unshift(0);

    const n = weights.length;
    const matrix = new Array(n).fill().map(() => new Array(totalWeight + 1));

    for (let i = 0; i < n; i++) {
        for (let weight = 0; weight <= totalWeight; weight++) {
            if (i === 0 || weight === 0) {
                matrix[i][weight] = 0;
            } else if (weights[i] <= weight) {
                matrix[i][weight] = Math.max(prices[i] + matrix[i - 1][weight - weights[i]], matrix[i - 1][weight]);
            } else {
                matrix[i][weight] = matrix[i - 1][weight];
            }
        }
    }

    return { maxPrice: matrix[n - 1][totalWeight], matrix };
}

export const itemsInBackPack = (weights, prices, totalWeight) => {
    const matrix = backPack(weights, prices, totalWeight).matrix;
    const result = new Array(weights.length).fill(0);
    let i = weights.length - 1;
    let j = totalWeight;
    while (i > 0 && j > 0) {
        if (matrix[i][j] === matrix[i - 1][j]) {
            i--;
        } else {
            result[i] = 1;
            j = j - weights[i];
        }
    }
    return result;
}

export const tsp = (graph) => {
    const n = graph.length;
    const memo = new Array(1 << n).fill(null).map(() => new Array(n).fill(null));

    function tspHelper(mask, pos) {
        if (mask === (1 << n) - 1) {
            return graph[pos][0];
        }

        if (memo[mask][pos] !== null) {
            return memo[mask][pos];
        }

        let minCost = Infinity;
        for (let nextCity = 0; nextCity < n; nextCity++) {
            if ((mask & (1 << nextCity)) === 0) {
                const newMask = mask | (1 << nextCity);
                const cost = graph[pos][nextCity] + tspHelper(newMask, nextCity);
                minCost = Math.min(minCost, cost);
            }
        }

        memo[mask][pos] = minCost;
        return minCost;
    }

    return tspHelper(1, 0);
}

const sum = (array, i, j) => {
    let result = 0;
    for (let k = i; k <= j; k++) {
        result += array[k];
    }
    return result;
}

export const optimalBstForSuccessful = (keys, frequency) => {
    const n = keys.length;
    const costs = new Array(n).fill().map(() => new Array(n).fill(0));
    const breaks = new Array(n).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        costs[i][i] = frequency[i];
    }

    for (let len = 1; len < n; len++) {
        for (let i = 0; i < n - len; i++) {
            let j = i + len;
            costs[i][j] = Infinity;
            for (let k = i; k <= j; k++) {
                const leftSide = (k > i) ? costs[i][k - 1] : 0;
                const rightSide = (k < j) ? costs[k + 1][j] : 0;
                const rootConst = sum(frequency, i, j);
                const subTreeCost = leftSide + rightSide + rootConst;
                if (costs[i][j] > subTreeCost) {
                    costs[i][j] = subTreeCost;
                    breaks[i][j] = k;
                }
            }
        }
    }

    return costs[0][n - 1];
}

export const optimalBst = (keys, successProbability, failedProbability) => {
    const n = keys.length;
    const costs = new Array(n).fill().map(() => new Array(n).fill(0));
    const breaks = new Array(n).fill().map(() => new Array(n).fill(-1));

    for (let i = 0; i < n; i++) {
        costs[i][i] = successProbability[i] + failedProbability[i];
    }

    for (let len = 1; len < n; len++) {
        for (let i = 0; i < n - len; i++) {
            const j = len + i;
            costs[i][j] = Infinity;
            for (let k = i; k <= j; k++) {
                const leftSide = k > i ? costs[i][k - 1] : 0;
                const rightSide = k < j ? costs[k + 1][j] : 0;
                const rootCost = sum(successProbability, i, j) + sum(failedProbability, i, j);
                const cost = leftSide + rightSide + rootCost;
                if (costs[i][j] > cost) {
                    costs[i][j] = cost;
                    breaks[i][j] = k;
                }
            }
        }
    }

    return costs[0][n - 1];
}