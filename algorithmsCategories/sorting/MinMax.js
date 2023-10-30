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

const evenOrNot = (number) => {
    return number % 2 === 0
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


    let len = array.length;
    if (!evenOrNot(array.length)) {
        len = array.length - 1;
    }

    for (let i = 2; i < len.length; i += 2) {
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

    if (!evenOrNot(array.length)) {
        if (array[array.length - 1] < min) {
            min = array[array.length - 1];
        } else if (array[array.length - 1] > max) {
            max = array[array.length - 1];
        }
    }
    return { min, max };
}

export const findSecondMinimum = (array) => {
    if (array.length < 2) {
        return "Requires an array with at least 2 elements";
    }

    const n = array.length;
    const tree = new Array(2 * n - 1);
    for (let i = 0; i < n; i++) {
        tree[i + n - 1] = array[i];
    }

    for (let i = n - 2; i >= 0; i--) {
        tree[i] = Math.min(tree[2 * i + 1], tree[2 * i + 2]);
    }

    let min = tree[0];
    let minIndex = array.indexOf(min);
    tree[minIndex + n - 1] = window.Infinity;

    let i = min + n - 1;
    while (i > 0) {
        i = (i - 1) / 2;
        tree[i] = Math.min(tree[2 * i + 1], tree[2 * i + 2]);
    }

    return tree[0];
}

const partition = (array) => {
    let j = 0;
    const pivot = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            j++;
            swap(array, i, j);
        }
    }
    swap(array, j, 0);
    return j;
}

const partition2 = (arr, pivot) => {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            swap(arr, i, j);
            j++;
        }
    }
    return j;
}

export const findKMinimum = (array, k) => {
    if (array.length === 1) return array[0];
    const pivot = partition(array);
    const pivotIndex = pivot + 1;
    if (pivotIndex === k) return array[pivot];
    else if (pivotIndex > k) return findKMinimum(array.slice(0, pivotIndex), k);
    else return findKMinimum(array.slice(pivotIndex), k - pivotIndex);
}