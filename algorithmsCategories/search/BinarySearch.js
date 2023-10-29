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

export const binarySearchForSpacialIndex = (array, low = 0, high = array.length - 1) => {
    if (!array.length) return "not exist";
    const midIndex = low + (Math.floor((high - low) / 2));
    const midValue = array[midIndex];
    if (midIndex === midValue) return midIndex;
    if (midIndex < midValue) {
        return binarySearchForSpacialIndex(array, low, midIndex - 1);
    } else {
        return binarySearchForSpacialIndex(array, midIndex + 1, array.length - 1);
    }
}

export const binarySearchInSequenceOfUnknownLength = (array, x) => {
    for (let i = 1; ; i *= 2) {
        if (!array[2 * i]) {
            return recBinarySearch(array.slice(i - 1), x);
        }

        if (x >= array[i - 1] && x < array[2 * i]) {
            return recBinarySearch(array.slice(i - 1, 2 * i), x);
        }
    }
}

export const binarySearchInSequenceOfUnknownLengthWithWhile = (array, x) => {
    let low = 0;
    let high = 1;
    while (array[high] && x < array[high]) {
        low = high;
        high *= 2;
    }
    return recBinarySearch(array.slice(low, high + 1), x);
}

export const interpolationSearch = (array, x, low = 0, high = array.length - 1) => {
    if (!array.length) "not exist";

    if (array[low] === x) {
        return x;
    } else {
        let nextGuess = Math.ceil(low + (((x - array[low]) * (high - low)) / (array[high] - array[low])));
        if (x < array[nextGuess]) {
            return interpolationSearch(array, x, 0, nextGuess - 1);
        } else {
            return interpolationSearch(array, x, nextGuess, high);
        }
    }
}

///All Cols are ascending from top to bottom and all Rows are ascending from left to right.
export const findInMatrix = (matrix, key) => {
    let row = matrix.length - 1;
    let col = 0;
    while (row >= 0 && col >= 0) {
        if (key === matrix[row][col]) return `i => ${row} j => ${col}`
        else if (key > matrix[row][col]) {
            col++;
        } else {
            row--;
        }
    }
    return "not exist";
}