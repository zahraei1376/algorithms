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
        sortedArray[countArray[copyArray[i]]] = copyArray[i];
        countArray[copyArray[i]]--;
    }

    return sortedArray;
}