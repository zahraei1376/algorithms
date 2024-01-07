
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i.
// In other words, if you are at nums[i], you can jump to any nums[i + j] where:
// return minimum jump to receive n-1 element

export const jump1 = (nums) => {
    const n = nums.length;
    let index = 0;
    let jump = 0;
    let prev = 0;

    for (let i = 1; i < n; i++) {
        nums[i] = Math.max(nums[i] + i, nums[i - 1]);
    }

    while (index < n - 1) {
        index = nums[index];
        if (index === prev) return "Not possible";
        prev = index;
        jump++;
    }
    return jump;
};
export const jump2 = (nums) => {
    const n = nums.length;
    let maxIndex = 0;
    let lastIndex = 0;
    let jump = 0;
    let prev = 0;

    if (n === 1) return 0;
    for (let i = 0; i < n; i++) {
        maxIndex = Math.max(maxIndex, nums[i] + i);
        if (i === lastIndex) {
            lastIndex = maxIndex;
            jump++;
            if (lastIndex === prev) return "Not possible";
            prev = lastIndex;
            if (lastIndex >= n - 1) return jump;
        }
    }

    return jump;
};
////////////////////////
// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
// According to the definition of h-index on Wikipedia:
// The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

export const hIndex = (citations) => {
    // debugger;
    const temp = citations.sort((a, b) => b - a);
    let result = 0;
    for (let i = 0; i < temp.length; i++) {
        result++;
        if (temp[i] < result) return result - 1;
    }
    return result;
};

export const hIndex2 = (citations) => {
    // debugger;
    let papers = [];
    let total = 0;

    for (let i = 0; i < citations.length; i++) {
        if (papers[citations[i]]) {
            papers[citations[i]] = papers[citations[i]] + 1;
        } else {
            papers[citations[i]] = 1;
        }
    }

    for (let j = papers.length - 1; j >= 0; j--) {
        let current = papers[j] ? papers[j] : 0;
        total = total + current;

        if (total >= j) {
            return j;
        }
    }

    return 0;
};