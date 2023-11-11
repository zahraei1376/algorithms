export const countingSort = (array) => {
    const copyArray = [...array];
    const max = Math.max(...array);
    const countArray = new Array(max + 1).fill(0);
    const sortedArray = [];
    for (let i = 0; i < copyArray.length; i++) {
        countArray[copyArray[i]]++;
    }

    for (let i = 2; i < countArray.length; i++) {
        countArray[i] = countArray[i] + countArray[i - 1];
    }

    for (let i = copyArray.length - 1; i >= 0; i--) {
        sortedArray[countArray[copyArray[i]] - 1] = copyArray[i];
        countArray[copyArray[i]]--;
    }

    return sortedArray;
}

const countingSortForRadixSort = (array, place) => {

}

export const radixSort = (array) => {
    if (array.length < 2) return array;

    for (const element of array) {
        if (!Number.isInteger(element)) {
            return `found non-integer value in array`;
        } else if (element < 0) {
            return `found negative value in array`;
        }
    }

    const copyArray = [...array];
    const max = Math.max(...array);
    for (let i = 1; Math.floor(max / i) > 0; i *= 10) {
        countingSortForRadixSort(copyArray, i);
    }

    return copyArray;
}