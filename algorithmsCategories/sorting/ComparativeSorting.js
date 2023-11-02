const swap = (array, a, b) => {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

export const BubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let swapped = false;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                swap(array, i, j);
                swapped = true;
            }
        }

        if (!swapped) {
            return;
        }
    }

    return array;
}