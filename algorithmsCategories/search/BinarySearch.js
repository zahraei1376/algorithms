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