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