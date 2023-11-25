import { fibonancciDividAndConquer, fibonancciDynamicProgramming, fibonancciwithOrderTimeLogn } from "./algorithmsCategories/dynamicProgramming/Fibonacci";
import { findPathInFord, floyd, negativeCircleOrNOtByFoyd, shortestPathes } from "./algorithmsCategories/dynamicProgramming/Floyd";
import { backPack, chainMultiplicationOfMatrices } from "./algorithmsCategories/dynamicProgramming/DynamicAlgorithm";
import { recBinarySearch, iterativeBinarySearch, binarySearchWithLessComparison, binarySearchInRotatingSequence, binarySearchForSpacialIndex, binarySearchInSequenceOfUnknownLength, binarySearchInSequenceOfUnknownLengthWithWhile, interpolationSearch, findInMatrix } from "./algorithmsCategories/search/BinarySearch";
import { Cryptographic, collisionMethod } from "./algorithmsCategories/search/HashTable";
import { bubbleSort, heapSort, insertionSort, insertionSortWithWhileLoop, mergeSort, quickSort, selectionSort, treeSort, treeSortWithAVL } from "./algorithmsCategories/sorting/ComparativeSorting";
import { findKMinimum, findKMinimumByMethodOfGroupOf5, findSecondMinimum, minMax, minMaxByComparativeMethod, minMaxWithUsingDivideAndConquerApproach } from "./algorithmsCategories/sorting/MinMax";
import { bucketSorting, countingSort, radixSort } from "./algorithmsCategories/sorting/NonComparativeSorting";
/////////////////////////////////////////////binary search
const binaryArray = [10, 20, 30, 40, 50, 60];
const spacialIndexBinaryArray = [-1, 0, 1, 2, 4, 6, 7];
const rotateBinaryArray = [30, 40, 50, 60, 70, 10, 15, 20, 25];
const matrix = [[10, 20, 30, 40], [12, 27, 50, 60], [20, 31, 61, 70], [30, 45, 70, 90]];
console.log(recBinarySearch(binaryArray, 20));
console.log(iterativeBinarySearch(binaryArray, 20));
console.log(binarySearchWithLessComparison(binaryArray, 20));
console.log(binarySearchInRotatingSequence(rotateBinaryArray, 20));
console.log(binarySearchForSpacialIndex(spacialIndexBinaryArray));
console.log(binarySearchInSequenceOfUnknownLength(binaryArray, 20));
console.log(binarySearchInSequenceOfUnknownLengthWithWhile(binaryArray, 20));
console.log(interpolationSearch(binaryArray, 20));
console.log(findInMatrix(matrix, 40));
//////////////////////////////////////////hash table
const hashMethod = (x) => x % 5;

const cryptographic1 = new Cryptographic([23, 42, 37, 26, 41], 5, hashMethod, collisionMethod.OPEN_ADDRESS);
console.log(cryptographic1.hashTable);

const cryptographic2 = new Cryptographic([24, 32, 47, 51, 60, 27, 76], 5, hashMethod, collisionMethod.CHAINING);
console.log(cryptographic2.hashTable);
///////////////////////////////////////////sort
const searchArray = [2, 6, 3, 5, 9, 0, -1];
console.log(minMax(searchArray));
console.log(minMaxWithUsingDivideAndConquerApproach(searchArray));
console.log(minMaxByComparativeMethod(searchArray));
console.log(findSecondMinimum(searchArray));
console.log(findKMinimum(searchArray, 2));
console.log(findKMinimumByMethodOfGroupOf5(searchArray, 2));
/////////////////////////////////////////comparativeSort
const comparetiveSortArray = [-1, 10, 34, 87, 2, 5, 0, 99];
console.log(bubbleSort(comparetiveSortArray));
console.log(insertionSort(comparetiveSortArray));
console.log(insertionSortWithWhileLoop(comparetiveSortArray));
console.log(selectionSort(comparetiveSortArray));
console.log(mergeSort(comparetiveSortArray));
console.log(quickSort(comparetiveSortArray));
console.log(heapSort(comparetiveSortArray));
console.log(treeSort(comparetiveSortArray));
console.log(treeSortWithAVL(comparetiveSortArray));
//////////////////////////////////////nonComparativeSort
const countingSortArray = [4, 1, 4, 3, 4, 3];
const radixSortArray = [209, 158, 109, 123];
const bucketSortArray = [0.28, 0.62, 0.92, 0.18, 0.27, 0.54, 0.17, 0.82, 0.44, 0.29];
console.log(countingSort(countingSortArray));
console.log(radixSort(radixSortArray));
console.log(bucketSorting(bucketSortArray));
///////////////////////////////////////dynamic programming
console.log(fibonancciDividAndConquer(10));
console.log(fibonancciDynamicProgramming(10));
console.log(fibonancciwithOrderTimeLogn(10));
const dimensions = [30, 40, 50, 60, 70];
console.log(chainMultiplicationOfMatrices(dimensions));
const adjacencyMatrix = [[0, 3, window.Infinity, 7], [8, 0, 2, window.Infinity], [5, window.Infinity, 0, 1], [2, window.Infinity, window.Infinity, 0]];
// const adjacencyMatrix = [[0, 3, window.Infinity, window.Infinity], [8, 0, 2, window.Infinity], [5, window.Infinity, 0, window.Infinity], [2, window.Infinity, 1, 0]];
console.log(floyd(adjacencyMatrix));
console.log(findPathInFord(adjacencyMatrix));
console.log(shortestPathes(adjacencyMatrix));
console.log(negativeCircleOrNOtByFoyd(adjacencyMatrix));
const weights = [2, 3, 4, 5];
const prices = [1, 2, 5, 6];
console.log(backPack(weights, prices, 8));