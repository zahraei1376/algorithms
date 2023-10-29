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

const swap = (array, a, b) => {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

export const minMaxByComparativeMethod = (array) => {
    let min, max;
    if (array[0] > array[1]) {
        max = array[0];
        min = array[1]
    }
    else {
        min = array[0];
        max = array[1]
    }

    for (let i = 2; i < array.length; i += 2) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
        }
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i + 1] > max) {
            max = array[i + 1];
        }
    }

    return { min, max };
}