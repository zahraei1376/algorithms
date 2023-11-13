export const fibonancciDividAndConquer = (n) => {
    if (n <= 1) return n;
    return fibonancciDividAndConquer(n - 1) + fibonancciDividAndConquer(n - 2);
}