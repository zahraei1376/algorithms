export const minMax = (array) => {
    let min = array[0];
    let max = array[0];

    for (const element of array) {
        if (element < min) {
            min = element;
        } else if (element > max) {
            max = element
        }
    }

    return { min, max }
}

export const minMaxWithUsingDivideAndConquerApproach = (array) => {
    if (!array.length) return;
    if (array.length === 1) {
        return { min: array[0], max: array[0] };
    }
    if (array.length === 2) {
        if (array[0] > array[1]) {
            return { min: array[1], max: array[0] };
        } else {
            return { min: array[0], max: array[1] };
        }
    }
    let min, max;
    const midIndex = Math.floor((array.length - 1) / 2);
    const { min: minL, max: maxL } = minMaxWithUsingDivideAndConquerApproach(array.slice(0, midIndex));
    const { min: minR, max: maxR } = minMaxWithUsingDivideAndConquerApproach(array.slice(midIndex));

    if (minL < minR) min = minL
    else min = minR;

    if (maxL > maxR) max = maxL
    else max = maxR;

    return { min, max };
}