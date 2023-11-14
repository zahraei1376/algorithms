export const fibonancciDividAndConquer = (n) => {
    if (n <= 1) return n;
    return fibonancciDividAndConquer(n - 1) + fibonancciDividAndConquer(n - 2);
}

export const fibonancciDynamicProgramming = (n) => {
    let f = 0;
    let f1 = 0;
    let f2 = 1;
    if (n <= 1) return n;
    for (let i = 2; i <= n; i++) {
        f = f1 + f2;
        f1 = f2;
        f2 = f;
    }
    return f;
}

const multiplyMatrix = (matrix1, matrix2) => {
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;
    const result = new Array(rows1).fill().map(() => new Array(cols2).fill(0));

    if (cols1 !== rows2) {
        throw new Error("Invalid matrixs");
    }

    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols1; j++) {
            for (let k = 0; k < cols2; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return result;
}

const powerMatrix = (matrix, n) => {
    if (n === 1) return matrix;
    if (n % 2 === 0) {
        const halfPower = powerMatrix(matrix, n / 2);
        return multiplyMatrix(halfPower, halfPower);
    } else {
        const halfPower = powerMatrix(matrix, (n - 1) / 2);
        const squaredMatrix = multiplyMatrix(halfPower, halfPower);
        return multiplyMatrix(matrix, squaredMatrix);
    }
}

export const fibonancciwithOrderTimeLogn = (n) => {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    const baseMatrix = [[1, 1], [1, 0]]
    const resultMatrix = powerMatrix(baseMatrix, n - 1);
    return resultMatrix[0][0];
}