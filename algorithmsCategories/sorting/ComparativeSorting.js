const swap = (array, a, b) => {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

export const bubbleSort = (array) => {
    const tempArray = [...array];
    for (let i = 0; i < tempArray.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < tempArray.length - i - 1; j++) {
            if (tempArray[j] > tempArray[j + 1]) {
                swap(tempArray, j, j + 1);
                swapped = true;
            }
        }

        if (!swapped) {
            return tempArray;
        }
    }

    return tempArray;
}

export const insertionSort = (array) => {
    const tempArray = [...array];
    for (let i = 0; i < tempArray.length; i++) {
        for (let j = i; j > 0; j--) {
            if (tempArray[j] < tempArray[j - 1]) {
                swap(tempArray, j, j - 1);
            }
        }
    }
    return tempArray;
}


export const insertionSortWithWhileLoop = (array) => {
    const tempArray = [...array];
    for (let i = 0; i < tempArray.length; i++) {
        let j = i;
        while (j > 0 && tempArray[j] < tempArray[j - 1]) {
            swap(tempArray, j, j - 1);
            j--;
        }
    }
    return tempArray;
}

export const selectionSort = (array) => {
    const tempArray = [...array];
    for (let i = 0; i < tempArray.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < tempArray.length; j++) {
            if (tempArray[j] < tempArray[minIndex]) {
                minIndex = j;
            }
        }

        if (i != minIndex) {
            swap(tempArray, i, minIndex);
        }
    }

    return tempArray;
}

const merge = (leftSide, rightSide) => {

}

export const mergeSort = (array) => {
    if (!array.length) return `You need an array with at least one element.`;
    const tempArray = [...array];
    if (tempArray.length === 1) return tempArray;
    const midIndex = Math.floor(tempArray.length / 2);
    const leftSide = mergeSort(tempArray.slice(0, midIndex));
    const rightSide = mergeSort(tempArray.slice(midIndex));
    return merge(leftSide, rightSide);
}