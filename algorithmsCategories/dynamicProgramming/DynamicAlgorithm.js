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

const deepCopy2DArray = (array) => {
    return array.map(row => row.slice());
}

export const floyd = (adjacencyMatrix) => {
    const adjacency = deepCopy2DArray(adjacencyMatrix);
    const n = adjacency.length;
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i !== k && j !== k && i !== j) {
                    adjacency[i][j] = Math.min(adjacency[i][j], adjacency[i][k] + adjacency[k][j]);
                }
            }
        }
    }

    return adjacency;
}

const printShortestPath = (pathes, i, j) => {
    const path = pathes[i][j];
    if (path === window.Infinity) return `${i} => ${j} no path`;
    if (path === -1) return `${i} => ${j}`;
    else {
        let result = printShortestPath(pathes, i, path);
        return result += ` => ${j}`
    }
}

export const findPathInFord = (adjacencyMatrix) => {
    const adjacency = deepCopy2DArray(adjacencyMatrix);
    const n = adjacency.length;
    const pathes = new Array(n).fill().map(() => new Array(n).fill(-1));
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (adjacency[i][j] === window.Infinity) {
                    pathes[i][j] = window.Infinity;
                }

                if (i !== k && j !== k && i !== j) {
                    if (adjacency[i][j] > adjacency[i][k] + adjacency[k][j]) {
                        adjacency[i][j] = adjacency[i][k] + adjacency[k][j];
                        pathes[i][j] = k;
                    }
                }

            }
        }
    }
    return pathes;
}

export const shortestPathes = (adjacencyMatrix) => {
    const pathes = findPathInFord(adjacencyMatrix);
    let result = "";
    for (let i = 1; i < adjacencyMatrix.length; i++) {
        result += printShortestPath(pathes, 0, i) + "\n";
    }
    return result;
}

export const negativeCircleOrNOtByFoyd = (adjacencyMatrix) => {
    const n = adjacencyMatrix.length;
    const adjacency = floyd(adjacencyMatrix);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (adjacency[i][j] < 0)
                return true;
        }
    }

    return false;
}