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
    let i = 0;
    let j = 0;
    const result = [];

    while (i < leftSide.length || j < rightSide.length) {
        if (leftSide[i] < rightSide[j]) {
            result.push(leftSide[i]);
            i++;
        } else {
            result.push(rightSide[j]);
            j++;
        }
    }

    if (i !== leftSide.length) {
        for (let k = i; k < leftSide.length; k++) {
            result.push(leftSide[k]);
        }
    }

    if (j !== rightSide.length) {
        for (let k = i; k < rightSide.length; k++) {
            result.push(rightSide[k]);
        }
    }

    return result;
}

export const mergeSort = (array) => {
    if (array.length <= 1) return array;
    const tempArray = [...array];
    const midIndex = Math.floor(tempArray.length / 2);
    const leftSide = mergeSort(tempArray.slice(0, midIndex));
    const rightSide = mergeSort(tempArray.slice(midIndex));
    return merge(leftSide, rightSide);
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

export const quickSort = (array) => {
    if (array.length <= 1) return array;
    const tempArray = [...array];
    const pivotIndex = partition(tempArray);
    const pivot = tempArray[pivotIndex];
    const leftSide = quickSort(tempArray.slice(0, pivotIndex));
    const rightSide = quickSort(tempArray.slice(pivotIndex + 1));
    return [...leftSide, pivot, ...rightSide];
}

const buildMinHeap = (array) => {
    const len = Math.floor(array.length / 2) - 1;
    for (let i = len; i >= 0; i--) {
        heapify(array, i);
    }
}

const heapify = (array, i) => {
    const leftChildIndex = 2 * i + 1;
    const rightChildIndex = 2 * i + 2;
    let minIndex = i;
    if (leftChildIndex < array.length && array[leftChildIndex] < array[minIndex]) {
        minIndex = 2 * i + 1;
    }
    if (rightChildIndex < array.length && array[rightChildIndex] < array[minIndex]) {
        minIndex = 2 * i + 2;
    }

    if (minIndex !== i) {
        swap(array, minIndex, i);
        heapify(array, minIndex);
    }
}

export const heapSort = (array) => {
    let heap = [...array];
    const result = [];
    buildMinHeap(heap);
    let i = heap.length - 1;
    while (i >= 0) {
        result.push(heap[0]);
        swap(heap, 0, i);
        heap = heap.slice(0, i);
        heapify(heap, 0);
        i--;
    }
    return result;
}

class Node {
    constructor(value, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.value = value
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value > node.value) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        } else {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        }
    }


}

export const treeSort = (array) => {
    const bstTree = new BST();
    for (const element of array) {
        bstTree.insert(element);
    }
}