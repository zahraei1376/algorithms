export const countingSort = (array, lastNumber) => {
    const copyArray = [...array];
    const temp = new Array(lastNumber + 1).fill(0);
    const result = [];
    for (let i = 0; i < copyArray.length; i++) {
        temp[copyArray[i]]++;
    }

    for (let i = 2; i < temp.length; i++) {
        temp[i] = temp[i] + temp[i - 1];
    }

    for (let i = 0; i < copyArray.length; i++) {
        result[temp[copyArray[i]]] = copyArray[i];
        temp[copyArray[i]]--;
    }

    return result;
}