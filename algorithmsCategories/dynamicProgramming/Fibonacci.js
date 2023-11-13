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