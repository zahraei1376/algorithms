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