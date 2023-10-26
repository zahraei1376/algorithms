export const recBinarySearch = (array, x) => {
    if (!array.length) return "not exist";
    const midIndex = Math.floor((array.length - 1) / 2)
    const midValue = array[midIndex];
    if (midValue === x) return midValue;
    if (midValue > x) {
        return recBinarySearch(array.slice(0, midIndex), x);
    } else {
        return recBinarySearch(array.slice(midIndex + 1), x)
    }
}

export const iterativeBinarySearch = (array, x) => {
    let copyArray = [...array];
    while (copyArray.length >= 1) {
        const midIndex = Math.floor((copyArray.length - 1) / 2);
        const midValue = copyArray[midIndex];
        if (midValue === x) {
            return midValue;
        }

        if (midValue < x) {
            copyArray = copyArray.slice(midIndex + 1);
        } else {
            copyArray = copyArray.slice(0, midIndex);
        }
    }
    return "not exist";
}

export const binarySearchWithLessComparison = (array, x) => {
    if (array.length === 1) {
        if (array[0] === x) {
            return array[0]
        } else {
            return "not exist";
        }
    } else {
        const midIndex = Math.floor((array.length - 1) / 2);
        const midValue = array[midIndex];
        if (x > midValue) {
            return binarySearchWithLessComparison(array.slice(midIndex + 1), x);
        } else {
            return binarySearchWithLessComparison(array.slice(0, midIndex + 1), x);
        }
    }
}

export const binarySearchInRotatingSequence = (array, x) => {
    if (!array.length) return "not exist";
    const midIndex = Math.floor((array.length - 1) / 2);
    const midValue = array[midIndex];
    const lastValue = array[array.length - 1];
    if (x === midValue) return midValue;

    if (midValue <= lastValue) {
        if (x <= lastValue && x > midValue) {
            return binarySearchInRotatingSequence(array.slice(midIndex + 1), x);
        } else {
            return binarySearchInRotatingSequence(array.slice(0, midIndex), x);
        }
    }
    else {
        if (x > midValue || x <= lastValue) {
            return binarySearchInRotatingSequence(array.slice(midIndex + 1), x);
        } else {
            return binarySearchInRotatingSequence(array.slice(0, midIndex + 1), x);
        }
    }
}

export const binarySearchInSequenceOfUnknownLength = (array, x) => {
    // debugger;
    for (let i = 1; ; i *= 2) {
        if (!array[2 * i]) {
            return recBinarySearch(array.slice(i - 1), x);
        }

        if (x >= array[i - 1] && x < array[2 * i]) {
            return recBinarySearch(array.slice(i - 1, 2 * i), x);
        }
    }
}