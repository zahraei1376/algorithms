
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